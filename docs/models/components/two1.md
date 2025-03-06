# Two1

## Example Usage

```typescript
import { Two1 } from "shortgenius/models/components";

let value: Two1 = {
  id: "5d775eff-6fca-4332-8e47-7cd26dd12416",
  url: "https://expensive-necklace.com",
  metadata: {
    prompt: "<value>",
  },
  source: "fal-ai/flux-realism",
  state: "placeholder",
  data: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deletedAt`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `metadata`                                                                                 | [components.Series2ThumbnailMetadata](../../models/components/series2thumbnailmetadata.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lastError`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `type`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `source`                                                                                   | [components.Series2ThumbnailSource](../../models/components/series2thumbnailsource.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `category`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `state`                                                                                    | [components.Series2ThumbnailState](../../models/components/series2thumbnailstate.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [components.TwoData](../../models/components/twodata.md)                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |