# GetImagesResponseBody

Successful response

## Example Usage

```typescript
import { GetImagesResponseBody } from "shortgenius/models/operations";

let value: GetImagesResponseBody = {
  images: [
    {
      id: "37dea4d6-32f1-483d-93b2-fa6f862b9333",
      url: "https://forsaken-recommendation.name/",
      state: "request_smart_motion",
      createdAt: "1733187796649",
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