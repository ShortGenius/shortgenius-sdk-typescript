# UgcMedia1

## Example Usage

```typescript
import { UgcMedia1 } from "shortgenius/models/operations";

let value: UgcMedia1 = {
  url: "https://well-off-toothbrush.info/",
  source: "Ugc",
  data: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deletedAt`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | *any*                                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `lastError`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `source`                                                                                       | [operations.CreateSeriesUgcMediaSource](../../models/operations/createseriesugcmediasource.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `category`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.CreateSeriesUgcMediaData](../../models/operations/createseriesugcmediadata.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `state`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |