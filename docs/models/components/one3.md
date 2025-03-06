# One3

## Example Usage

```typescript
import { One3 } from "shortgenius/models/components";

let value: One3 = {
  url: "https://antique-chiffonier.net",
  data: {
    id: 837.91,
    width: 5161.24,
    height: 2198.6,
    url: "https://rusty-alliance.org/",
    image: "https://picsum.photos/seed/l6jayjXX/1778/2010",
    fullRes: "<value>",
    tags: [
      "<value>",
    ],
    duration: 6201.26,
    user: {
      id: 6174.97,
      name: "<value>",
      url: "https://unhappy-roundabout.biz",
    },
    videoFiles: [
      {
        id: 3655.39,
        quality: "hd",
        fileType: "image",
        width: 9903.69,
        height: 9121.51,
        link: "<value>",
        fps: 1183.49,
      },
    ],
    videoPictures: [
      {
        id: 251.9,
        picture: "https://loremflickr.com/3594/2149?lock=6067729227756560",
        nr: 6442.23,
      },
    ],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `deletedAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `metadata`                                                       | *any*                                                            | :heavy_minus_sign:                                               | N/A                                                              |
| `lastError`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `type`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `category`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `state`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `source`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `data`                                                           | [components.Series1Data](../../models/components/series1data.md) | :heavy_check_mark:                                               | N/A                                                              |