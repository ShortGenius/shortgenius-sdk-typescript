# Questions

## Example Usage

```typescript
import { Questions } from "shortgenius/models/operations";

let value: Questions = {
  question: "<value>",
  options: [
    {
      text: "<value>",
      correct: false,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `question`                                                 | *string*                                                   | :heavy_check_mark:                                         | A quiz question.                                           |
| `options`                                                  | [operations.Options](../../models/operations/options.md)[] | :heavy_check_mark:                                         | N/A                                                        |