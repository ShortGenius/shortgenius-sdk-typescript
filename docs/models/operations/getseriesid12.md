# GetSeriesId12

## Example Usage

```typescript
import { GetSeriesId12 } from "shortgenius/models/operations";

let value: GetSeriesId12 = {
  url: "https://massive-scout.com/",
  data: {
    id: 6124.27,
    width: 1158.81,
    height: 6040.5,
    url: "https://enchanting-kielbasa.net",
    alt: "<value>",
    avgColor: "<value>",
    photographer: "<value>",
    photographerUrl: "https://crooked-testimonial.net/",
    photographerId: 7365.74,
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