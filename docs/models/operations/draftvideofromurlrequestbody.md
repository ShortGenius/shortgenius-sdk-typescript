# DraftVideoFromURLRequestBody

## Example Usage

```typescript
import { DraftVideoFromURLRequestBody } from "shortgenius/models/operations";

let value: DraftVideoFromURLRequestBody = {
  url: "https://angelic-metabolite.name",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | URL of a webpage to summarize into a video. Only textual data can be processed; sites that block requests may fail. |
| `prompt`                                                                                                            | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Instructions for the AI that is reading the webpage and writing the script.                                         |
| `locale`                                                                                                            | [operations.DraftVideoFromURLLocale](../../models/operations/draftvideofromurllocale.md)                            | :heavy_minus_sign:                                                                                                  | The locale of the video.                                                                                            |