# DraftScene

Scene suitable for a video.

## Example Usage

```typescript
import { DraftScene } from "shortgenius/models/components";

let value: DraftScene = {
  title: "<value>",
  caption: "<value>",
  firstImageDescription: "<value>",
  secondImageDescription: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `title`                                                        | *string*                                                       | :heavy_check_mark:                                             | If a news video, the headline for the story. Otherwise, blank. |
| `caption`                                                      | *string*                                                       | :heavy_check_mark:                                             | The text narrated during the scene.                            |
| `firstImageDescription`                                        | *string*                                                       | :heavy_check_mark:                                             | The prompt for the first AI generated image.                   |
| `secondImageDescription`                                       | *string*                                                       | :heavy_check_mark:                                             | The prompt for the second AI generated image.                  |