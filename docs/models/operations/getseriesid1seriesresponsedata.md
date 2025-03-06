# GetSeriesId1SeriesResponseData

## Example Usage

```typescript
import { GetSeriesId1SeriesResponseData } from "shortgenius/models/operations";

let value: GetSeriesId1SeriesResponseData = {
  id: 1732.65,
  pageURL: "https://trim-fishery.info/",
  videos: {
    large: {
      url: "https://aware-presume.name/",
      width: 6761.4,
      height: 2782.31,
      size: 4069.14,
      thumbnail: "<value>",
    },
    medium: {
      url: "https://informal-pendant.org/",
      width: 6634.57,
      height: 5251.6,
      size: 4163.67,
      thumbnail: "<value>",
    },
    small: {
      url: "https://lively-clavicle.name/",
      width: 7302.47,
      height: 9464.96,
      size: 2968.53,
      thumbnail: "<value>",
    },
    tiny: {
      url: "https://dense-swanling.net/",
      width: 7749.6,
      height: 572.9,
      size: 5567.19,
      thumbnail: "<value>",
    },
  },
  views: 2350.13,
  downloads: 1196.85,
  likes: 7816.13,
  comments: 2115.81,
  userId: 5008.12,
  user: "Julian0",
  userImageURL: "https://untried-kinase.info/",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `pageURL`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `videos`                                               | [operations.Videos](../../models/operations/videos.md) | :heavy_check_mark:                                     | N/A                                                    |
| `tags`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `duration`                                             | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `views`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `downloads`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `likes`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `comments`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `userId`                                               | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `user`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `userImageURL`                                         | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |