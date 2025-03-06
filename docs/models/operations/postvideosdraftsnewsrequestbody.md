# PostVideosDraftsNewsRequestBody

## Example Usage

```typescript
import { PostVideosDraftsNewsRequestBody } from "shortgenius/models/operations";

let value: PostVideosDraftsNewsRequestBody = {
  topic: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `topic`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The topic you would like the AI to retrieve news about.                                        |
| `locale`                                                                                       | [operations.PostVideosDraftsNewsLocale](../../models/operations/postvideosdraftsnewslocale.md) | :heavy_minus_sign:                                                                             | The locale of the video.                                                                       |