# Seven

## Example Usage

```typescript
import { Seven } from "shortgenius/models/operations";

let value: Seven = {
  id: "8d674c12-fa8c-4f3c-b5bb-f10b9bc75c69",
  url: "https://actual-discourse.net/",
  state: "completed",
  createdAt: "1739521662697",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `state`                                                                      | [operations.ResponseBodyState](../../models/operations/responsebodystate.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Date and time (ISO 8601) when the media was created.                         |
| `updatedAt`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |