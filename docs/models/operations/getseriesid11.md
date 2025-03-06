# GetSeriesId11

## Example Usage

```typescript
import { GetSeriesId11 } from "shortgenius/models/operations";

let value: GetSeriesId11 = {
  url: "https://wavy-celsius.net",
  data: {
    kind: "<value>",
    title: "<value>",
    htmlTitle: "<value>",
    link: "<value>",
    displayLink: "<value>",
    snippet: "<value>",
    htmlSnippet: "<value>",
    mime: "<value>",
    fileFormat: "<value>",
    image: {
      contextLink: "<value>",
      height: 3024.56,
      width: 2369.65,
      byteSize: 8526.23,
      thumbnailLink: "<value>",
      thumbnailHeight: 9093.54,
      thumbnailWidth: 3470.5,
    },
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `url`                                                                                                                                                              | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `deletedAt`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `metadata`                                                                                                                                                         | *any*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `lastError`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `type`                                                                                                                                                             | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `category`                                                                                                                                                         | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `state`                                                                                                                                                            | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `source`                                                                                                                                                           | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `data`                                                                                                                                                             | [operations.GetSeriesId1SeriesResponse200ApplicationJSONResponseBodyData](../../models/operations/getseriesid1seriesresponse200applicationjsonresponsebodydata.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |