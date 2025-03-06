# Quiz

Quiz content to be converted into a single video. Required for Quiz videos.

## Example Usage

```typescript
import { Quiz } from "shortgenius/models/operations";

let value: Quiz = {
  questions: [
    {
      question: "<value>",
      options: [
        {
          text: "<value>",
          correct: false,
        },
      ],
    },
  ],
  results: {
    header: "<value>",
    explanation: "<value>",
    categories: [
      {
        scoreRange: "<value>",
        title: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `questions`                                                    | [operations.Questions](../../models/operations/questions.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `results`                                                      | [operations.Results](../../models/operations/results.md)       | :heavy_check_mark:                                             | N/A                                                            |