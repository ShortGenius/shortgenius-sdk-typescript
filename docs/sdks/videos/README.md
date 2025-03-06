# Videos
(*videos*)

## Overview

Create a video from a topic, webpage, or script.

### Available Operations

* [postVideosDrafts](#postvideosdrafts) - Draft video
* [postVideosDraftsUrl](#postvideosdraftsurl) - Draft video from URL
* [postVideosDraftsScript](#postvideosdraftsscript) - Draft video from script
* [postVideosDraftsQuiz](#postvideosdraftsquiz) - Draft quiz video
* [postVideosDraftsNews](#postvideosdraftsnews) - Draft news video
* [getVideosId](#getvideosid) - Get video
* [getVideos](#getvideos) - List videos
* [postVideos](#postvideos) - Create video
* [postVideosTopics](#postvideostopics) - Generate video topics for content type

## postVideosDrafts

Write a video on the provided topic. After calling this endpoint, call [Create Video](#tag/videos/POST/videos) with the results to create the video.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.videos.postVideosDrafts();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { videosPostVideosDrafts } from "shortgenius/funcs/videosPostVideosDrafts.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await videosPostVideosDrafts(shortGenius);

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
| `request`                                                                                                                                                                      | [operations.PostVideosDraftsRequestBody](../../models/operations/postvideosdraftsrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DraftVideo](../../models/components/draftvideo.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.PostVideosDraftsResponseBody       | 400                                       | application/json                          |
| errors.PostVideosDraftsVideosResponseBody | 401                                       | application/json                          |
| errors.APIError                           | 4XX, 5XX                                  | \*/\*                                     |

## postVideosDraftsUrl

Retrieve the content of a webpage and write a video based on it. ___Only text is currently supported___ -- the AI cannot watch videos. After calling this endpoint, call [Create Video](#tag/videos/POST/videos) with the results to create the video.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.videos.postVideosDraftsUrl();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { videosPostVideosDraftsUrl } from "shortgenius/funcs/videosPostVideosDraftsUrl.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await videosPostVideosDraftsUrl(shortGenius);

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
| `request`                                                                                                                                                                      | [operations.PostVideosDraftsUrlRequestBody](../../models/operations/postvideosdraftsurlrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DraftVideo](../../models/components/draftvideo.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.PostVideosDraftsUrlResponseBody       | 400                                          | application/json                             |
| errors.PostVideosDraftsUrlVideosResponseBody | 401                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## postVideosDraftsScript

Write a video using the provided script. After calling this endpoint, call [Create Video](#tag/videos/POST/videos) with the results to create the video.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.videos.postVideosDraftsScript();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { videosPostVideosDraftsScript } from "shortgenius/funcs/videosPostVideosDraftsScript.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await videosPostVideosDraftsScript(shortGenius);

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
| `request`                                                                                                                                                                      | [operations.PostVideosDraftsScriptRequestBody](../../models/operations/postvideosdraftsscriptrequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DraftVideo](../../models/components/draftvideo.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.PostVideosDraftsScriptResponseBody       | 400                                             | application/json                                |
| errors.PostVideosDraftsScriptVideosResponseBody | 401                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## postVideosDraftsQuiz

Make a quiz on the provided topic. After calling this endpoint, call [Create Video](#tag/videos/POST/videos) with the results to create the video.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.videos.postVideosDraftsQuiz();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { videosPostVideosDraftsQuiz } from "shortgenius/funcs/videosPostVideosDraftsQuiz.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await videosPostVideosDraftsQuiz(shortGenius);

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
| `request`                                                                                                                                                                      | [operations.PostVideosDraftsQuizRequestBody](../../models/operations/postvideosdraftsquizrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DraftQuizVideo](../../models/components/draftquizvideo.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.PostVideosDraftsQuizResponseBody       | 400                                           | application/json                              |
| errors.PostVideosDraftsQuizVideosResponseBody | 401                                           | application/json                              |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |

## postVideosDraftsNews

Retrieve the latest news on the provided topic, then generate video scenes. After calling this endpoint, call [Create Video](#tag/videos/POST/videos) with the results to create the video.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.videos.postVideosDraftsNews();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { videosPostVideosDraftsNews } from "shortgenius/funcs/videosPostVideosDraftsNews.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await videosPostVideosDraftsNews(shortGenius);

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
| `request`                                                                                                                                                                      | [operations.PostVideosDraftsNewsRequestBody](../../models/operations/postvideosdraftsnewsrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DraftVideo](../../models/components/draftvideo.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.PostVideosDraftsNewsResponseBody       | 400                                           | application/json                              |
| errors.PostVideosDraftsNewsVideosResponseBody | 401                                           | application/json                              |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |

## getVideosId

Get video

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.videos.getVideosId({
    id: "f54ef435-bb01-4d1e-a20b-60783a1498ad",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { videosGetVideosId } from "shortgenius/funcs/videosGetVideosId.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await videosGetVideosId(shortGenius, {
    id: "f54ef435-bb01-4d1e-a20b-60783a1498ad",
  });

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
| `request`                                                                                                                                                                      | [operations.GetVideosIdRequest](../../models/operations/getvideosidrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Video](../../models/components/video.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetVideosIdResponseBody | 400                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## getVideos

List videos

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.videos.getVideos({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { videosGetVideos } from "shortgenius/funcs/videosGetVideos.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await videosGetVideos(shortGenius, {});

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
| `request`                                                                                                                                                                      | [operations.GetVideosRequest](../../models/operations/getvideosrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetVideosResponseBody](../../models/operations/getvideosresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GetVideosResponseBody | 400                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |

## postVideos

Before using this endpoint, call one of the following endpoints to generate and review your video's content:
- [Draft video](#tag/videos/POST/videos/drafts)
- [Draft video from URL](#tag/videos/POST/videos/drafts/url)
- [Draft video from script](#tag/videos/POST/videos/drafts/script)
- [Draft quiz video](#tag/videos/POST/videos/drafts/quiz)
- [Draft news video](#tag/videos/POST/videos/drafts/news)

Once you (or your LLM) are happy, you can pass the content to this endpoint to create and render the video.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.videos.postVideos();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { videosPostVideos } from "shortgenius/funcs/videosPostVideos.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await videosPostVideos(shortGenius);

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
| `request`                                                                                                                                                                      | [operations.PostVideosRequestBody](../../models/operations/postvideosrequestbody.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Video](../../models/components/video.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.PostVideosResponseBody       | 400                                 | application/json                    |
| errors.PostVideosVideosResponseBody | 401                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## postVideosTopics

Generate ideas for around 50 videos within a given topic. You can then pass these to the [Create video](#tag/videos/POST/videos) endpoint.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.videos.postVideosTopics();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { videosPostVideosTopics } from "shortgenius/funcs/videosPostVideosTopics.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await videosPostVideosTopics(shortGenius);

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
| `request`                                                                                                                                                                      | [operations.PostVideosTopicsRequestBody](../../models/operations/postvideostopicsrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string[]](../../models/.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.PostVideosTopicsResponseBody       | 400                                       | application/json                          |
| errors.PostVideosTopicsVideosResponseBody | 401                                       | application/json                          |
| errors.APIError                           | 4XX, 5XX                                  | \*/\*                                     |