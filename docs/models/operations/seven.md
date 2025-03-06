# Seven

## Example Usage

```typescript
import { Seven } from "shortgenius/models/operations";

let value: Seven = {
  id: "c75c69e2-04c9-4f84-8cad-a7404063b31d",
  url: "https://vengeful-bungalow.name",
  state: "generating",
  createdAt: "1734882363924",
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