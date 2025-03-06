# OneData

## Example Usage

```typescript
import { OneData } from "shortgenius/models/operations";

let value: OneData = {
  id: 4266.08,
  width: 2678.29,
  height: 6928.14,
  url: "https://unimportant-sprinkles.com/",
  alt: "<value>",
  avgColor: "<value>",
  photographer: "<value>",
  photographerUrl: "https://whispered-jury.name",
  photographerId: 6797.97,
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