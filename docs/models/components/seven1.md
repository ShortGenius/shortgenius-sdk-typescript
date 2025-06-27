# Seven1

## Example Usage

```typescript
import { Seven1 } from "shortgenius/models/components";

let value: Seven1 = {
  id: "80106ae6-50e7-4b78-a56e-3d0880afba79",
  url: "https://lone-schedule.info/",
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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `url`                                                                | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `deletedAt`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `metadata`                                                           | [components.SevenMetadata](../../models/components/sevenmetadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `lastError`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `source`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `category`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `state`                                                              | [components.SevenState](../../models/components/sevenstate.md)       | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [components.SevenData](../../models/components/sevendata.md)         | :heavy_check_mark:                                                   | N/A                                                                  |