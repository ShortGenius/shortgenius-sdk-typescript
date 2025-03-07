# One1

## Example Usage

```typescript
import { One1 } from "shortgenius/models/operations";

let value: One1 = {
  id: "ee2d814a-e19a-44c1-b308-41e3949ab40d",
  url: "https://both-schnitzel.info",
  state: "error",
  createdAt: "1729064677028",
  prompt: "<value>",
  isNsfw: false,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `url`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `state`                                                                                      | [operations.GetImage1Response200State](../../models/operations/getimage1response200state.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | Date and time (ISO 8601) when the media was created.                                         |
| `updatedAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `prompt`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `isNsfw`                                                                                     | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `aspectRatio`                                                                                | [operations.OneAspectRatio](../../models/operations/oneaspectratio.md)                       | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `imageStyleId`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |