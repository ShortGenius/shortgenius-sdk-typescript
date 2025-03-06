# Media4

## Example Usage

```typescript
import { Media4 } from "shortgenius/models/operations";

let value: Media4 = {
  id: "f4427dbd-3be4-4b64-9f51-67cfde7b415b",
  url: "https://squeaky-corral.biz",
  metadata: {},
  source: "UserImage",
  category: "AIGenerated",
  data: {},
  state: "generating",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `url`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `deletedAt`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `metadata`                                                     | [operations.Metadata](../../models/operations/metadata.md)     | :heavy_check_mark:                                             | N/A                                                            |
| `lastError`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `type`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `source`                                                       | [operations.Source](../../models/operations/source.md)         | :heavy_check_mark:                                             | N/A                                                            |
| `category`                                                     | [operations.Category](../../models/operations/category.md)     | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [operations.Data](../../models/operations/data.md)             | :heavy_check_mark:                                             | N/A                                                            |
| `state`                                                        | [operations.MediaState](../../models/operations/mediastate.md) | :heavy_check_mark:                                             | N/A                                                            |