# DraftVideo

## Example Usage

```typescript
import { DraftVideo } from "shortgenius/models/components";

let value: DraftVideo = {
  title: "<value>",
  caption: "<value>",
  scenes: [
    {
      title: "<value>",
      caption: "<value>",
      firstImageDescription: "<value>",
      secondImageDescription: "<value>",
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `title`                                                             | *string*                                                            | :heavy_check_mark:                                                  | The title of the video.                                             |
| `caption`                                                           | *string*                                                            | :heavy_check_mark:                                                  | The description shown beside the video when posted to social media. |
| `scenes`                                                            | [components.DraftScene](../../models/components/draftscene.md)[]    | :heavy_check_mark:                                                  | N/A                                                                 |