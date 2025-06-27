# Two

## Example Usage

```typescript
import { Two } from "shortgenius/models/operations";

let value: Two = {
  url: "https://fortunate-brace.net/",
  metadata: {
    sourceImageUrl: "https://junior-bog.com",
    muxPlaybackId: "<id>",
  },
  source: "Ugc",
  data: {
    id: "<id>",
    ugcCreatorId: "<id>",
    ugcPresetId: "<id>",
    createdAt: "1716080340789",
  },
  state: "pending",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `url`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `deletedAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metadata`                                                             | [operations.Metadata](../../models/operations/metadata.md)             | :heavy_check_mark:                                                     | N/A                                                                    |
| `lastError`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `source`                                                               | [operations.UgcMediaSource](../../models/operations/ugcmediasource.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `category`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [operations.UgcMediaData](../../models/operations/ugcmediadata.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `state`                                                                | [operations.State](../../models/operations/state.md)                   | :heavy_check_mark:                                                     | N/A                                                                    |