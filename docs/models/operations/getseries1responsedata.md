# GetSeries1ResponseData

## Example Usage

```typescript
import { GetSeries1ResponseData } from "shortgenius/models/operations";

let value: GetSeries1ResponseData = {
  id: 6097.64,
  width: 7945.2,
  height: 638.89,
  url: "https://artistic-mainstream.info/",
  image: "https://loremflickr.com/1878/3802?lock=2599423132364827",
  fullRes: "<value>",
  tags: [],
  duration: 3804.14,
  user: {
    id: 2063.59,
    name: "<value>",
    url: "https://nimble-permafrost.name",
  },
  videoFiles: [],
  videoPictures: [],
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