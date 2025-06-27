# GetSeries11

## Example Usage

```typescript
import { GetSeries11 } from "shortgenius/models/operations";

let value: GetSeries11 = {
  url: "https://last-summary.org/",
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
      height: 4420.94,
      width: 5080.7,
      byteSize: 250.44,
      thumbnailLink: "<value>",
      thumbnailHeight: 2267.14,
      thumbnailWidth: 8797.16,
    },
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `url`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `deletedAt`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `metadata`                                               | *any*                                                    | :heavy_minus_sign:                                       | N/A                                                      |
| `lastError`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `category`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `state`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `source`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [operations.OneData](../../models/operations/onedata.md) | :heavy_check_mark:                                       | N/A                                                      |