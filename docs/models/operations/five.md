# Five

## Example Usage

```typescript
import { Five } from "shortgenius/models/operations";

let value: Five = {
  id: "70083952-f304-4445-8c05-1f277c4b0e17",
  url: "https://proper-charlatan.biz/",
  state: "completed",
  createdAt: "1736320738041",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `url`                                                | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `state`                                              | [operations.State](../../models/operations/state.md) | :heavy_check_mark:                                   | N/A                                                  |
| `createdAt`                                          | *string*                                             | :heavy_check_mark:                                   | Date and time (ISO 8601) when the media was created. |
| `updatedAt`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |