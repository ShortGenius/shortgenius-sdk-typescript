# Five

## Example Usage

```typescript
import { Five } from "shortgenius/models/components";

let value: Five = {
  url: "https://unique-shipper.net/",
  metadata: {
    muxPlaybackId: "<id>",
    startTime: 1002.26,
    endTime: 9194.83,
    durationTillEnd: 7142.42,
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
| `metadata`                                                           | [components.MediaMetadata](../../models/components/mediametadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `lastError`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `source`                                                             | [components.MediaSource](../../models/components/mediasource.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `category`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `state`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [components.MediaData](../../models/components/mediadata.md)         | :heavy_check_mark:                                                   | N/A                                                                  |