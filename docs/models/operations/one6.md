# One6

## Example Usage

```typescript
import { One6 } from "shortgenius/models/operations";

let value: One6 = {
  url: null,
  data: {
    id: "<id>",
    createdAt: "1709560596565",
    updatedAt: "1735625241346",
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
    description: null,
    height: 5368.97,
    likes: 1536.42,
    links: {
      self: "<value>",
      html: "<value>",
      download: "<value>",
      downloadLocation: "<value>",
    },
    promotedAt: "<value>",
    width: 6264.69,
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
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                              | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `deletedAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `metadata`                                                                                                                                         | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `lastError`                                                                                                                                        | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `type`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `category`                                                                                                                                         | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `state`                                                                                                                                            | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `source`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `data`                                                                                                                                             | [operations.GetSeries1Response200ApplicationJSONResponseBodyData](../../models/operations/getseries1response200applicationjsonresponsebodydata.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |