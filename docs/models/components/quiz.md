# Quiz

## Example Usage

```typescript
import { Quiz } from "shortgenius/models/components";

let value: Quiz = {
  questions: [],
  results: {
    header: "<value>",
    explanation: "<value>",
    categories: [],
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `questions`                                                    | [components.Questions](../../models/components/questions.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `results`                                                      | [components.Results](../../models/components/results.md)       | :heavy_check_mark:                                             | N/A                                                            |