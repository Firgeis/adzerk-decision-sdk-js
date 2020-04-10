/* tslint:disable */
/* eslint-disable */
/**
 * Adzerk Decision API
 * Adzerk Decision API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';

export interface AddCustomPropertiesRequest {
  networkId: number;
  userKey: string;
  body?: object;
}

export interface AddInterestsRequest {
  networkId: number;
  userKey: string;
  interest: string;
}

export interface AddRetargetingSegmentRequest {
  networkId: number;
  advertiserId: number;
  retargetingSegmentId: number;
  userKey: string;
}

export interface ForgetRequest {
  networkId: number;
  userKey: string;
}

export interface GdprConsentRequest {
  networkId: number;
  body?: object;
}

export interface IpOverrideRequest {
  networkId: number;
  userKey: string;
  ip: string;
}

export interface MatchUserRequest {
  networkId: number;
  userKey: string;
  partnerId: number;
  userId: number;
}

export interface OptOutRequest {
  networkId: number;
  userKey: string;
}

export interface ReadRequest {
  networkId: number;
  userKey: string;
}

export interface SetUserCookieRequest {
  networkId: number;
  userKey: string;
}

/**
 * no description
 */
export class UserdbApi extends runtime.BaseAPI {
  /**
   * Add Custom Properties to a User
   */
  async addCustomPropertiesRaw(
    requestParameters: AddCustomPropertiesRequest
  ): Promise<runtime.ApiResponse<Blob>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling addCustomProperties.'
      );
    }

    if (requestParameters.userKey === null || requestParameters.userKey === undefined) {
      throw new runtime.RequiredError(
        'userKey',
        'Required parameter requestParameters.userKey was null or undefined when calling addCustomProperties.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.userKey !== undefined) {
      queryParameters['userKey'] = requestParameters.userKey;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-Adzerk-ApiKey'] = this.configuration.apiKey('X-Adzerk-ApiKey'); // ApiKeyAuth authentication
    }

    const response = await this.request({
      path: `/udb/{networkId}/custom`.replace(
        `{${'networkId'}}`,
        encodeURIComponent(String(requestParameters.networkId))
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    return new runtime.BlobApiResponse(response);
  }

  /**
   * Add Custom Properties to a User
   */
  async addCustomProperties(
    networkId: number,
    userKey: string,
    body?: object
  ): Promise<Blob> {
    const response = await this.addCustomPropertiesRaw({
      networkId: networkId,
      userKey: userKey,
      body: body,
    });
    return await response.value();
  }

  /**
   * Add Interests to a User
   */
  async addInterestsRaw(
    requestParameters: AddInterestsRequest
  ): Promise<runtime.ApiResponse<Blob>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling addInterests.'
      );
    }

    if (requestParameters.userKey === null || requestParameters.userKey === undefined) {
      throw new runtime.RequiredError(
        'userKey',
        'Required parameter requestParameters.userKey was null or undefined when calling addInterests.'
      );
    }

    if (requestParameters.interest === null || requestParameters.interest === undefined) {
      throw new runtime.RequiredError(
        'interest',
        'Required parameter requestParameters.interest was null or undefined when calling addInterests.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.userKey !== undefined) {
      queryParameters['userKey'] = requestParameters.userKey;
    }

    if (requestParameters.interest !== undefined) {
      queryParameters['interest'] = requestParameters.interest;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/udb/{networkId}/interest/i.gif`.replace(
        `{${'networkId'}}`,
        encodeURIComponent(String(requestParameters.networkId))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.BlobApiResponse(response);
  }

  /**
   * Add Interests to a User
   */
  async addInterests(
    networkId: number,
    userKey: string,
    interest: string
  ): Promise<Blob> {
    const response = await this.addInterestsRaw({
      networkId: networkId,
      userKey: userKey,
      interest: interest,
    });
    return await response.value();
  }

  /**
   * Add User to a Retargeting Segment
   */
  async addRetargetingSegmentRaw(
    requestParameters: AddRetargetingSegmentRequest
  ): Promise<runtime.ApiResponse<Blob>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling addRetargetingSegment.'
      );
    }

    if (
      requestParameters.advertiserId === null ||
      requestParameters.advertiserId === undefined
    ) {
      throw new runtime.RequiredError(
        'advertiserId',
        'Required parameter requestParameters.advertiserId was null or undefined when calling addRetargetingSegment.'
      );
    }

    if (
      requestParameters.retargetingSegmentId === null ||
      requestParameters.retargetingSegmentId === undefined
    ) {
      throw new runtime.RequiredError(
        'retargetingSegmentId',
        'Required parameter requestParameters.retargetingSegmentId was null or undefined when calling addRetargetingSegment.'
      );
    }

    if (requestParameters.userKey === null || requestParameters.userKey === undefined) {
      throw new runtime.RequiredError(
        'userKey',
        'Required parameter requestParameters.userKey was null or undefined when calling addRetargetingSegment.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.userKey !== undefined) {
      queryParameters['userKey'] = requestParameters.userKey;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/udb/{networkId}/rt/{advertiserId}/{retargetingSegmentId}/i.gif`
        .replace(
          `{${'networkId'}}`,
          encodeURIComponent(String(requestParameters.networkId))
        )
        .replace(
          `{${'advertiserId'}}`,
          encodeURIComponent(String(requestParameters.advertiserId))
        )
        .replace(
          `{${'retargetingSegmentId'}}`,
          encodeURIComponent(String(requestParameters.retargetingSegmentId))
        ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.BlobApiResponse(response);
  }

  /**
   * Add User to a Retargeting Segment
   */
  async addRetargetingSegment(
    networkId: number,
    advertiserId: number,
    retargetingSegmentId: number,
    userKey: string
  ): Promise<Blob> {
    const response = await this.addRetargetingSegmentRaw({
      networkId: networkId,
      advertiserId: advertiserId,
      retargetingSegmentId: retargetingSegmentId,
      userKey: userKey,
    });
    return await response.value();
  }

  /**
   * Forget User
   */
  async forgetRaw(requestParameters: ForgetRequest): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling forget.'
      );
    }

    if (requestParameters.userKey === null || requestParameters.userKey === undefined) {
      throw new runtime.RequiredError(
        'userKey',
        'Required parameter requestParameters.userKey was null or undefined when calling forget.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.userKey !== undefined) {
      queryParameters['userKey'] = requestParameters.userKey;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-Adzerk-ApiKey'] = this.configuration.apiKey('X-Adzerk-ApiKey'); // ApiKeyAuth authentication
    }

    const response = await this.request({
      path: `/udb/{networkId}`.replace(
        `{${'networkId'}}`,
        encodeURIComponent(String(requestParameters.networkId))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Forget User
   */
  async forget(networkId: number, userKey: string): Promise<void> {
    await this.forgetRaw({ networkId: networkId, userKey: userKey });
  }

  /**
   * GDPR Consent
   */
  async gdprConsentRaw(
    requestParameters: GdprConsentRequest
  ): Promise<runtime.ApiResponse<Blob>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling gdprConsent.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-Adzerk-ApiKey'] = this.configuration.apiKey('X-Adzerk-ApiKey'); // ApiKeyAuth authentication
    }

    const response = await this.request({
      path: `/udb/{networkId}/consent`.replace(
        `{${'networkId'}}`,
        encodeURIComponent(String(requestParameters.networkId))
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    return new runtime.BlobApiResponse(response);
  }

  /**
   * GDPR Consent
   */
  async gdprConsent(networkId: number, body?: object): Promise<Blob> {
    const response = await this.gdprConsentRaw({ networkId: networkId, body: body });
    return await response.value();
  }

  /**
   * IP Address Override
   */
  async ipOverrideRaw(
    requestParameters: IpOverrideRequest
  ): Promise<runtime.ApiResponse<Blob>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling ipOverride.'
      );
    }

    if (requestParameters.userKey === null || requestParameters.userKey === undefined) {
      throw new runtime.RequiredError(
        'userKey',
        'Required parameter requestParameters.userKey was null or undefined when calling ipOverride.'
      );
    }

    if (requestParameters.ip === null || requestParameters.ip === undefined) {
      throw new runtime.RequiredError(
        'ip',
        'Required parameter requestParameters.ip was null or undefined when calling ipOverride.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.userKey !== undefined) {
      queryParameters['userKey'] = requestParameters.userKey;
    }

    if (requestParameters.ip !== undefined) {
      queryParameters['ip'] = requestParameters.ip;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/udb/{networkId}/ip/i.gif`.replace(
        `{${'networkId'}}`,
        encodeURIComponent(String(requestParameters.networkId))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.BlobApiResponse(response);
  }

  /**
   * IP Address Override
   */
  async ipOverride(networkId: number, userKey: string, ip: string): Promise<Blob> {
    const response = await this.ipOverrideRaw({
      networkId: networkId,
      userKey: userKey,
      ip: ip,
    });
    return await response.value();
  }

  /**
   * User Matching
   */
  async matchUserRaw(
    requestParameters: MatchUserRequest
  ): Promise<runtime.ApiResponse<Blob>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling matchUser.'
      );
    }

    if (requestParameters.userKey === null || requestParameters.userKey === undefined) {
      throw new runtime.RequiredError(
        'userKey',
        'Required parameter requestParameters.userKey was null or undefined when calling matchUser.'
      );
    }

    if (
      requestParameters.partnerId === null ||
      requestParameters.partnerId === undefined
    ) {
      throw new runtime.RequiredError(
        'partnerId',
        'Required parameter requestParameters.partnerId was null or undefined when calling matchUser.'
      );
    }

    if (requestParameters.userId === null || requestParameters.userId === undefined) {
      throw new runtime.RequiredError(
        'userId',
        'Required parameter requestParameters.userId was null or undefined when calling matchUser.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.userKey !== undefined) {
      queryParameters['userKey'] = requestParameters.userKey;
    }

    if (requestParameters.partnerId !== undefined) {
      queryParameters['partnerId'] = requestParameters.partnerId;
    }

    if (requestParameters.userId !== undefined) {
      queryParameters['userId'] = requestParameters.userId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/udb/{networkId}/sync/i.gif`.replace(
        `{${'networkId'}}`,
        encodeURIComponent(String(requestParameters.networkId))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.BlobApiResponse(response);
  }

  /**
   * User Matching
   */
  async matchUser(
    networkId: number,
    userKey: string,
    partnerId: number,
    userId: number
  ): Promise<Blob> {
    const response = await this.matchUserRaw({
      networkId: networkId,
      userKey: userKey,
      partnerId: partnerId,
      userId: userId,
    });
    return await response.value();
  }

  /**
   * Opt-Out a User
   */
  async optOutRaw(requestParameters: OptOutRequest): Promise<runtime.ApiResponse<Blob>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling optOut.'
      );
    }

    if (requestParameters.userKey === null || requestParameters.userKey === undefined) {
      throw new runtime.RequiredError(
        'userKey',
        'Required parameter requestParameters.userKey was null or undefined when calling optOut.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.userKey !== undefined) {
      queryParameters['userKey'] = requestParameters.userKey;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/udb/{networkId}/optout/i.gif`.replace(
        `{${'networkId'}}`,
        encodeURIComponent(String(requestParameters.networkId))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.BlobApiResponse(response);
  }

  /**
   * Opt-Out a User
   */
  async optOut(networkId: number, userKey: string): Promise<Blob> {
    const response = await this.optOutRaw({ networkId: networkId, userKey: userKey });
    return await response.value();
  }

  /**
   * Read a User\'s UserDB Record
   */
  async readRaw(requestParameters: ReadRequest): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling read.'
      );
    }

    if (requestParameters.userKey === null || requestParameters.userKey === undefined) {
      throw new runtime.RequiredError(
        'userKey',
        'Required parameter requestParameters.userKey was null or undefined when calling read.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.userKey !== undefined) {
      queryParameters['userKey'] = requestParameters.userKey;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/udb/{networkId}/read`.replace(
        `{${'networkId'}}`,
        encodeURIComponent(String(requestParameters.networkId))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Read a User\'s UserDB Record
   */
  async read(networkId: number, userKey: string): Promise<object> {
    const response = await this.readRaw({ networkId: networkId, userKey: userKey });
    return await response.value();
  }

  /**
   * Set User Cookie
   */
  async setUserCookieRaw(
    requestParameters: SetUserCookieRequest
  ): Promise<runtime.ApiResponse<Blob>> {
    if (
      requestParameters.networkId === null ||
      requestParameters.networkId === undefined
    ) {
      throw new runtime.RequiredError(
        'networkId',
        'Required parameter requestParameters.networkId was null or undefined when calling setUserCookie.'
      );
    }

    if (requestParameters.userKey === null || requestParameters.userKey === undefined) {
      throw new runtime.RequiredError(
        'userKey',
        'Required parameter requestParameters.userKey was null or undefined when calling setUserCookie.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.userKey !== undefined) {
      queryParameters['userKey'] = requestParameters.userKey;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/udb/{networkId}/set/i.gif`.replace(
        `{${'networkId'}}`,
        encodeURIComponent(String(requestParameters.networkId))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.BlobApiResponse(response);
  }

  /**
   * Set User Cookie
   */
  async setUserCookie(networkId: number, userKey: string): Promise<Blob> {
    const response = await this.setUserCookieRaw({
      networkId: networkId,
      userKey: userKey,
    });
    return await response.value();
  }
}
