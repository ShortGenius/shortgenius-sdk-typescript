# Media5

## Example Usage

```typescript
import { Media5 } from "shortgenius/models/operations";

let value: Media5 = {
  url: "https://good-natured-pressure.info",
  metadata: {
    muxPlaybackId: "<id>",
    startTime: 1049.9,
    endTime: 3926.92,
    durationTillEnd: 5515.7,
  },
  source: "Gameplay",
  data: {
    id: "<id>",
    collectionId: "<id>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `url`                                                                | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `deletedAt`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `metadata`                                                           | [operations.MediaMetadata](../../models/operations/mediametadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `lastError`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `source`                                                             | [operations.MediaSource](../../models/operations/mediasource.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `category`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `state`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [operations.MediaData](../../models/operations/mediadata.md)         | :heavy_check_mark:                                                   | N/A                                                                  |