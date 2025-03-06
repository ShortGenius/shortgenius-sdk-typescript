# Series1Data

## Example Usage

```typescript
import { Series1Data } from "shortgenius/models/components";

let value: Series1Data = {
  id: 445.71,
  width: 9132.84,
  height: 3050.47,
  url: "https://worst-guidance.name",
  image: "https://picsum.photos/seed/gfxHWH/1604/3073",
  fullRes: "<value>",
  tags: [
    "<value>",
  ],
  duration: 7811.93,
  user: {
    id: 1689.26,
    name: "<value>",
    url: "https://indolent-pocket-watch.biz/",
  },
  videoFiles: [
    {
      id: 3032.92,
      quality: "sd",
      fileType: "application",
      width: 5775.9,
      height: 752.77,
      link: "<value>",
      fps: 782.46,
    },
  ],
  videoPictures: [
    {
      id: 3712.87,
      picture: "https://picsum.photos/seed/hxxJXhNEz/3066/2755",
      nr: 7748.8,
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
| `user`                                                                 | [components.User](../../models/components/user.md)                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `videoFiles`                                                           | [components.VideoFiles](../../models/components/videofiles.md)[]       | :heavy_check_mark:                                                     | N/A                                                                    |
| `videoPictures`                                                        | [components.VideoPictures](../../models/components/videopictures.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |