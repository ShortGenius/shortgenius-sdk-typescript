# OneUser

## Example Usage

```typescript
import { OneUser } from "shortgenius/models/operations";

let value: OneUser = {
  id: "<id>",
  bio: "<value>",
  firstName: "Elisabeth",
  instagramUsername: "<value>",
  lastName: "Nitzsche",
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
  portfolioUrl: "https://mean-poppy.com",
  profileImage: {
    small: "<value>",
    medium: "<value>",
    large: "<value>",
  },
  totalCollections: 7280.83,
  totalLikes: 4652.17,
  totalPhotos: 7591.58,
  twitterUsername: "<value>",
  updatedAt: "1735608226455",
  username: "Elmira24",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `bio`                                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `firstName`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `instagramUsername`                                                | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `lastName`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `links`                                                            | [operations.OneLinks](../../models/operations/onelinks.md)         | :heavy_check_mark:                                                 | N/A                                                                |
| `location`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `portfolioUrl`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `profileImage`                                                     | [operations.ProfileImage](../../models/operations/profileimage.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `totalCollections`                                                 | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `totalLikes`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `totalPhotos`                                                      | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `twitterUsername`                                                  | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `updatedAt`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `username`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |