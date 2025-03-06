# GetSeries1Response200ApplicationJSONResponseBodyThumbnailData

## Example Usage

```typescript
import { GetSeries1Response200ApplicationJSONResponseBodyThumbnailData } from "shortgenius/models/operations";

let value: GetSeries1Response200ApplicationJSONResponseBodyThumbnailData = {
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
    height: 113.36,
    width: 1425.2,
    byteSize: 6243,
    thumbnailLink: "<value>",
    thumbnailHeight: 9928.21,
    thumbnailWidth: 6503.92,
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