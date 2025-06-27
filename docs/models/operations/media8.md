# Media8

## Example Usage

```typescript
import { Media8 } from "shortgenius/models/operations";

let value: Media8 = {
  id: "e9537675-7a96-4775-9947-0aad47529da2",
  url: "https://rare-sonata.com",
  metadata: {
    brandDomain: "<value>",
    assetType: "<value>",
  },
  state: "error",
  data: {
    assetKey: "<value>",
    uploadedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `url`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `deletedAt`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | [operations.GetSeriesMediaResponseMetadata](../../models/operations/getseriesmediaresponsemetadata.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `lastError`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `source`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `category`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `state`                                                                                                | [operations.GetSeriesMediaState](../../models/operations/getseriesmediastate.md)                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [operations.GetSeriesMediaResponseData](../../models/operations/getseriesmediaresponsedata.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |