# Categories

## Example Usage

```typescript
import { Categories } from "shortgenius/models/components";

let value: Categories = {
  scoreRange: "<value>",
  title: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `scoreRange`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | The number of questions viewers in this category got right (e.g., "1-2"). |
| `title`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | The title of the category.                                                |