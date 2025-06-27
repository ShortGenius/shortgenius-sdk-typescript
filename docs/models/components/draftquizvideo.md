# DraftQuizVideo

Scenes suitable for a quiz-style video.

## Example Usage

```typescript
import { DraftQuizVideo } from "shortgenius/models/components";

let value: DraftQuizVideo = {
  title: "<value>",
  caption: "<value>",
  quiz: {
    questions: [
      {
        question: "<value>",
        options: [],
      },
    ],
    results: {
      header: "<value>",
      explanation: "<value>",
      categories: [],
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `title`                                                             | *string*                                                            | :heavy_check_mark:                                                  | The title of the video.                                             |
| `caption`                                                           | *string*                                                            | :heavy_check_mark:                                                  | The description shown beside the video when posted to social media. |
| `quiz`                                                              | [components.Quiz](../../models/components/quiz.md)                  | :heavy_check_mark:                                                  | N/A                                                                 |