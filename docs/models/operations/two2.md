# Two2

## Example Usage

```typescript
import { Two2 } from "shortgenius/models/operations";

let value: Two2 = {
  id: "cb8a17d9-f41a-41c4-a8cc-7f744b6604dc",
  url: "https://altruistic-exploration.info/",
  metadata: {},
  source: "fal-ai/stable-video",
  state: "error",
  data: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `url`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `deletedAt`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `metadata`                                                                 | [operations.TwoMetadata](../../models/operations/twometadata.md)           | :heavy_check_mark:                                                         | N/A                                                                        |
| `lastError`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `source`                                                                   | [operations.TwoSource](../../models/operations/twosource.md)               | :heavy_check_mark:                                                         | N/A                                                                        |
| `category`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `state`                                                                    | [operations.TwoState](../../models/operations/twostate.md)                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [operations.GetSeriesId2Data](../../models/operations/getseriesid2data.md) | :heavy_check_mark:                                                         | N/A                                                                        |