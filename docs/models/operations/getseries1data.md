# GetSeries1Data

## Example Usage

```typescript
import { GetSeries1Data } from "shortgenius/models/operations";

let value: GetSeries1Data = {
  id: 3622.59,
  width: 5581.38,
  height: 763.44,
  url: "https://merry-alert.com/",
  image: "https://loremflickr.com/1505/248?lock=2177495066732726",
  fullRes: "<value>",
  tags: [
    "<value>",
  ],
  duration: 1877.7,
  user: {
    id: 4046.8,
    name: "<value>",
    url: "https://gullible-hovercraft.net/",
  },
  videoFiles: [
    {
      id: 9328.07,
      quality: "hd",
      fileType: "audio",
      width: 5665.18,
      height: 1374.14,
      link: "<value>",
      fps: 3497.12,
    },
  ],
  videoPictures: [
    {
      id: 532.16,
      picture: "https://picsum.photos/seed/ZccWRCQd/1516/457",
      nr: 8740.29,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `width`                                                                | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `height`                                                               | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `url`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `image`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `fullRes`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `tags`                                                                 | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `duration`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `user`                                                                 | [operations.User](../../models/operations/user.md)                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `videoFiles`                                                           | [operations.VideoFiles](../../models/operations/videofiles.md)[]       | :heavy_check_mark:                                                     | N/A                                                                    |
| `videoPictures`                                                        | [operations.VideoPictures](../../models/operations/videopictures.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |