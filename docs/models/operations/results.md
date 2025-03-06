# Results

## Example Usage

```typescript
import { Results } from "shortgenius/models/operations";

let value: Results = {
  header: "<value>",
  explanation: "<value>",
  categories: [
    {
      scoreRange: "<value>",
      title: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `header`                                                         | *string*                                                         | :heavy_check_mark:                                               | The header shown at the top of the quiz results.                 |
| `explanation`                                                    | *string*                                                         | :heavy_check_mark:                                               | The text the AI narrates when showing the quiz results.          |
| `categories`                                                     | [operations.Categories](../../models/operations/categories.md)[] | :heavy_check_mark:                                               | N/A                                                              |