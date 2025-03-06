# Recommendations

## Example Usage

```typescript
import { Recommendations } from "shortgenius/models/components";

let value: Recommendations = {
  url: "https://vengeful-farmer.net",
  reason: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_minus_sign:                       | Unique ID of the recommended soundtrack. |
| `url`                                    | *string*                                 | :heavy_check_mark:                       | URL of the recommended soundtrack.       |
| `reason`                                 | *string*                                 | :heavy_check_mark:                       | Reason for the recommended soundtrack.   |