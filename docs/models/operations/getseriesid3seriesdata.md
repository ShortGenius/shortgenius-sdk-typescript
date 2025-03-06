# GetSeriesId3SeriesData

## Example Usage

```typescript
import { GetSeriesId3SeriesData } from "shortgenius/models/operations";

let value: GetSeriesId3SeriesData = {
  sourceMedia: {
    id: "0e2d5c54-147d-47f8-a06b-3b80c8174e4f",
    url: "https://stylish-postbox.info/",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `sourceMedia`                                                      | [operations.SourceMedia](../../models/operations/sourcemedia.md)   | :heavy_check_mark:                                                 | N/A                                                                |
| `results`                                                          | [operations.ThreeResults](../../models/operations/threeresults.md) | :heavy_minus_sign:                                                 | N/A                                                                |