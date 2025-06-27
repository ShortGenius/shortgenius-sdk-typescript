# GetSeries1Response200ApplicationJSONResponseBodyData

## Example Usage

```typescript
import { GetSeries1Response200ApplicationJSONResponseBodyData } from "shortgenius/models/operations";

let value: GetSeries1Response200ApplicationJSONResponseBodyData = {
  id: "<id>",
  createdAt: "1724261027149",
  updatedAt: "1735680481310",
  urls: {
    full: "<value>",
    raw: "<value>",
    regular: "<value>",
    small: "<value>",
    thumb: "<value>",
  },
  altDescription: "<value>",
  blurHash: "<value>",
  color: "gold",
  description:
    "yowza joyful unearth yowza anenst querulous shinny past once uh-huh",
  height: 1389.45,
  likes: 1626.15,
  links: {
    self: "<value>",
    html: "<value>",
    download: "<value>",
    downloadLocation: "<value>",
  },
  promotedAt: "<value>",
  width: 2547.55,
  user: {
    id: "<id>",
    bio: "<value>",
    firstName: "Amy",
    instagramUsername: "<value>",
    lastName: "Herman",
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
    portfolioUrl: null,
    profileImage: {
      small: "<value>",
      medium: "<value>",
      large: "<value>",
    },
    totalCollections: 5944.35,
    totalLikes: 2353.32,
    totalPhotos: 6221.94,
    twitterUsername: "<value>",
    updatedAt: "1735605691087",
    username: "Estelle.Harvey",
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