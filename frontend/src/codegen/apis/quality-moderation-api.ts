/* tslint:disable */
/* eslint-disable */
/**
 * Flathub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration"
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios"
import globalAxios from "axios"
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common"
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base"
// @ts-ignore
import { HTTPValidationError } from "../model"
// @ts-ignore
import { QualityModerationDashboardResponse } from "../model"
// @ts-ignore
import { QualityModerationResponse } from "../model"
// @ts-ignore
import { QualityModerationStatus } from "../model"
// @ts-ignore
import { UpsertQualityModeration } from "../model"
/**
 * QualityModerationApi - axios parameter creator
 * @export
 */
export const QualityModerationApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Delete Review Request For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete: async (
      appId: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'appId' is not null or undefined
      assertParamExists(
        "deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete",
        "appId",
        appId,
      )
      const localVarPath =
        `/quality-moderation/{app_id}/request-review`.replace(
          `{${"app_id"}}`,
          encodeURIComponent(String(appId)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Get Quality Moderation For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQualityModerationForAppQualityModerationAppIdGet: async (
      appId: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'appId' is not null or undefined
      assertParamExists(
        "getQualityModerationForAppQualityModerationAppIdGet",
        "appId",
        appId,
      )
      const localVarPath = `/quality-moderation/{app_id}`.replace(
        `{${"app_id"}}`,
        encodeURIComponent(String(appId)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Get Quality Moderation Status For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQualityModerationStatusForAppQualityModerationAppIdStatusGet: async (
      appId: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'appId' is not null or undefined
      assertParamExists(
        "getQualityModerationStatusForAppQualityModerationAppIdStatusGet",
        "appId",
        appId,
      )
      const localVarPath = `/quality-moderation/{app_id}/status`.replace(
        `{${"app_id"}}`,
        encodeURIComponent(String(appId)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Get Quality Moderation Status
     * @param {number} [page]
     * @param {number} [pageSize]
     * @param {GetQualityModerationStatusQualityModerationStatusGetFilterEnum} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQualityModerationStatusQualityModerationStatusGet: async (
      page?: number,
      pageSize?: number,
      filter?: GetQualityModerationStatusQualityModerationStatusGetFilterEnum,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/quality-moderation/status`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (page !== undefined) {
        localVarQueryParameter["page"] = page
      }

      if (pageSize !== undefined) {
        localVarQueryParameter["page_size"] = pageSize
      }

      if (filter !== undefined) {
        localVarQueryParameter["filter"] = filter
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Request Review For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    requestReviewForAppQualityModerationAppIdRequestReviewPost: async (
      appId: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'appId' is not null or undefined
      assertParamExists(
        "requestReviewForAppQualityModerationAppIdRequestReviewPost",
        "appId",
        appId,
      )
      const localVarPath =
        `/quality-moderation/{app_id}/request-review`.replace(
          `{${"app_id"}}`,
          encodeURIComponent(String(appId)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Set Quality Moderation For App
     * @param {string} appId
     * @param {UpsertQualityModeration} upsertQualityModeration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setQualityModerationForAppQualityModerationAppIdPost: async (
      appId: string,
      upsertQualityModeration: UpsertQualityModeration,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'appId' is not null or undefined
      assertParamExists(
        "setQualityModerationForAppQualityModerationAppIdPost",
        "appId",
        appId,
      )
      // verify required parameter 'upsertQualityModeration' is not null or undefined
      assertParamExists(
        "setQualityModerationForAppQualityModerationAppIdPost",
        "upsertQualityModeration",
        upsertQualityModeration,
      )
      const localVarPath = `/quality-moderation/{app_id}`.replace(
        `{${"app_id"}}`,
        encodeURIComponent(String(appId)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter["Content-Type"] = "application/json"

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        upsertQualityModeration,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * QualityModerationApi - functional programming interface
 * @export
 */
export const QualityModerationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    QualityModerationApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary Delete Review Request For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete(
      appId: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete(
          appId,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     *
     * @summary Get Quality Moderation For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getQualityModerationForAppQualityModerationAppIdGet(
      appId: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<QualityModerationResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getQualityModerationForAppQualityModerationAppIdGet(
          appId,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     *
     * @summary Get Quality Moderation Status For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getQualityModerationStatusForAppQualityModerationAppIdStatusGet(
      appId: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<QualityModerationStatus>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getQualityModerationStatusForAppQualityModerationAppIdStatusGet(
          appId,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     *
     * @summary Get Quality Moderation Status
     * @param {number} [page]
     * @param {number} [pageSize]
     * @param {GetQualityModerationStatusQualityModerationStatusGetFilterEnum} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getQualityModerationStatusQualityModerationStatusGet(
      page?: number,
      pageSize?: number,
      filter?: GetQualityModerationStatusQualityModerationStatusGetFilterEnum,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<QualityModerationDashboardResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getQualityModerationStatusQualityModerationStatusGet(
          page,
          pageSize,
          filter,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     *
     * @summary Request Review For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async requestReviewForAppQualityModerationAppIdRequestReviewPost(
      appId: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.requestReviewForAppQualityModerationAppIdRequestReviewPost(
          appId,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     *
     * @summary Set Quality Moderation For App
     * @param {string} appId
     * @param {UpsertQualityModeration} upsertQualityModeration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async setQualityModerationForAppQualityModerationAppIdPost(
      appId: string,
      upsertQualityModeration: UpsertQualityModeration,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.setQualityModerationForAppQualityModerationAppIdPost(
          appId,
          upsertQualityModeration,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
  }
}

/**
 * QualityModerationApi - factory interface
 * @export
 */
export const QualityModerationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = QualityModerationApiFp(configuration)
  return {
    /**
     *
     * @summary Delete Review Request For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete(
      appId: string,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete(
          appId,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Get Quality Moderation For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQualityModerationForAppQualityModerationAppIdGet(
      appId: string,
      options?: any,
    ): AxiosPromise<QualityModerationResponse> {
      return localVarFp
        .getQualityModerationForAppQualityModerationAppIdGet(appId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Get Quality Moderation Status For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQualityModerationStatusForAppQualityModerationAppIdStatusGet(
      appId: string,
      options?: any,
    ): AxiosPromise<QualityModerationStatus> {
      return localVarFp
        .getQualityModerationStatusForAppQualityModerationAppIdStatusGet(
          appId,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Get Quality Moderation Status
     * @param {number} [page]
     * @param {number} [pageSize]
     * @param {GetQualityModerationStatusQualityModerationStatusGetFilterEnum} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQualityModerationStatusQualityModerationStatusGet(
      page?: number,
      pageSize?: number,
      filter?: GetQualityModerationStatusQualityModerationStatusGetFilterEnum,
      options?: any,
    ): AxiosPromise<QualityModerationDashboardResponse> {
      return localVarFp
        .getQualityModerationStatusQualityModerationStatusGet(
          page,
          pageSize,
          filter,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Request Review For App
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    requestReviewForAppQualityModerationAppIdRequestReviewPost(
      appId: string,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .requestReviewForAppQualityModerationAppIdRequestReviewPost(
          appId,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Set Quality Moderation For App
     * @param {string} appId
     * @param {UpsertQualityModeration} upsertQualityModeration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setQualityModerationForAppQualityModerationAppIdPost(
      appId: string,
      upsertQualityModeration: UpsertQualityModeration,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .setQualityModerationForAppQualityModerationAppIdPost(
          appId,
          upsertQualityModeration,
          options,
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * QualityModerationApi - object-oriented interface
 * @export
 * @class QualityModerationApi
 * @extends {BaseAPI}
 */
export class QualityModerationApi extends BaseAPI {
  /**
   *
   * @summary Delete Review Request For App
   * @param {string} appId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QualityModerationApi
   */
  public deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete(
    appId: string,
    options?: AxiosRequestConfig,
  ) {
    return QualityModerationApiFp(this.configuration)
      .deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete(
        appId,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get Quality Moderation For App
   * @param {string} appId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QualityModerationApi
   */
  public getQualityModerationForAppQualityModerationAppIdGet(
    appId: string,
    options?: AxiosRequestConfig,
  ) {
    return QualityModerationApiFp(this.configuration)
      .getQualityModerationForAppQualityModerationAppIdGet(appId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get Quality Moderation Status For App
   * @param {string} appId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QualityModerationApi
   */
  public getQualityModerationStatusForAppQualityModerationAppIdStatusGet(
    appId: string,
    options?: AxiosRequestConfig,
  ) {
    return QualityModerationApiFp(this.configuration)
      .getQualityModerationStatusForAppQualityModerationAppIdStatusGet(
        appId,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get Quality Moderation Status
   * @param {number} [page]
   * @param {number} [pageSize]
   * @param {GetQualityModerationStatusQualityModerationStatusGetFilterEnum} [filter]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QualityModerationApi
   */
  public getQualityModerationStatusQualityModerationStatusGet(
    page?: number,
    pageSize?: number,
    filter?: GetQualityModerationStatusQualityModerationStatusGetFilterEnum,
    options?: AxiosRequestConfig,
  ) {
    return QualityModerationApiFp(this.configuration)
      .getQualityModerationStatusQualityModerationStatusGet(
        page,
        pageSize,
        filter,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Request Review For App
   * @param {string} appId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QualityModerationApi
   */
  public requestReviewForAppQualityModerationAppIdRequestReviewPost(
    appId: string,
    options?: AxiosRequestConfig,
  ) {
    return QualityModerationApiFp(this.configuration)
      .requestReviewForAppQualityModerationAppIdRequestReviewPost(
        appId,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Set Quality Moderation For App
   * @param {string} appId
   * @param {UpsertQualityModeration} upsertQualityModeration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QualityModerationApi
   */
  public setQualityModerationForAppQualityModerationAppIdPost(
    appId: string,
    upsertQualityModeration: UpsertQualityModeration,
    options?: AxiosRequestConfig,
  ) {
    return QualityModerationApiFp(this.configuration)
      .setQualityModerationForAppQualityModerationAppIdPost(
        appId,
        upsertQualityModeration,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * @export
 */
export const GetQualityModerationStatusQualityModerationStatusGetFilterEnum = {
  All: "all",
  Passing: "passing",
  Todo: "todo",
} as const
export type GetQualityModerationStatusQualityModerationStatusGetFilterEnum =
  (typeof GetQualityModerationStatusQualityModerationStatusGetFilterEnum)[keyof typeof GetQualityModerationStatusQualityModerationStatusGetFilterEnum]
