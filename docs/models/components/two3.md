# Two3

## Example Usage

```typescript
import { Two3 } from "shortgenius/models/components";

let value: Two3 = {
  id: "d1466a5b-a669-41da-8b81-6650b19baf1d",
  url: "https://impressionable-lieu.info",
  metadata: {
    prompt: "<value>",
  },
  source: "luma-ai",
  state: "pending",
  data: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deletedAt`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `metadata`                                                                         | [components.Series2Metadata](../../models/components/series2metadata.md)           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `lastError`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `source`                                                                           | [components.Series2Source](../../models/components/series2source.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `category`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `state`                                                                            | [components.Series2State](../../models/components/series2state.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [components.Series2ThumbnailData](../../models/components/series2thumbnaildata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |