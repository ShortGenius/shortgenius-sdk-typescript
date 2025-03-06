# Five

## Example Usage

```typescript
import { Five } from "shortgenius/models/operations";

let value: Five = {
  id: "4b0e1725-a24a-4d98-812f-07c3774eeb0a",
  url: "https://dental-milestone.info/",
  state: "pending",
  createdAt: "1739110761107",
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