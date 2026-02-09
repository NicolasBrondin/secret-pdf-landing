# APIKeysApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiKeysGet**](APIKeysApi.md#apikeysget) | **GET** /api-keys |  |
| [**apiKeysIdDeactivatePut**](APIKeysApi.md#apikeysiddeactivateput) | **PUT** /api-keys/{id}/deactivate |  |
| [**apiKeysPost**](APIKeysApi.md#apikeyspostoperation) | **POST** /api-keys |  |



## apiKeysGet

> ApiKeysGet200Response apiKeysGet()



List all API keys for authenticated user

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '';
import type { ApiKeysGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new APIKeysApi(config);

  try {
    const data = await api.apiKeysGet();
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

[**ApiKeysGet200Response**](ApiKeysGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiKeysIdDeactivatePut

> AuthLogoutPost200Response apiKeysIdDeactivatePut(id)



Deactivate an API key

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '';
import type { ApiKeysIdDeactivatePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new APIKeysApi(config);

  const body = {
    // string | API Key ID
    id: id_example,
  } satisfies ApiKeysIdDeactivatePutRequest;

  try {
    const data = await api.apiKeysIdDeactivatePut(body);
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
| **id** | `string` | API Key ID | [Defaults to `undefined`] |

### Return type

[**AuthLogoutPost200Response**](AuthLogoutPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiKeysPost

> ApiKeysPost200Response apiKeysPost(apiKeysPostRequest)



Create a new API key

### Example

```ts
import {
  Configuration,
  APIKeysApi,
} from '';
import type { ApiKeysPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new APIKeysApi(config);

  const body = {
    // ApiKeysPostRequest (optional)
    apiKeysPostRequest: ...,
  } satisfies ApiKeysPostOperationRequest;

  try {
    const data = await api.apiKeysPost(body);
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
| **apiKeysPostRequest** | [ApiKeysPostRequest](ApiKeysPostRequest.md) |  | [Optional] |

### Return type

[**ApiKeysPost200Response**](ApiKeysPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

