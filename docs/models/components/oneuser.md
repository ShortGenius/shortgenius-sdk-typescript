# OneUser

## Example Usage

```typescript
import { OneUser } from "shortgenius/models/components";

let value: OneUser = {
  id: "<id>",
  bio: "<value>",
  firstName: "Wayne",
  instagramUsername: "<value>",
  lastName: "Greenfelder",
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
  portfolioUrl: "https://grubby-iridescence.name/",
  profileImage: {
    small: "<value>",
    medium: "<value>",
    large: "<value>",
  },
  totalCollections: 8536.06,
  totalLikes: 8894.48,
  totalPhotos: 2201.04,
  twitterUsername: "<value>",
  updatedAt: "1741190597714",
  username: "Bert48",
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
| `links`                                                            | [components.OneLinks](../../models/components/onelinks.md)         | :heavy_check_mark:                                                 | N/A                                                                |
| `location`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `portfolioUrl`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `profileImage`                                                     | [components.ProfileImage](../../models/components/profileimage.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `totalCollections`                                                 | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `totalLikes`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `totalPhotos`                                                      | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `twitterUsername`                                                  | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `updatedAt`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `username`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |