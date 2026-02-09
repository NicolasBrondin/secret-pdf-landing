# TemplatesApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**templatesGenerateFromPdfPost**](TemplatesApi.md#templatesgeneratefrompdfpost) | **POST** /templates/generate-from-pdf |  |
| [**templatesGenerateFromPromptPost**](TemplatesApi.md#templatesgeneratefrompromptpostoperation) | **POST** /templates/generate-from-prompt |  |
| [**templatesGet**](TemplatesApi.md#templatesget) | **GET** /templates |  |
| [**templatesPost**](TemplatesApi.md#templatespostoperation) | **POST** /templates |  |
| [**templatesTemplateIdDelete**](TemplatesApi.md#templatestemplateiddelete) | **DELETE** /templates/{templateId} |  |
| [**templatesTemplateIdGet**](TemplatesApi.md#templatestemplateidget) | **GET** /templates/{templateId} |  |
| [**templatesTemplateIdPut**](TemplatesApi.md#templatestemplateidputoperation) | **PUT** /templates/{templateId} |  |



## templatesGenerateFromPdfPost

> TemplatesPost200Response templatesGenerateFromPdfPost(file)



Generate HTML template from PDF file using AI. Upload a PDF file using multipart/form-data with field name \&quot;file\&quot;. The generated template will be automatically saved to the database.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { TemplatesGenerateFromPdfPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // Blob | PDF file to convert to HTML template
    file: BINARY_DATA_HERE,
  } satisfies TemplatesGenerateFromPdfPostRequest;

  try {
    const data = await api.templatesGenerateFromPdfPost(body);
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
| **file** | `Blob` | PDF file to convert to HTML template | [Defaults to `undefined`] |

### Return type

[**TemplatesPost200Response**](TemplatesPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templatesGenerateFromPromptPost

> TemplatesPost200Response templatesGenerateFromPromptPost(templatesGenerateFromPromptPostRequest)



Generate HTML template from AI prompt. Provide a description of the template you want and the data fields to inject.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { TemplatesGenerateFromPromptPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // TemplatesGenerateFromPromptPostRequest
    templatesGenerateFromPromptPostRequest: ...,
  } satisfies TemplatesGenerateFromPromptPostOperationRequest;

  try {
    const data = await api.templatesGenerateFromPromptPost(body);
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
| **templatesGenerateFromPromptPostRequest** | [TemplatesGenerateFromPromptPostRequest](TemplatesGenerateFromPromptPostRequest.md) |  | |

### Return type

[**TemplatesPost200Response**](TemplatesPost200Response.md)

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
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templatesGet

> TemplatesGet200Response templatesGet()



List all templates for authenticated user

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { TemplatesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  try {
    const data = await api.templatesGet();
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

[**TemplatesGet200Response**](TemplatesGet200Response.md)

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


## templatesPost

> TemplatesPost200Response templatesPost(templatesPostRequest)



Create a new HTML template

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { TemplatesPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // TemplatesPostRequest
    templatesPostRequest: ...,
  } satisfies TemplatesPostOperationRequest;

  try {
    const data = await api.templatesPost(body);
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
| **templatesPostRequest** | [TemplatesPostRequest](TemplatesPostRequest.md) |  | |

### Return type

[**TemplatesPost200Response**](TemplatesPost200Response.md)

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


## templatesTemplateIdDelete

> AuthLogoutPost200Response templatesTemplateIdDelete(templateId)



Delete a template

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { TemplatesTemplateIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template ID
    templateId: templateId_example,
  } satisfies TemplatesTemplateIdDeleteRequest;

  try {
    const data = await api.templatesTemplateIdDelete(body);
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
| **templateId** | `string` | Template ID | [Defaults to `undefined`] |

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
| **404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## templatesTemplateIdGet

> TemplatesGet200ResponseTemplatesInner templatesTemplateIdGet(templateId)



Get a template by ID

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { TemplatesTemplateIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template ID
    templateId: templateId_example,
  } satisfies TemplatesTemplateIdGetRequest;

  try {
    const data = await api.templatesTemplateIdGet(body);
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
| **templateId** | `string` | Template ID | [Defaults to `undefined`] |

### Return type

[**TemplatesGet200ResponseTemplatesInner**](TemplatesGet200ResponseTemplatesInner.md)

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


## templatesTemplateIdPut

> TemplatesPost200Response templatesTemplateIdPut(templateId, templatesTemplateIdPutRequest)



Update a template

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { TemplatesTemplateIdPutOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Template ID
    templateId: templateId_example,
    // TemplatesTemplateIdPutRequest (optional)
    templatesTemplateIdPutRequest: ...,
  } satisfies TemplatesTemplateIdPutOperationRequest;

  try {
    const data = await api.templatesTemplateIdPut(body);
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
| **templateId** | `string` | Template ID | [Defaults to `undefined`] |
| **templatesTemplateIdPutRequest** | [TemplatesTemplateIdPutRequest](TemplatesTemplateIdPutRequest.md) |  | [Optional] |

### Return type

[**TemplatesPost200Response**](TemplatesPost200Response.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

