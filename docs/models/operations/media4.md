# Media4

## Example Usage

```typescript
import { Media4 } from "shortgenius/models/operations";

let value: Media4 = {
  id: "4f698b65-1f9f-4340-809a-2aea3aa4380f",
  url: "https://harmful-permafrost.net",
  metadata: {},
  source: "UserImage",
  category: "Stock",
  data: {},
  state: "completed",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `url`                                                                | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `deletedAt`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `metadata`                                                           | [operations.MediaMetadata](../../models/operations/mediametadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `lastError`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `source`                                                             | [operations.MediaSource](../../models/operations/mediasource.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `category`                                                           | [operations.Category](../../models/operations/category.md)           | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [operations.MediaData](../../models/operations/mediadata.md)         | :heavy_check_mark:                                                   | N/A                                                                  |
| `state`                                                              | [operations.MediaState](../../models/operations/mediastate.md)       | :heavy_check_mark:                                                   | N/A                                                                  |