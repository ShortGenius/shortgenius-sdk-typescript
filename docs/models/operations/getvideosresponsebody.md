# GetVideosResponseBody

Successful response

## Example Usage

```typescript
import { GetVideosResponseBody } from "shortgenius/models/operations";

let value: GetVideosResponseBody = {
  videos: [
    {
      id: "5e2c070c-f0ec-45e4-b61a-07ad2cb89196",
      createdAt: "1719557419638",
      seriesId: "96e41b69-0fe9-406f-9a27-f8094168088c",
      publishingState: "completed",
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