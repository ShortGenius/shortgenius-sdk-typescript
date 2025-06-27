# Nine

## Example Usage

```typescript
import { Nine } from "shortgenius/models/components";

let value: Nine = {
  id: "7464a22d-984a-4c2c-b7fb-ee76465e41f7",
  url: "https://illustrious-nun.name",
  metadata: {
    adId: "<id>",
    creativeId: "<id>",
  },
  state: "completed",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deletedAt`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | [components.SeriesMediaThumbnailMetadata](../../models/components/seriesmediathumbnailmetadata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `lastError`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `source`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `category`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `state`                                                                                            | [components.SeriesMediaState](../../models/components/seriesmediastate.md)                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |