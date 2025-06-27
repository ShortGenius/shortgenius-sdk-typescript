# Media5

## Example Usage

```typescript
import { Media5 } from "shortgenius/models/operations";

let value: Media5 = {
  url: "https://mediocre-steeple.net",
  metadata: {
    muxPlaybackId: "<id>",
    startTime: 4695.2,
    endTime: 762.04,
    durationTillEnd: 778.87,
  },
  source: "Gameplay",
  data: {
    id: "<id>",
    collectionId: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `deletedAt`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `metadata`                                                                             | [operations.GetSeriesMediaMetadata](../../models/operations/getseriesmediametadata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `lastError`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `source`                                                                               | [operations.GetSeriesMediaSource](../../models/operations/getseriesmediasource.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `category`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `state`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [operations.GetSeriesMediaData](../../models/operations/getseriesmediadata.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |