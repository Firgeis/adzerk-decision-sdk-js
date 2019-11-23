import unfetch from 'isomorphic-unfetch';
import debug from 'debug';
import FormData from 'form-data';

import {
  FetchAPI,
  DecisionApi,
  Configuration,
  FetchParams,
  Middleware,
  RequestContext,
  ResponseContext,
} from './generated';
import { Request, Response } from './models';
import { removeUndefinedAndBlocklisted } from './utils';
import { inherits } from 'util';
import { Decisions } from '../lib/models';

(global as any).FormData = (global as any).FormData || FormData;

const log = debug('adzerk-decision-sdk:client');

function isDecisionMultiWinner(obj: any): boolean {
  return obj instanceof Array;
}

interface ClientOptions {
  networkId: number;
  fetch?: FetchAPI;
  protocol?: string;
  host?: string;
  path?: string;
  middlewares?: Middleware[];
}

export class Client {
  private _api: DecisionApi;
  private _agent: any;
  private _path?: string;

  constructor(opts: ClientOptions) {
    let fetch: FetchAPI = opts.fetch || unfetch;

    let protocol: string = opts.protocol || 'https';
    let host: string = opts.host || `e-${opts.networkId}.adzerk.net`;
    let basePath: string = `${protocol}://${host}`;

    this._path = opts.path;

    if (typeof process !== 'undefined') {
      let { Agent } = require('http');
      this._agent = new Agent({
        keepAlive: true,
        timeout: 10 * 1000,
      });
    }

    let middleware: Middleware = {
      pre: async (context: RequestContext): Promise<FetchParams | void> => {
        log(`Request Url: ${context.url}`);
        log('Request Headers: %o', context.init.headers);
        log('Request Body: %o', context.init.body);

        if (this._agent != undefined) {
          (context.init as any).agent = this._agent;
        }

        if (this._path != undefined) {
          context.url = `${basePath}${this._path}`;
        }

        return context;
      },
      post: async (context: ResponseContext) => {
        log('Response Code: %s', context.response.status);
        log('Response Status Text: %s', context.response.statusText);
      },
    };

    const configuration = new Configuration({
      basePath,
      fetchApi: fetch,
      middleware: [...(opts.middlewares || []), middleware],
    });

    this._api = new DecisionApi(configuration);
  }

  async getDecisions(request: Request): Promise<Response> {
    log('Processing request: %o', request);
    let processedRequest = removeUndefinedAndBlocklisted(request);

    log('Using the processed request: %o', processedRequest);
    let response = await this._api.getDecisions(processedRequest);

    log('Received response: %o', response);

    let decisions: any = response.decisions || {};

    Object.keys(decisions).forEach((k: string) => {
      if (!isDecisionMultiWinner(decisions[k])) {
        decisions[k] = [decisions[k]];
      }
    });

    return response as Response;
  }
}
