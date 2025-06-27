# Seven

## Example Usage

```typescript
import { Seven } from "shortgenius/models/operations";

let value: Seven = {
  id: "923af417-178f-41e1-b5af-edcb4cea1c50",
  url: "https://distant-alligator.net/",
  state: "completed",
  createdAt: "1731208527000",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `url`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `state`                                                                                      | [operations.GetImageResponseBodyState](../../models/operations/getimageresponsebodystate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | Date and time (ISO 8601) when the media was created.                                         |
| `updatedAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |