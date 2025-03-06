# Six2

## Example Usage

```typescript
import { Six2 } from "shortgenius/models/components";

let value: Six2 = {
  url: "https://runny-epic.net",
  metadata: {
    sourceImageUrl: "https://unconscious-mom.org/",
    muxPlaybackId: "<id>",
  },
  source: "Ugc",
  data: {
    id: "<id>",
    ugcCreatorId: "<id>",
    ugcPresetId: "<id>",
    createdAt: "1731526855489",
  },
  state: "completed",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `url`                                                                | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `deletedAt`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `metadata`                                                           | [components.SixMetadata](../../models/components/sixmetadata.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `lastError`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `source`                                                             | [components.Series6Source](../../models/components/series6source.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `category`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [components.Series6Data](../../models/components/series6data.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `state`                                                              | [components.SixState](../../models/components/sixstate.md)           | :heavy_check_mark:                                                   | N/A                                                                  |