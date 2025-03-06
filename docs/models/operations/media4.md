# Media4

## Example Usage

```typescript
import { Media4 } from "shortgenius/models/operations";

let value: Media4 = {
  id: "dbd3be4b-64f5-4167-bcfd-e7b415b4dc35",
  url: "https://grandiose-flood.net/",
  metadata: {},
  source: "GeneratedImage",
  category: "AIGenerated",
  data: {},
  state: "completed",
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