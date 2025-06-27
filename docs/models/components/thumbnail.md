# Thumbnail

Thumbnail for the series.

## Example Usage

```typescript
import { Thumbnail } from "shortgenius/models/components";

let value: Thumbnail = {
  text: "<value>",
  theme: "None",
  media: {
    url: "https://reckless-hexagon.org",
    metadata: {
      muxPlaybackId: "<id>",
      startTime: 506.86,
      endTime: 2554.98,
      durationTillEnd: 3483.63,
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
| `captionAlignment`                                                                 | [components.CaptionAlignment](../../models/components/captionalignment.md)         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `captionFontFamily`                                                                | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `captionFontSize`                                                                  | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `captionTextTransform`                                                             | [components.CaptionTextTransform](../../models/components/captiontexttransform.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `text`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `theme`                                                                            | [components.Theme](../../models/components/theme.md)                               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `media`                                                                            | *components.Media*                                                                 | :heavy_check_mark:                                                                 | N/A                                                                                |