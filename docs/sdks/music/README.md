# Music
(*music*)

## Overview

Select from a catalog of over 10,000 songs and 100 music genres.

### Available Operations

* [getMusicGenres](#getmusicgenres) - List music genres
* [getMusicGenresId](#getmusicgenresid) - List music

## getMusicGenres

Gets a list of all music genres available.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.music.getMusicGenres();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShortGeniusCore } from "shortgenius/core.js";
import { musicGetMusicGenres } from "shortgenius/funcs/musicGetMusicGenres.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await musicGetMusicGenres(shortGenius);

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

**Promise\<[components.MusicGenre[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getMusicGenresId

Gets a list of all music tracks available for the specified genre.

### Example Usage

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.music.getMusicGenresId({
    id: "<id>",
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
import { musicGetMusicGenresId } from "shortgenius/funcs/musicGetMusicGenresId.js";

// Use `ShortGeniusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shortGenius = new ShortGeniusCore({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await musicGetMusicGenresId(shortGenius, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetMusicGenresIdRequest](../../models/operations/getmusicgenresidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Song[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetMusicGenresIdResponseBody | 400                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |