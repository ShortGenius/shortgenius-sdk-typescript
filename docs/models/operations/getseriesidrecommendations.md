# GetSeriesIdRecommendations

## Example Usage

```typescript
import { GetSeriesIdRecommendations } from "shortgenius/models/operations";

let value: GetSeriesIdRecommendations = {
  id: "ce7a6e76-f05d-4759-a654-5ef1baa04b70",
  reason: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_check_mark:                        | Unique ID of the recommended image style. |
| `reason`                                  | *string*                                  | :heavy_check_mark:                        | Reason for the recommended image style.   |