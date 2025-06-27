# OneData

## Example Usage

```typescript
import { OneData } from "shortgenius/models/operations";

let value: OneData = {
  kind: "<value>",
  title: "<value>",
  htmlTitle: "<value>",
  link: "<value>",
  displayLink: "<value>",
  snippet: "<value>",
  htmlSnippet: "<value>",
  mime: "<value>",
  fileFormat: "<value>",
  image: {
    contextLink: "<value>",
    height: 4420.94,
    width: 5080.7,
    byteSize: 250.44,
    thumbnailLink: "<value>",
    thumbnailHeight: 2267.14,
    thumbnailWidth: 8797.16,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `kind`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `title`                                              | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `htmlTitle`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `link`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `displayLink`                                        | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `snippet`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `htmlSnippet`                                        | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `mime`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `fileFormat`                                         | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `image`                                              | [operations.Image](../../models/operations/image.md) | :heavy_check_mark:                                   | N/A                                                  |