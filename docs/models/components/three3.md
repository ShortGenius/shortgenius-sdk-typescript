# Three3

## Example Usage

```typescript
import { Three3 } from "shortgenius/models/components";

let value: Three3 = {
  id: "b462c0bc-c459-4453-870c-1849fa0688a4",
  url: "https://well-to-do-cook.org/",
  metadata: {},
  source: "ImagePicker",
  data: {
    sourceMedia: {
      id: "7e7b6ebb-5ca3-42cf-b79d-7f9ded2a6164",
      url: "https://which-fork.info/",
    },
  },
  state: "pending",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deletedAt`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `metadata`                                                                                 | [components.Series3ThumbnailMetadata](../../models/components/series3thumbnailmetadata.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lastError`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `source`                                                                                   | [components.Series3ThumbnailSource](../../models/components/series3thumbnailsource.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `category`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [components.Series3ThumbnailData](../../models/components/series3thumbnaildata.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `state`                                                                                    | [components.Series3ThumbnailState](../../models/components/series3thumbnailstate.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |