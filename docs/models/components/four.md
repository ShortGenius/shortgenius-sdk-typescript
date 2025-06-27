# Four

## Example Usage

```typescript
import { Four } from "shortgenius/models/components";

let value: Four = {
  id: "35bf96ca-76a4-4aa9-8a79-b956b86aa7b2",
  url: "https://raw-antelope.biz/",
  metadata: {},
  source: "UserImage",
  category: "Stock",
  data: {},
  state: "completed",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `url`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deletedAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `metadata`                                                                                   | [components.Metadata](../../models/components/metadata.md)                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `lastError`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `source`                                                                                     | [components.SeriesMediaSource](../../models/components/seriesmediasource.md)                 | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `category`                                                                                   | [components.Category](../../models/components/category.md)                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.Data](../../models/components/data.md)                                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `state`                                                                                      | [components.SeriesMediaThumbnailState](../../models/components/seriesmediathumbnailstate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |