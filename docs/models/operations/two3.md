# Two3

## Example Usage

```typescript
import { Two3 } from "shortgenius/models/operations";

let value: Two3 = {
  id: "fd51f645-7ff4-4580-b2e0-16b444d38fb5",
  url: "https://hopeful-procurement.com",
  metadata: {
    prompt: "<value>",
  },
  source: "luma-ai",
  state: "error",
  data: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `deletedAt`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `metadata`                                                                             | [operations.GetSeriesId2Metadata](../../models/operations/getseriesid2metadata.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `lastError`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `source`                                                                               | [operations.GetSeriesId2Source](../../models/operations/getseriesid2source.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `category`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `state`                                                                                | [operations.GetSeriesId2State](../../models/operations/getseriesid2state.md)           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [operations.GetSeriesId2SeriesData](../../models/operations/getseriesid2seriesdata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |