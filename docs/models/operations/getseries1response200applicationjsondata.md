# GetSeries1Response200ApplicationJSONData

## Example Usage

```typescript
import { GetSeries1Response200ApplicationJSONData } from "shortgenius/models/operations";

let value: GetSeries1Response200ApplicationJSONData = {
  id: "<id>",
  createdAt: "1719241678060",
  updatedAt: "1741207864760",
  urls: {
    full: "<value>",
    raw: "<value>",
    regular: "<value>",
    small: "<value>",
    thumb: "<value>",
  },
  altDescription: "<value>",
  blurHash: "<value>",
  color: "maroon",
  description: "triumphantly whose emergent",
  height: 3088.64,
  likes: 6271.83,
  links: {
    self: "<value>",
    html: "<value>",
    download: "<value>",
    downloadLocation: "<value>",
  },
  promotedAt: "<value>",
  width: 5051.92,
  user: {
    id: "<id>",
    bio: "<value>",
    firstName: "Cletus",
    instagramUsername: "<value>",
    lastName: "Kuhn",
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
    portfolioUrl: "https://spanish-waist.info",
    profileImage: {
      small: "<value>",
      medium: "<value>",
      large: "<value>",
    },
    totalCollections: 3919.89,
    totalLikes: 18.19,
    totalPhotos: 8299.18,
    twitterUsername: "<value>",
    updatedAt: "1741204465485",
    username: "Okey.Waelchi",
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