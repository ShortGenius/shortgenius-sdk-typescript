# One2

## Example Usage

```typescript
import { One2 } from "shortgenius/models/operations";

let value: One2 = {
  id: "4d06d717-b5ef-4214-b723-eb9b02bbd986",
  url: "https://known-ghost.com",
  state: "error",
  createdAt: "1730924524119",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `url`                                                      | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `state`                                                    | [operations.OneState](../../models/operations/onestate.md) | :heavy_check_mark:                                         | N/A                                                        |
| `createdAt`                                                | *string*                                                   | :heavy_check_mark:                                         | Date and time (ISO 8601) when the media was created.       |
| `updatedAt`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `firstFrameImageId`                                        | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |