# shortgenius

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *shortgenius* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=shortgenius&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/shortgenius/production). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

ShortGenius API: Generate AI-based videos, images, and audio, and manage your ShortGenius account.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [shortgenius](#shortgenius)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add shortgenius
```

### PNPM

```bash
pnpm add shortgenius
```

### Bun

```bash
bun add shortgenius
```

### Yarn

```bash
yarn add shortgenius zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "ShortGenius": {
      "command": "npx",
      "args": [
        "-y", "--package", "shortgenius",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "ShortGenius": {
      "command": "npx",
      "args": [
        "-y", "--package", "shortgenius",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package shortgenius -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.getMusicGenres();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable      |
| ------------ | ---- | ----------- | ------------------------- |
| `bearerAuth` | http | HTTP Bearer | `SHORTGENIUS_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.getMusicGenres();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [ShortGenius SDK](docs/sdks/shortgenius/README.md)

* [getMusicGenres](docs/sdks/shortgenius/README.md#getmusicgenres) - List music genres
* [getMusic](docs/sdks/shortgenius/README.md#getmusic) - List music
* [draftVideo](docs/sdks/shortgenius/README.md#draftvideo) - Draft video
* [draftVideoFromURL](docs/sdks/shortgenius/README.md#draftvideofromurl) - Draft video from URL
* [draftVideoFromScript](docs/sdks/shortgenius/README.md#draftvideofromscript) - Draft video from script
* [draftQuizVideo](docs/sdks/shortgenius/README.md#draftquizvideo) - Draft quiz video
* [draftNewsVideo](docs/sdks/shortgenius/README.md#draftnewsvideo) - Draft news video
* [getVideo](docs/sdks/shortgenius/README.md#getvideo) - Get video
* [getVideos](docs/sdks/shortgenius/README.md#getvideos) - List videos
* [createVideo](docs/sdks/shortgenius/README.md#createvideo) - Create video
* [generateVideoTopics](docs/sdks/shortgenius/README.md#generatevideotopics) - Generate video topics
* [createSeries](docs/sdks/shortgenius/README.md#createseries) - Create series
* [getAllSeries](docs/sdks/shortgenius/README.md#getallseries) - List series
* [getSeries](docs/sdks/shortgenius/README.md#getseries) - Get series
* [getConnections](docs/sdks/shortgenius/README.md#getconnections) - List connections
* [createImage](docs/sdks/shortgenius/README.md#createimage) - Create image
* [getImages](docs/sdks/shortgenius/README.md#getimages) - List images
* [getImage](docs/sdks/shortgenius/README.md#getimage) - Get image
* [getImageStyles](docs/sdks/shortgenius/README.md#getimagestyles) - List image styles
* [createSpeech](docs/sdks/shortgenius/README.md#createspeech) - Create speech
* [getAllAudio](docs/sdks/shortgenius/README.md#getallaudio) - List audio
* [getAudio](docs/sdks/shortgenius/README.md#getaudio) - Get audio
* [getVoices](docs/sdks/shortgenius/README.md#getvoices) - List voices
* [getVoice](docs/sdks/shortgenius/README.md#getvoice) - Get voice
* [getUsage](docs/sdks/shortgenius/README.md#getusage) - Get usage

### [status](docs/sdks/status/README.md)

* [check](docs/sdks/status/README.md#check) - Health check

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`createImage`](docs/sdks/shortgenius/README.md#createimage) - Create image
- [`createSeries`](docs/sdks/shortgenius/README.md#createseries) - Create series
- [`createSpeech`](docs/sdks/shortgenius/README.md#createspeech) - Create speech
- [`createVideo`](docs/sdks/shortgenius/README.md#createvideo) - Create video
- [`draftNewsVideo`](docs/sdks/shortgenius/README.md#draftnewsvideo) - Draft news video
- [`draftQuizVideo`](docs/sdks/shortgenius/README.md#draftquizvideo) - Draft quiz video
- [`draftVideo`](docs/sdks/shortgenius/README.md#draftvideo) - Draft video
- [`draftVideoFromScript`](docs/sdks/shortgenius/README.md#draftvideofromscript) - Draft video from script
- [`draftVideoFromURL`](docs/sdks/shortgenius/README.md#draftvideofromurl) - Draft video from URL
- [`generateVideoTopics`](docs/sdks/shortgenius/README.md#generatevideotopics) - Generate video topics
- [`getAllAudio`](docs/sdks/shortgenius/README.md#getallaudio) - List audio
- [`getAllSeries`](docs/sdks/shortgenius/README.md#getallseries) - List series
- [`getAudio`](docs/sdks/shortgenius/README.md#getaudio) - Get audio
- [`getConnections`](docs/sdks/shortgenius/README.md#getconnections) - List connections
- [`getImage`](docs/sdks/shortgenius/README.md#getimage) - Get image
- [`getImages`](docs/sdks/shortgenius/README.md#getimages) - List images
- [`getImageStyles`](docs/sdks/shortgenius/README.md#getimagestyles) - List image styles
- [`getMusic`](docs/sdks/shortgenius/README.md#getmusic) - List music
- [`getMusicGenres`](docs/sdks/shortgenius/README.md#getmusicgenres) - List music genres
- [`getSeries`](docs/sdks/shortgenius/README.md#getseries) - Get series
- [`getUsage`](docs/sdks/shortgenius/README.md#getusage) - Get usage
- [`getVideo`](docs/sdks/shortgenius/README.md#getvideo) - Get video
- [`getVideos`](docs/sdks/shortgenius/README.md#getvideos) - List videos
- [`getVoice`](docs/sdks/shortgenius/README.md#getvoice) - Get voice
- [`getVoices`](docs/sdks/shortgenius/README.md#getvoices) - List voices
- [`statusCheck`](docs/sdks/status/README.md#check) - Health check

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.getMusicGenres({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.getMusicGenres();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ShortGeniusError`](./src/models/errors/shortgeniuserror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { ShortGenius } from "shortgenius";
import * as errors from "shortgenius/models/errors";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  try {
    const result = await shortGenius.getMusic("<id>");

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ShortGeniusError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.GetMusicResponseBody) {
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`ShortGeniusError`](./src/models/errors/shortgeniuserror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (39)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ShortGeniusError`](./src/models/errors/shortgeniuserror.ts)**:
* [`GetMusicResponseBody`](docs/models/errors/getmusicresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`DraftVideoResponseBody`](docs/models/errors/draftvideoresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`DraftVideoFromURLResponseBody`](docs/models/errors/draftvideofromurlresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`DraftVideoFromScriptResponseBody`](docs/models/errors/draftvideofromscriptresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`DraftQuizVideoResponseBody`](docs/models/errors/draftquizvideoresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`DraftNewsVideoResponseBody`](docs/models/errors/draftnewsvideoresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetVideoResponseBody`](docs/models/errors/getvideoresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetVideosResponseBody`](docs/models/errors/getvideosresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`CreateVideoResponseBody`](docs/models/errors/createvideoresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GenerateVideoTopicsResponseBody`](docs/models/errors/generatevideotopicsresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`CreateSeriesResponseBody`](docs/models/errors/createseriesresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetAllSeriesResponseBody`](docs/models/errors/getallseriesresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetSeriesResponseBody`](docs/models/errors/getseriesresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`CreateImageResponseBody`](docs/models/errors/createimageresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetImagesResponseBody`](docs/models/errors/getimagesresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetImageResponseBody`](docs/models/errors/getimageresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetImageStylesResponseBody`](docs/models/errors/getimagestylesresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`CreateSpeechResponseBody`](docs/models/errors/createspeechresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetAllAudioResponseBody`](docs/models/errors/getallaudioresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetAudioResponseBody`](docs/models/errors/getaudioresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetVoicesResponseBody`](docs/models/errors/getvoicesresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`GetVoiceResponseBody`](docs/models/errors/getvoiceresponsebody.md): An error response object. Status code `400`. Applicable to 1 of 26 methods.*
* [`DraftVideoResponseResponseBody`](docs/models/errors/draftvideoresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`DraftVideoFromURLResponseResponseBody`](docs/models/errors/draftvideofromurlresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`DraftVideoFromScriptResponseResponseBody`](docs/models/errors/draftvideofromscriptresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`DraftQuizVideoResponseResponseBody`](docs/models/errors/draftquizvideoresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`DraftNewsVideoResponseResponseBody`](docs/models/errors/draftnewsvideoresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`CreateVideoResponseResponseBody`](docs/models/errors/createvideoresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`GenerateVideoTopicsResponseResponseBody`](docs/models/errors/generatevideotopicsresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`CreateSeriesResponseResponseBody`](docs/models/errors/createseriesresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`GetConnectionsResponseBody`](docs/models/errors/getconnectionsresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`CreateImageResponseResponseBody`](docs/models/errors/createimageresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`CreateSpeechResponseResponseBody`](docs/models/errors/createspeechresponseresponsebody.md): An error response object. Status code `401`. Applicable to 1 of 26 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  serverURL: "https://shortgenius.com/api/v1",
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.getMusicGenres();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { ShortGenius } from "shortgenius";
import { HTTPClient } from "shortgenius/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new ShortGenius({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { ShortGenius } from "shortgenius";

const sdk = new ShortGenius({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `SHORTGENIUS_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=shortgenius&utm_campaign=typescript)
