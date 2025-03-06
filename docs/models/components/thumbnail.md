# Thumbnail

Thumbnail for the series.

## Example Usage

```typescript
import { Thumbnail } from "shortgenius/models/components";

let value: Thumbnail = {
  text: "<value>",
  theme: "TikTokGlitch",
  media: {
    id: "1e12d4ad-9fb1-48bc-90bd-b878be9eb184",
    url: "https://gifted-mixture.net/",
    metadata: {
      prompt: "<value>",
    },
    source: "stability.stable-diffusion-xl-v1",
    state: "pending",
    data: {},
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