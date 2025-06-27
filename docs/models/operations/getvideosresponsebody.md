# GetVideosResponseBody

Successful response

## Example Usage

```typescript
import { GetVideosResponseBody } from "shortgenius/models/operations";

let value: GetVideosResponseBody = {
  videos: [],
  hasMore: true,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `videos`                                               | [components.Video](../../models/components/video.md)[] | :heavy_check_mark:                                     | Array of videos.                                       |
| `hasMore`                                              | *boolean*                                              | :heavy_check_mark:                                     | Indicates if more items are available.                 |