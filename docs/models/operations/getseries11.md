# GetSeries11

## Example Usage

```typescript
import { GetSeries11 } from "shortgenius/models/operations";

let value: GetSeries11 = {
  url: "https://sunny-hose.com/",
  data: {
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
      height: 5998.25,
      width: 2280.46,
      byteSize: 4167.82,
      thumbnailLink: "<value>",
      thumbnailHeight: 3182.94,
      thumbnailWidth: 6428.54,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                                | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `deletedAt`                                                                                                                                                          | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `metadata`                                                                                                                                                           | *any*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `lastError`                                                                                                                                                          | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `type`                                                                                                                                                               | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `category`                                                                                                                                                           | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `state`                                                                                                                                                              | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `source`                                                                                                                                                             | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `data`                                                                                                                                                               | [operations.GetSeries1Response200ApplicationJSONResponseBodyThumbnailData](../../models/operations/getseries1response200applicationjsonresponsebodythumbnaildata.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |