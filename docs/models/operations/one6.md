# One6

## Example Usage

```typescript
import { One6 } from "shortgenius/models/operations";

let value: One6 = {
  url: "https://bright-mentor.biz/",
  data: {
    id: "<id>",
    createdAt: "1729457411211",
    updatedAt: "1741228896653",
    urls: {
      full: "<value>",
      raw: "<value>",
      regular: "<value>",
      small: "<value>",
      thumb: "<value>",
    },
    altDescription: "<value>",
    blurHash: "<value>",
    color: "tan",
    description: "until duh small helpfully",
    height: 3905.83,
    likes: 933.84,
    links: {
      self: "<value>",
      html: "<value>",
      download: "<value>",
      downloadLocation: "<value>",
    },
    promotedAt: "<value>",
    width: 2204.55,
    user: {
      id: "<id>",
      bio: "<value>",
      firstName: "Delphia",
      instagramUsername: "<value>",
      lastName: "Heller",
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
      portfolioUrl: "https://shameful-flint.com/",
      profileImage: {
        small: "<value>",
        medium: "<value>",
        large: "<value>",
      },
      totalCollections: 5936,
      totalLikes: 1796.48,
      totalPhotos: 580.56,
      twitterUsername: "<value>",
      updatedAt: "1741162705717",
      username: "Heidi.Nitzsche",
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                      | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `deletedAt`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `metadata`                                                                                                                 | *any*                                                                                                                      | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `lastError`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `type`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `category`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `state`                                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `source`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `data`                                                                                                                     | [operations.GetSeries1Response200ApplicationJSONData](../../models/operations/getseries1response200applicationjsondata.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |