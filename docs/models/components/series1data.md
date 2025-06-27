# Series1Data

## Example Usage

```typescript
import { Series1Data } from "shortgenius/models/components";

let value: Series1Data = {
  id: 7402.32,
  width: 621.87,
  height: 5735.17,
  url: "https://scaly-viability.info/",
  image: "https://picsum.photos/seed/z70iYSY/510/234",
  fullRes: null,
  tags: [],
  duration: 7702.78,
  user: {
    id: 2250.11,
    name: "<value>",
    url: "https://astonishing-accompanist.com",
  },
  videoFiles: [
    {
      id: 1729.78,
      quality: "uhd",
      fileType: "image",
      width: 4169.98,
      height: 5620.53,
      link: "<value>",
      fps: 8819.03,
    },
  ],
  videoPictures: [
    {
      id: 5949.62,
      picture: "https://loremflickr.com/1459/3106?lock=178391727751220",
      nr: 4778.6,
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