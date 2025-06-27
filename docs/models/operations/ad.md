# Ad

Ad content to be converted into a single video. Required for Ad videos.

## Example Usage

```typescript
import { Ad } from "shortgenius/models/operations";

let value: Ad = {
  productId: "7c234fae-bb12-4983-a675-92618bca121e",
  type: "HookAndVideo",
  ugcMedia: {
    url: "https://rowdy-archaeology.biz",
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
    state: "generating",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `productId`                                        | *string*                                           | :heavy_check_mark:                                 | The ad product ID.                                 |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_check_mark:                                 | The ad type.                                       |
| `ugcMedia`                                         | *operations.UgcMedia*                              | :heavy_check_mark:                                 | The ad UGC media.                                  |
| `mediaId`                                          | *string*                                           | :heavy_minus_sign:                                 | The ad media ID. Required for HookAndVideo type.   |