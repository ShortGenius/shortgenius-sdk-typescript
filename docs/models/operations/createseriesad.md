# CreateSeriesAd

Ad content to be converted into a single video. Required for Ad videos.

## Example Usage

```typescript
import { CreateSeriesAd } from "shortgenius/models/operations";

let value: CreateSeriesAd = {
  productId: "dcfcb08f-249f-4933-ac66-bcb649035b86",
  type: "JustTheHook",
  ugcMedia: [
    {
      url: "https://ordinary-pacemaker.org",
      source: "Ugc",
      data: {
        id: "<id>",
      },
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `productId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The ad product ID.                                                         |
| `type`                                                                     | [operations.CreateSeriesType](../../models/operations/createseriestype.md) | :heavy_check_mark:                                                         | The ad type.                                                               |
| `ugcMedia`                                                                 | *operations.CreateSeriesUgcMedia*[]                                        | :heavy_check_mark:                                                         | The ad UGC media.                                                          |
| `mediaIds`                                                                 | *string*[]                                                                 | :heavy_minus_sign:                                                         | The ad media ID. Required for HookAndVideo type.                           |