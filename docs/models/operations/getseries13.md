# GetSeries13

## Example Usage

```typescript
import { GetSeries13 } from "shortgenius/models/operations";

let value: GetSeries13 = {
  url: "https://ugly-median.com",
  data: {
    id: 5277.75,
    width: 4036.38,
    height: 454.98,
    url: "https://bouncy-sauerkraut.org",
    image: "https://loremflickr.com/355/150?lock=8997157064144293",
    fullRes: "<value>",
    tags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    duration: 919.62,
    user: {
      id: 2063.59,
      name: "<value>",
      url: "https://nimble-permafrost.name",
    },
    videoFiles: [],
    videoPictures: [
      {
        id: 5949.62,
        picture: "https://loremflickr.com/1459/3106?lock=178391727751220",
        nr: 4778.6,
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `deletedAt`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `metadata`                                                                             | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `lastError`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `category`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `state`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `source`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [operations.GetSeries1ResponseData](../../models/operations/getseries1responsedata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |