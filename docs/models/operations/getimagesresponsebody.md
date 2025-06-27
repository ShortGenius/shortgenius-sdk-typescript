# GetImagesResponseBody

Successful response

## Example Usage

```typescript
import { GetImagesResponseBody } from "shortgenius/models/operations";

let value: GetImagesResponseBody = {
  images: [],
  hasMore: true,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Image](../../models/components/image.md)[] | :heavy_check_mark:                                     | A list of generated images.                            |
| `hasMore`                                              | *boolean*                                              | :heavy_check_mark:                                     | Indicates if more items are available.                 |