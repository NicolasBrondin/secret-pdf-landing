# AuthenticationApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authBillingGet**](AuthenticationApi.md#authbillingget) | **GET** /auth/billing |  |
| [**authCheckoutPost**](AuthenticationApi.md#authcheckoutpost) | **POST** /auth/checkout |  |
| [**authCreditsGet**](AuthenticationApi.md#authcreditsget) | **GET** /auth/credits |  |
| [**authGithubCallbackGet**](AuthenticationApi.md#authgithubcallbackget) | **GET** /auth/github/callback |  |
| [**authInvoicesGet**](AuthenticationApi.md#authinvoicesget) | **GET** /auth/invoices |  |
| [**authInvoicesInvoiceIdGet**](AuthenticationApi.md#authinvoicesinvoiceidget) | **GET** /auth/invoices/{invoiceId} |  |
| [**authLogoutPost**](AuthenticationApi.md#authlogoutpost) | **POST** /auth/logout |  |
| [**authMeGet**](AuthenticationApi.md#authmeget) | **GET** /auth/me |  |
| [**authOnboardingStepPut**](AuthenticationApi.md#authonboardingstepputoperation) | **PUT** /auth/onboarding-step |  |
| [**meRecentActivityGet**](AuthenticationApi.md#merecentactivityget) | **GET** /me/recent-activity |  |



## authBillingGet

> AuthBillingGet200Response authBillingGet(userId)



Get customer portal URL for managing payment details in Polar

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthBillingGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | User ID to get billing portal for
    userId: userId_example,
  } satisfies AuthBillingGetRequest;

  try {
    const data = await api.authBillingGet(body);
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
| **userId** | `string` | User ID to get billing portal for | [Defaults to `undefined`] |

### Return type

[**AuthBillingGet200Response**](AuthBillingGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |
| **404** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authCheckoutPost

> AuthCheckoutPost200Response authCheckoutPost()



Create a Polar checkout session URL for subscription

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthCheckoutPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.authCheckoutPost();
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

[**AuthCheckoutPost200Response**](AuthCheckoutPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authCreditsGet

> AuthCreditsGet200Response authCreditsGet()



Get user credit usage and subscription status

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthCreditsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.authCreditsGet();
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

[**AuthCreditsGet200Response**](AuthCreditsGet200Response.md)

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


## authGithubCallbackGet

> AuthGithubCallbackGet200Response authGithubCallbackGet(code, state, error, errorDescription)



GitHub OAuth callback endpoint

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthGithubCallbackGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | Authorization code from GitHub (optional)
    code: code_example,
    // string | CSRF protection state parameter (optional)
    state: state_example,
    // string | Error from GitHub OAuth (optional)
    error: error_example,
    // string | Error description from GitHub (optional)
    errorDescription: errorDescription_example,
  } satisfies AuthGithubCallbackGetRequest;

  try {
    const data = await api.authGithubCallbackGet(body);
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
| **code** | `string` | Authorization code from GitHub | [Optional] [Defaults to `undefined`] |
| **state** | `string` | CSRF protection state parameter | [Optional] [Defaults to `undefined`] |
| **error** | `string` | Error from GitHub OAuth | [Optional] [Defaults to `undefined`] |
| **errorDescription** | `string` | Error description from GitHub | [Optional] [Defaults to `undefined`] |

### Return type

[**AuthGithubCallbackGet200Response**](AuthGithubCallbackGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authInvoicesGet

> AuthInvoicesGet200Response authInvoicesGet(page, limit)



List previous invoices from Polar

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthInvoicesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // number | Page number, defaults to 1 (optional)
    page: 8.14,
    // number | Page size, defaults to 10, max 100 (optional)
    limit: 8.14,
  } satisfies AuthInvoicesGetRequest;

  try {
    const data = await api.authInvoicesGet(body);
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
| **page** | `number` | Page number, defaults to 1 | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page size, defaults to 10, max 100 | [Optional] [Defaults to `undefined`] |

### Return type

[**AuthInvoicesGet200Response**](AuthInvoicesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authInvoicesInvoiceIdGet

> AuthInvoicesInvoiceIdGet200Response authInvoicesInvoiceIdGet(invoiceId)



Get a specific invoice URL from Polar

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthInvoicesInvoiceIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // string | Order/Invoice ID
    invoiceId: invoiceId_example,
  } satisfies AuthInvoicesInvoiceIdGetRequest;

  try {
    const data = await api.authInvoicesInvoiceIdGet(body);
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
| **invoiceId** | `string` | Order/Invoice ID | [Defaults to `undefined`] |

### Return type

[**AuthInvoicesInvoiceIdGet200Response**](AuthInvoicesInvoiceIdGet200Response.md)

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
| **500** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authLogoutPost

> AuthLogoutPost200Response authLogoutPost()



Logout and clear authentication cookie

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthLogoutPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.authLogoutPost();
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

[**AuthLogoutPost200Response**](AuthLogoutPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authMeGet

> AuthMeGet200Response authMeGet()



Get current authenticated user information with billing status

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthMeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.authMeGet();
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

[**AuthMeGet200Response**](AuthMeGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authOnboardingStepPut

> AuthLogoutPost200Response authOnboardingStepPut(authOnboardingStepPutRequest)



Update the onboarding step for the authenticated user

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { AuthOnboardingStepPutOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // AuthOnboardingStepPutRequest
    authOnboardingStepPutRequest: ...,
  } satisfies AuthOnboardingStepPutOperationRequest;

  try {
    const data = await api.authOnboardingStepPut(body);
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
| **authOnboardingStepPutRequest** | [AuthOnboardingStepPutRequest](AuthOnboardingStepPutRequest.md) |  | |

### Return type

[**AuthLogoutPost200Response**](AuthLogoutPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **400** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## meRecentActivityGet

> MeRecentActivityGet200Response meRecentActivityGet()



Get user statistics and recent activity

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '';
import type { MeRecentActivityGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.meRecentActivityGet();
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

[**MeRecentActivityGet200Response**](MeRecentActivityGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Default Response |  -  |
| **401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

