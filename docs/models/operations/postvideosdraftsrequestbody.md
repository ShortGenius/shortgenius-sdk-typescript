# PostVideosDraftsRequestBody

## Example Usage

```typescript
import { PostVideosDraftsRequestBody } from "shortgenius/models/operations";

let value: PostVideosDraftsRequestBody = {
  topic: "<value>",
  duration: "180",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `topic`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The topic to write a video about.                                                                         |
| `duration`                                                                                                | [operations.Duration](../../models/operations/duration.md)                                                | :heavy_check_mark:                                                                                        | Desired duration in seconds of the final script. This is a best-effort basis (always verify credit cost). |
| `locale`                                                                                                  | [operations.Locale](../../models/operations/locale.md)                                                    | :heavy_minus_sign:                                                                                        | The locale of the video.                                                                                  |