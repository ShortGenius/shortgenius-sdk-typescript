# GetSeriesId1Data

## Example Usage

```typescript
import { GetSeriesId1Data } from "shortgenius/models/operations";

let value: GetSeriesId1Data = {
  id: 1951.38,
  width: 2072.02,
  height: 9474.2,
  url: "https://pointed-sprinkles.biz",
  image: "https://loremflickr.com/3496/3469?lock=4579019737331797",
  fullRes: "<value>",
  tags: [
    "<value>",
  ],
  duration: 9297.75,
  user: {
    id: 6791.5,
    name: "<value>",
    url: "https://noted-draft.org",
  },
  videoFiles: [
    {
      id: 4475.1,
      quality: "hd",
      fileType: "text",
      width: 6077.05,
      height: 3422.41,
      link: "<value>",
      fps: 3037.91,
    },
  ],
  videoPictures: [
    {
      id: 2145.06,
      picture: "https://picsum.photos/seed/31Jbg0/314/2503",
      nr: 1506.39,
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