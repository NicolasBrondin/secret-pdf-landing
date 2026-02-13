# StorageApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**storageConfigPost**](StorageApi.md#storageconfigpostoperation) | **POST** /storage-config |  |
| [**storageConfigStorageKeyDelete**](StorageApi.md#storageconfigstoragekeydelete) | **DELETE** /storage-config/{storageKey} |  |
| [**storageConfigStorageKeyGet**](StorageApi.md#storageconfigstoragekeyget) | **GET** /storage-config/{storageKey} |  |
| [**storageConfigStorageKeyPut**](StorageApi.md#storageconfigstoragekeyputoperation) | **PUT** /storage-config/{storageKey} |  |
| [**storageConfigsGet**](StorageApi.md#storageconfigsget) | **GET** /storage-configs |  |



## storageConfigPost

> AuthLogoutPost200Response storageConfigPost(storageConfigPostRequest)



Create a new storage configuration

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { StorageConfigPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // StorageConfigPostRequest
    storageConfigPostRequest: ...,
  } satisfies StorageConfigPostOperationRequest;

  try {
    const data = await api.storageConfigPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **storageConfigPostRequest** | [StorageConfigPostRequest](StorageConfigPostRequest.md) |  | |

### Return type

[**AuthLogoutPost200Response**](AuthLogoutPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## storageConfigStorageKeyDelete

> AuthLogoutPost200Response storageConfigStorageKeyDelete(storageKey)



Delete a storage configuration

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { StorageConfigStorageKeyDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Storage configuration key
    storageKey: storageKey_example,
  } satisfies StorageConfigStorageKeyDeleteRequest;

  try {
    const data = await api.storageConfigStorageKeyDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **storageKey** | `string` | Storage configuration key | [Defaults to `undefined`] |

### Return type

[**AuthLogoutPost200Response**](AuthLogoutPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## storageConfigStorageKeyGet

> StorageConfigStorageKeyGet200Response storageConfigStorageKeyGet(storageKey)



Get a storage configuration by key

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { StorageConfigStorageKeyGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Storage configuration key
    storageKey: storageKey_example,
  } satisfies StorageConfigStorageKeyGetRequest;

  try {
    const data = await api.storageConfigStorageKeyGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **storageKey** | `string` | Storage configuration key | [Defaults to `undefined`] |

### Return type

[**StorageConfigStorageKeyGet200Response**](StorageConfigStorageKeyGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## storageConfigStorageKeyPut

> AuthLogoutPost200Response storageConfigStorageKeyPut(storageKey, storageConfigStorageKeyPutRequest)



Update a storage configuration

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { StorageConfigStorageKeyPutOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Storage configuration key
    storageKey: storageKey_example,
    // StorageConfigStorageKeyPutRequest
    storageConfigStorageKeyPutRequest: ...,
  } satisfies StorageConfigStorageKeyPutOperationRequest;

  try {
    const data = await api.storageConfigStorageKeyPut(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **storageKey** | `string` | Storage configuration key | [Defaults to `undefined`] |
| **storageConfigStorageKeyPutRequest** | [StorageConfigStorageKeyPutRequest](StorageConfigStorageKeyPutRequest.md) |  | |

### Return type

[**AuthLogoutPost200Response**](AuthLogoutPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## storageConfigsGet

> StorageConfigsGet200Response storageConfigsGet()



List all storage configurations

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { StorageConfigsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  try {
    const data = await api.storageConfigsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StorageConfigsGet200Response**](StorageConfigsGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

