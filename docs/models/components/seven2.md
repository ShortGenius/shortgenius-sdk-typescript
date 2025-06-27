# Seven2

## Example Usage

```typescript
import { Seven2 } from "shortgenius/models/components";

let value: Seven2 = {
  id: "bd4d00df-e53d-4379-8012-1ed37b803350",
  url: "https://well-to-do-vibration.biz",
  metadata: {
    assetId: "<id>",
    assetVersionId: "<id>",
    assetRenderId: "<id>",
  },
  state: "error",
  data: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `url`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `deletedAt`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metadata`                                                               | [components.Series7Metadata](../../models/components/series7metadata.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `lastError`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `source`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `category`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `state`                                                                  | [components.Series7State](../../models/components/series7state.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [components.Series7Data](../../models/components/series7data.md)         | :heavy_check_mark:                                                       | N/A                                                                      |