# Publishing
(*publishing*)

## Overview

Post your videos to TikTok, YouTube, X, and more.

### Available Operations

* [getConnections](#getconnections) - Get connections

## getConnections

Get all the video publishing destinations you have configured.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.publishing.getConnections();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { publishingGetConnections } from "shortgenius/funcs/publishingGetConnections.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await publishingGetConnections(shortGenius);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Connection[]](../../models/.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetConnectionsResponseBody | 401                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |