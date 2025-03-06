# PostVideosDraftsUrlRequestBody

## Example Usage

```typescript
import { PostVideosDraftsUrlRequestBody } from "shortgenius/models/operations";

let value: PostVideosDraftsUrlRequestBody = {
  url: "https://husky-understanding.biz/",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | URL of a webpage to summarize into a video. Only textual data can be processed; sites that block requests may fail. |
| `prompt`                                                                                                            | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Instructions for the AI that is reading the webpage and writing the script.                                         |
| `locale`                                                                                                            | [operations.PostVideosDraftsUrlLocale](../../models/operations/postvideosdraftsurllocale.md)                        | :heavy_minus_sign:                                                                                                  | The locale of the video.                                                                                            |