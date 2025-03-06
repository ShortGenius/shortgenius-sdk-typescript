# Balance

Response object containing usage information for various credit types.

## Example Usage

```typescript
import { Balance } from "shortgenius/models/operations";

let value: Balance = {
  credits: 7755.37,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `credits`                                   | *number*                                    | :heavy_check_mark:                          | General purpose credits.                    |
| `animatedVideoCredits`                      | *number*                                    | :heavy_minus_sign:                          | Credits for generating animated videos.     |
| `highQualityVideoCredits`                   | *number*                                    | :heavy_minus_sign:                          | Credits for generating high quality videos. |
| `imageCredits`                              | *number*                                    | :heavy_minus_sign:                          | Credits for generating images.              |