# DraftScene

Scene suitable for a video.

## Example Usage

```typescript
import { DraftScene } from "shortgenius/models/components";

let value: DraftScene = {
  caption: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `title`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | If a news video, the headline for the story. Otherwise, blank.                               |
| `caption`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | The text narrated during the scene.                                                          |
| `imageQuery`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | The query for images search.                                                                 |
| `firstImageDescription`                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | The prompt for the first AI generated image.                                                 |
| `secondImageDescription`                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The prompt for the second AI generated image.                                                |
| `firstImageAnimationModel`                                                                   | [components.FirstImageAnimationModel](../../models/components/firstimageanimationmodel.md)   | :heavy_minus_sign:                                                                           | Animation model for the first image.                                                         |
| `secondImageAnimationModel`                                                                  | [components.SecondImageAnimationModel](../../models/components/secondimageanimationmodel.md) | :heavy_minus_sign:                                                                           | Animation model for the second image.                                                        |