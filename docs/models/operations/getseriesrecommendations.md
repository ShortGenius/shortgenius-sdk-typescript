# GetSeriesRecommendations

## Example Usage

```typescript
import { GetSeriesRecommendations } from "shortgenius/models/operations";

let value: GetSeriesRecommendations = {
  id: "06e7d14b-97ac-4e7a-b6e7-6f05d7596545",
  reason: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_check_mark:                        | Unique ID of the recommended image style. |
| `reason`                                  | *string*                                  | :heavy_check_mark:                        | Reason for the recommended image style.   |