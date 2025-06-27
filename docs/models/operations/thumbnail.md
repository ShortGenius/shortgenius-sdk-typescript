# Thumbnail

Thumbnail for the series.

## Example Usage

```typescript
import { Thumbnail } from "shortgenius/models/operations";

let value: Thumbnail = {
  text: "<value>",
  theme: "None",
  media: {
    url: "https://reckless-hexagon.org",
    metadata: {
      muxPlaybackId: "<id>",
      startTime: 4695.2,
      endTime: 762.04,
      durationTillEnd: 778.87,
    },
    source: null,
    data: {
      id: "<id>",
      collectionId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `captionColor`                                                                     | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `captionStrokeColor`                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `captionAlignment`                                                                 | [operations.CaptionAlignment](../../models/operations/captionalignment.md)         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `captionFontFamily`                                                                | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `captionFontSize`                                                                  | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `captionTextTransform`                                                             | [operations.CaptionTextTransform](../../models/operations/captiontexttransform.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `text`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `theme`                                                                            | [operations.Theme](../../models/operations/theme.md)                               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `media`                                                                            | *operations.Media*                                                                 | :heavy_check_mark:                                                                 | N/A                                                                                |