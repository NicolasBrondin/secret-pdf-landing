# DocumentsApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**documentsUsageStatsGet**](DocumentsApi.md#documentsusagestatsget) | **GET** /documents/usage-stats |  |
| [**generatePost**](DocumentsApi.md#generatepostoperation) | **POST** /generate |  |



## documentsUsageStatsGet

> DocumentsUsageStatsGet200Response documentsUsageStatsGet()



Get document generation usage statistics for the last 7 days

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '';
import type { DocumentsUsageStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  try {
    const data = await api.documentsUsageStatsGet();
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

[**DocumentsUsageStatsGet200Response**](DocumentsUsageStatsGet200Response.md)

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


## generatePost

> GeneratePost200Response generatePost(generatePostRequest)



Generate a PDF document from a template

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '';
import type { GeneratePostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // GeneratePostRequest (optional)
    generatePostRequest: ...,
  } satisfies GeneratePostOperationRequest;

  try {
    const data = await api.generatePost(body);
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
| **generatePostRequest** | [GeneratePostRequest](GeneratePostRequest.md) |  | [Optional] |

### Return type

[**GeneratePost200Response**](GeneratePost200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **404** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

