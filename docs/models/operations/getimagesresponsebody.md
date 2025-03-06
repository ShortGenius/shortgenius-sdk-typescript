# GetImagesResponseBody

Successful response

## Example Usage

```typescript
import { GetImagesResponseBody } from "shortgenius/models/operations";

let value: GetImagesResponseBody = {
  images: [
    {
      id: "6e9fc5bb-5e25-4a7a-bf1c-d4476837dea4",
      url: "https://enraged-chainstay.org/",
      state: "pending",
      createdAt: "1726393707421",
      prompt: "<value>",
      isNsfw: false,
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Image](../../models/components/image.md)[] | :heavy_check_mark:                                     | A list of generated images.                            |
| `hasMore`                                              | *boolean*                                              | :heavy_check_mark:                                     | Indicates if more items are available.                 |