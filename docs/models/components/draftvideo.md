# DraftVideo

## Example Usage

```typescript
import { DraftVideo } from "shortgenius/models/components";

let value: DraftVideo = {
  title: "<value>",
  caption: "<value>",
  scenes: [
    {
      caption: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `title`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The title of the video.                                                                        |
| `caption`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The description shown beside the video when posted to social media.                            |
| `scenes`                                                                                       | [components.DraftScene](../../models/components/draftscene.md)[]                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `imageStyleRecommendations`                                                                    | [components.ImageStyleRecommendations](../../models/components/imagestylerecommendations.md)[] | :heavy_minus_sign:                                                                             | AI-generated image style recommendations for the video.                                        |
| `selectedImageStylePresetId`                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | ID of the currently selected image style preset.                                               |