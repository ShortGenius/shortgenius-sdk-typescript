# GetSeriesRecommendations

## Example Usage

```typescript
import { GetSeriesRecommendations } from "shortgenius/models/operations";

let value: GetSeriesRecommendations = {
  id: "9b63b93b-038d-42ae-af9f-8221cefe8f3c",
  reason: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_check_mark:                        | Unique ID of the recommended image style. |
| `reason`                                  | *string*                                  | :heavy_check_mark:                        | Reason for the recommended image style.   |