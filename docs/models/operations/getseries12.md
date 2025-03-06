# GetSeries12

## Example Usage

```typescript
import { GetSeries12 } from "shortgenius/models/operations";

let value: GetSeries12 = {
  url: "https://pushy-intent.info/",
  data: {
    id: 9028.02,
    width: 7979.03,
    height: 9346.08,
    url: "https://arid-noon.net",
    alt: "<value>",
    avgColor: "<value>",
    photographer: "<value>",
    photographerUrl: "https://firm-honesty.com",
    photographerId: 940.94,
    liked: false,
    src: {
      original: "<value>",
      large2x: "<value>",
      large: "<value>",
      medium: "<value>",
      small: "<value>",
      portrait: "<value>",
      landscape: "<value>",
      tiny: "<value>",
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