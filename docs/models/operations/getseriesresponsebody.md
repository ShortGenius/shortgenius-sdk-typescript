# GetSeriesResponseBody

Response for listing video series.

## Example Usage

```typescript
import { GetSeriesResponseBody } from "shortgenius/models/operations";

let value: GetSeriesResponseBody = {
  series: [
    {
      id: "35811646-7ff2-4e18-825b-6cbf8c556618",
      createdAt: "1737746718889",
      nextPostingAt: "<value>",
      type: "SingleVideo",
      schedule: {
        timeZone: "Europe/Kiev",
        times: [
          {
            dayOfWeek: 2846.94,
            timeOfDay: 1548.69,
          },
        ],
      },
      aspectRatio: "1:1",
      soundtrackBehavior: "NoMusic",
      locale: "da-DK",
      soundtrack: {
        tracks: [
          {
            url: "https://stable-saloon.com",
          },
        ],
        recommendations: [
          {
            url: "https://second-hand-stump.name",
            reason: "<value>",
          },
        ],
        playbackRate: 4610.94,
        volume: 9651.17,
      },
      styles: {},
      imageStyle: {},
      voice: {
        voices: [
          {
            id: "<id>",
            name: "<value>",
            description:
              "stint unto sternly briefly provided accredit psst instead staid",
            tags: {},
            previewUrl: "https://well-lit-gown.name",
            locale: "ru-RU",
            source: "ElevenLabsShared",
          },
        ],
        playbackRate: 9529.37,
        volume: 2883.48,
      },
      connections: [
        {
          id: "4ec39b56-97c0-4659-8c12-ab9f72a998f2",
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