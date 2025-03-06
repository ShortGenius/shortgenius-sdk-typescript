# DraftQuizVideoRequestBody

## Example Usage

```typescript
import { DraftQuizVideoRequestBody } from "shortgenius/models/operations";

let value: DraftQuizVideoRequestBody = {
  topic: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `topic`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The topic you would like to make a quiz about.                                     |
| `locale`                                                                           | [operations.DraftQuizVideoLocale](../../models/operations/draftquizvideolocale.md) | :heavy_minus_sign:                                                                 | The locale of the video.                                                           |