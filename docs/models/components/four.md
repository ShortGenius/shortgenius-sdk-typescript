# Four

## Example Usage

```typescript
import { Four } from "shortgenius/models/components";

let value: Four = {
  id: "05b28030-c35e-4b02-8993-e989b4632fb7",
  url: "https://baggy-hovercraft.biz/",
  metadata: {},
  source: "UserImage",
  category: "AIGenerated",
  data: {},
  state: "pending",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `deletedAt`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `metadata`                                                                   | [components.Metadata](../../models/components/metadata.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `lastError`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `source`                                                                     | [components.SeriesMediaSource](../../models/components/seriesmediasource.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `category`                                                                   | [components.Category](../../models/components/category.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [components.Data](../../models/components/data.md)                           | :heavy_check_mark:                                                           | N/A                                                                          |
| `state`                                                                      | [components.MediaState](../../models/components/mediastate.md)               | :heavy_check_mark:                                                           | N/A                                                                          |