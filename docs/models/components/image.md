# Image

## Example Usage

```typescript
import { Image } from "shortgenius/models/components";

let value: Image = {
  id: "463efc08-7469-4152-b792-fd61113f0ab5",
  url: "https://devoted-transom.net/",
  state: "generating",
  createdAt: "1731738928853",
  prompt: "<value>",
  isNsfw: false,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `url`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `state`                                                                    | [components.State](../../models/components/state.md)                       | :heavy_check_mark:                                                         | N/A                                                                        |
| `createdAt`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Date and time (ISO 8601) when the media was created.                       |
| `updatedAt`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Date and time (ISO 8601) when the media was last updated.                  |
| `prompt`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `isNsfw`                                                                   | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `aspectRatio`                                                              | [components.ImageAspectRatio](../../models/components/imageaspectratio.md) | :heavy_minus_sign:                                                         | Aspect ratio of the generated image.                                       |
| `imageStyleId`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |