# GetAllSeriesResponseBody

Response for listing video series.

## Example Usage

```typescript
import { GetAllSeriesResponseBody } from "shortgenius/models/operations";

let value: GetAllSeriesResponseBody = {
  series: [
    {
      id: "5b6cbf8c-5566-4181-ae07-42cb2acc1abd",
      createdAt: "1724240057182",
      nextPostingAt: "<value>",
      type: "Series",
      schedule: {
        timeZone: "Asia/Chita",
        times: [
          {
            dayOfWeek: 5587.31,
            timeOfDay: 3306.17,
          },
        ],
      },
      aspectRatio: "1:1",
      soundtrackBehavior: "FullMusic",
      locale: "ca-ES",
      soundtrack: {
        tracks: [
          {
            url: "https://trusting-hygienic.com/",
          },
        ],
        recommendations: [
          {
            url: "https://youthful-skeleton.name",
            reason: "<value>",
          },
        ],
        playbackRate: 9143.99,
        volume: 8135.82,
      },
      styles: {},
      imageStyle: {},
      voice: {
        voices: [
          {
            id: "<id>",
            name: "<value>",
            description: "regularly whose recovery furthermore glaring huddle",
            tags: {},
            previewUrl: "https://splendid-hyena.org",
            locale: "he-IL",
            source: "OpenAI",
          },
        ],
        playbackRate: 9539.21,
        volume: 3888.51,
      },
      connections: [
        {
          id: "9baf44ec-39b5-4697-ac06-59c12ab9f72a",
          type: "YouTube",
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