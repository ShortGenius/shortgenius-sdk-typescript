# One2

## Example Usage

```typescript
import { One2 } from "shortgenius/models/operations";

let value: One2 = {
  id: "3ccb0e50-aba6-4d58-8eb1-ced7d14d06d7",
  url: "https://shameless-eyeliner.org/",
  state: "error",
  createdAt: "1714977837256",
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