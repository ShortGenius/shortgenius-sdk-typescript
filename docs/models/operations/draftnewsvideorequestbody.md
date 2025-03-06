# DraftNewsVideoRequestBody

## Example Usage

```typescript
import { DraftNewsVideoRequestBody } from "shortgenius/models/operations";

let value: DraftNewsVideoRequestBody = {
  topic: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `topic`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The topic you would like the AI to retrieve news about.                            |
| `locale`                                                                           | [operations.DraftNewsVideoLocale](../../models/operations/draftnewsvideolocale.md) | :heavy_minus_sign:                                                                 | The locale of the video.                                                           |