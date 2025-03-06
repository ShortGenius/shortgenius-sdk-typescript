# GetSeriesId1SeriesResponse200Data

## Example Usage

```typescript
import { GetSeriesId1SeriesResponse200Data } from "shortgenius/models/operations";

let value: GetSeriesId1SeriesResponse200Data = {
  id: "<id>",
  createdAt: "1736217788818",
  updatedAt: "1741220851710",
  urls: {
    full: "<value>",
    raw: "<value>",
    regular: "<value>",
    small: "<value>",
    thumb: "<value>",
  },
  altDescription: "<value>",
  blurHash: "<value>",
  color: "teal",
  description: "hungrily mothball yowza after",
  height: 8299.18,
  likes: 6466.29,
  links: {
    self: "<value>",
    html: "<value>",
    download: "<value>",
    downloadLocation: "<value>",
  },
  promotedAt: "<value>",
  width: 7699.22,
  user: {
    id: "<id>",
    bio: "<value>",
    firstName: "Janie",
    instagramUsername: "<value>",
    lastName: "Barrows",
    links: {
      followers: "<value>",
      following: "<value>",
      html: "<value>",
      likes: "<value>",
      photos: "<value>",
      portfolio: "<value>",
      self: "<value>",
    },
    location: "<value>",
    name: "<value>",
    portfolioUrl: "https://huge-blowgun.com/",
    profileImage: {
      small: "<value>",
      medium: "<value>",
      large: "<value>",
    },
    totalCollections: 5668.73,
    totalLikes: 2161.22,
    totalPhotos: 6265.35,
    twitterUsername: "<value>",
    updatedAt: "1741217080709",
    username: "Reta_Borer",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `createdAt`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `updatedAt`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `urls`                                                   | [operations.Urls](../../models/operations/urls.md)       | :heavy_check_mark:                                       | N/A                                                      |
| `altDescription`                                         | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `blurHash`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `color`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `description`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `height`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `likes`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `links`                                                  | [operations.Links](../../models/operations/links.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `promotedAt`                                             | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `width`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `user`                                                   | [operations.OneUser](../../models/operations/oneuser.md) | :heavy_check_mark:                                       | N/A                                                      |