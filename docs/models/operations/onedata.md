# OneData

## Example Usage

```typescript
import { OneData } from "shortgenius/models/operations";

let value: OneData = {
  id: 6503.92,
  width: 1202.16,
  height: 8214.41,
  url: "https://bouncy-nephew.biz/",
  alt: "<value>",
  avgColor: "<value>",
  photographer: "<value>",
  photographerUrl: "https://glass-pantyhose.info/",
  photographerId: 1039.82,
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
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `width`                                          | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `height`                                         | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `url`                                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `alt`                                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `avgColor`                                       | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `photographer`                                   | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `photographerUrl`                                | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `photographerId`                                 | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `liked`                                          | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `src`                                            | [operations.Src](../../models/operations/src.md) | :heavy_check_mark:                               | N/A                                              |