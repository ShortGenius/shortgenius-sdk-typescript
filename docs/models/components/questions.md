# Questions

## Example Usage

```typescript
import { Questions } from "shortgenius/models/components";

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
| `options`                                                  | [components.Options](../../models/components/options.md)[] | :heavy_check_mark:                                         | N/A                                                        |