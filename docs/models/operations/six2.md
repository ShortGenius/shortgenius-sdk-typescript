# Six2

## Example Usage

```typescript
import { Six2 } from "shortgenius/models/operations";

let value: Six2 = {
  url: "https://pushy-stool.com/",
  metadata: {
    sourceImageUrl: "https://rotating-substitution.com",
    muxPlaybackId: "<id>",
  },
  source: "Ugc",
  data: {
    id: "<id>",
    ugcCreatorId: "<id>",
    ugcPresetId: "<id>",
    createdAt: "1719327590329",
  },
  state: "completed",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `deletedAt`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | [operations.SixMetadata](../../models/operations/sixmetadata.md)               | :heavy_check_mark:                                                             | N/A                                                                            |
| `lastError`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `source`                                                                       | [operations.GetSeriesId6Source](../../models/operations/getseriesid6source.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `category`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [operations.GetSeriesId6Data](../../models/operations/getseriesid6data.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `state`                                                                        | [operations.SixState](../../models/operations/sixstate.md)                     | :heavy_check_mark:                                                             | N/A                                                                            |