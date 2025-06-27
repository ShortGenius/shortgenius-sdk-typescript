# Five

## Example Usage

```typescript
import { Five } from "shortgenius/models/operations";

let value: Five = {
  id: "f89bde20-34d5-4845-b136-550084a5b427",
  url: "https://mediocre-travel.com",
  state: "pending",
  createdAt: "1714474218581",
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