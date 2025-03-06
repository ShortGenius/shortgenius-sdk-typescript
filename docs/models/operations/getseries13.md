# GetSeries13

## Example Usage

```typescript
import { GetSeries13 } from "shortgenius/models/operations";

let value: GetSeries13 = {
  url: "https://expert-lamp.org",
  data: {
    id: 6791.5,
    width: 6605.19,
    height: 5597.65,
    url: "https://wonderful-hyena.biz/",
    image: "https://loremflickr.com/2914/2431?lock=2736311390764087",
    fullRes: "<value>",
    tags: [
      "<value>",
    ],
    duration: 2145.06,
    user: {
      id: 784.86,
      name: "<value>",
      url: "https://measly-deployment.com",
    },
    videoFiles: [
      {
        id: 189.01,
        quality: "uhd",
        fileType: "video",
        width: 2666.43,
        height: 141.12,
        link: "<value>",
        fps: 1506.39,
      },
    ],
    videoPictures: [
      {
        id: 8744.46,
        picture: "https://loremflickr.com/969/3815?lock=2281176421693765",
        nr: 8677.1,
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `url`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `deletedAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metadata`                                                             | *any*                                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `lastError`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `category`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `state`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `source`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [operations.GetSeries1Data](../../models/operations/getseries1data.md) | :heavy_check_mark:                                                     | N/A                                                                    |