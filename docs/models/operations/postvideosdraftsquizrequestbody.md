# PostVideosDraftsQuizRequestBody

## Example Usage

```typescript
import { PostVideosDraftsQuizRequestBody } from "shortgenius/models/operations";

let value: PostVideosDraftsQuizRequestBody = {
  topic: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `topic`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The topic you would like to make a quiz about.                                                 |
| `locale`                                                                                       | [operations.PostVideosDraftsQuizLocale](../../models/operations/postvideosdraftsquizlocale.md) | :heavy_minus_sign:                                                                             | The locale of the video.                                                                       |