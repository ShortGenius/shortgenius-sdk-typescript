# Thumbnail

Thumbnail for the series.

## Example Usage

```typescript
import { Thumbnail } from "shortgenius/models/operations";

let value: Thumbnail = {
  text: "<value>",
  theme: "TikTokTint",
  media: {
    url: "https://shimmering-captain.name",
    data: {
      id: 6107.03,
      pageURL: "https://stale-exasperation.info",
      videos: {
        large: {
          url: "https://late-handful.com/",
          width: 2426.06,
          height: 1199.27,
          size: 5545.08,
          thumbnail: "<value>",
        },
        medium: {
          url: "https://golden-skeleton.name/",
          width: 5195.83,
          height: 9443.63,
          size: 4373.51,
          thumbnail: "<value>",
        },
        small: {
          url: "https://orderly-haircut.info",
          width: 9033.78,
          height: 5652.45,
          size: 2517.13,
          thumbnail: "<value>",
        },
        tiny: {
          url: "https://extra-large-designation.com",
          width: 6893.09,
          height: 7810.44,
          size: 3236.12,
          thumbnail: "<value>",
        },
      },
      views: 4092.97,
      downloads: 7930.68,
      likes: 163.03,
      comments: 3328.31,
      userId: 3075.94,
      user: "Karina_Bauch",
      userImageURL: "https://comfortable-dulcimer.biz",
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