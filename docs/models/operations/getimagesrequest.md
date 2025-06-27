# GetImagesRequest

## Example Usage

```typescript
import { GetImagesRequest } from "shortgenius/models/operations";

let value: GetImagesRequest = {};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `page`                                 | *number*                               | :heavy_minus_sign:                     | The page number to retrieve.           |
| `limit`                                | *number*                               | :heavy_minus_sign:                     | The maximum number of items per page.  |
| `forPublic`                            | *number*                               | :heavy_minus_sign:                     | If 1, only public images are returned. |