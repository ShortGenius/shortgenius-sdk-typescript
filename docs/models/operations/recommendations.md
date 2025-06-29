# Recommendations

## Example Usage

```typescript
import { Recommendations } from "shortgenius/models/operations";

let value: Recommendations = {
  url: "https://pushy-king.com/",
  reason: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_minus_sign:                       | Unique ID of the recommended soundtrack. |
| `url`                                    | *string*                                 | :heavy_check_mark:                       | URL of the recommended soundtrack.       |
| `reason`                                 | *string*                                 | :heavy_check_mark:                       | Reason for the recommended soundtrack.   |