# One1

## Example Usage

```typescript
import { One1 } from "shortgenius/models/operations";

let value: One1 = {
  id: "0e789e2a-0c3e-48bf-a3da-d521bd429e35",
  url: "https://favorable-collectivization.name/",
  state: "error",
  createdAt: "1730476388726",
  prompt: "<value>",
  isNsfw: true,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `url`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `state`                                                                | [operations.OneState](../../models/operations/onestate.md)             | :heavy_check_mark:                                                     | N/A                                                                    |
| `createdAt`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Date and time (ISO 8601) when the media was created.                   |
| `updatedAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `prompt`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `isNsfw`                                                               | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `aspectRatio`                                                          | [operations.OneAspectRatio](../../models/operations/oneaspectratio.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `imageStyleId`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |