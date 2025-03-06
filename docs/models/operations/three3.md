# Three3

## Example Usage

```typescript
import { Three3 } from "shortgenius/models/operations";

let value: Three3 = {
  id: "cdd2d039-1946-4518-8f94-f6bafe21ce7b",
  url: "https://creative-netsuke.biz/",
  metadata: {},
  source: "Upload",
  data: {
    sourceMedia: {
      id: "4a95d448-7728-446b-aec6-9b652bd5c9c6",
      url: "https://brilliant-march.info/",
    },
  },
  state: "generating",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deletedAt`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | [operations.GetSeriesId3SeriesMetadata](../../models/operations/getseriesid3seriesmetadata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastError`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `source`                                                                                       | [operations.GetSeriesId3SeriesSource](../../models/operations/getseriesid3seriessource.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `category`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.GetSeriesId3SeriesData](../../models/operations/getseriesid3seriesdata.md)         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `state`                                                                                        | [operations.GetSeriesId3SeriesState](../../models/operations/getseriesid3seriesstate.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |