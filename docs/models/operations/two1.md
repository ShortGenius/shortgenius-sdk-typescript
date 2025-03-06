# Two1

## Example Usage

```typescript
import { Two1 } from "shortgenius/models/operations";

let value: Two1 = {
  id: "b6d25c5a-424e-4735-b0c3-90d204e4864e",
  url: "https://monumental-smoke.info",
  metadata: {
    prompt: "<value>",
  },
  source: "fal-ai/flux-pro",
  state: "completed",
  data: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deletedAt`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | [operations.GetSeriesId2SeriesMetadata](../../models/operations/getseriesid2seriesmetadata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastError`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `source`                                                                                       | [operations.GetSeriesId2SeriesSource](../../models/operations/getseriesid2seriessource.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `category`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `state`                                                                                        | [operations.GetSeriesId2SeriesState](../../models/operations/getseriesid2seriesstate.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.TwoData](../../models/operations/twodata.md)                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |