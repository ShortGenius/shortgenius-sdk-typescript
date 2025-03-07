# GetVideosResponseBody

Successful response

## Example Usage

```typescript
import { GetVideosResponseBody } from "shortgenius/models/operations";

let value: GetVideosResponseBody = {
  videos: [
    {
      id: "1a07ad2c-b891-496d-b596-e41b690fe906",
      createdAt: "1731260057846",
      seriesId: "27f80941-6808-48c6-b8be-69b0c6a7bb3a",
      publishingState: "processing",
      publishAt: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `videos`                                               | [components.Video](../../models/components/video.md)[] | :heavy_check_mark:                                     | Array of videos.                                       |
| `hasMore`                                              | *boolean*                                              | :heavy_check_mark:                                     | Indicates if more items are available.                 |