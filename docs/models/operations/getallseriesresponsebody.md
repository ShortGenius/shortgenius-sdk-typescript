# GetAllSeriesResponseBody

Response for listing video series.

## Example Usage

```typescript
import { GetAllSeriesResponseBody } from "shortgenius/models/operations";

let value: GetAllSeriesResponseBody = {
  series: [
    {
      id: "3e6e147b-a59b-424e-8fed-dd153d0780b7",
      createdAt: "1720463440939",
      nextPostingAt: "<value>",
      type: "SingleVideo",
      schedule: {
        timeZone: "Asia/Seoul",
        times: [],
      },
      aspectRatio: "16:9",
      soundtrackBehavior: "NoMusic",
      locale: "it-IT",
      soundtrack: {
        tracks: [],
        recommendations: [],
        playbackRate: 5149.2,
        volume: 226.36,
      },
      styles: {},
      imageStyle: {},
      voice: {
        voices: [],
        playbackRate: 2102.24,
        volume: 2319.15,
      },
      connections: [
        {
          id: "4f4251b6-8e9a-4f12-bee9-2ad8c73fa73d",
          type: "Email",
        },
      ],
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `series`                                                 | [components.Series](../../models/components/series.md)[] | :heavy_check_mark:                                       | Array of video series.                                   |
| `hasMore`                                                | *boolean*                                                | :heavy_check_mark:                                       | Indicates if more items are available.                   |