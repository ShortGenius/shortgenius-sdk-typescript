# OneData

## Example Usage

```typescript
import { OneData } from "shortgenius/models/components";

let value: OneData = {
  id: 1220.85,
  width: 2596,
  height: 600.78,
  url: "https://complete-corporation.net/",
  alt: "<value>",
  avgColor: "<value>",
  photographer: "<value>",
  photographerUrl: "https://candid-chainstay.biz/",
  photographerId: 2987.5,
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
| `src`                                            | [components.Src](../../models/components/src.md) | :heavy_check_mark:                               | N/A                                              |