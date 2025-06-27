# GetSeriesResponseBody

Public series information.

## Example Usage

```typescript
import { GetSeriesResponseBody } from "shortgenius/models/operations";

let value: GetSeriesResponseBody = {
  id: "8820da28-5474-456e-ae9a-c81d66439212",
  createdAt: "1726531537294",
  nextPostingAt: "<value>",
  type: "SingleVideo",
  schedule: {
    timeZone: "Asia/Dhaka",
    times: [],
  },
  aspectRatio: "16:9",
  soundtrackBehavior: "MutedAfter60s",
  locale: "zh-TW",
  soundtrack: {
    tracks: [
      {
        url: "https://regular-overcoat.net",
      },
    ],
    recommendations: [],
    playbackRate: 1023.97,
    volume: 9587.55,
  },
  styles: {},
  imageStyle: {},
  voice: {
    voices: [
      {
        id: "<id>",
        name: "<value>",
        description:
          "scamper woot dead merrily joyfully wriggler shadowbox politely frightfully not",
        tags: {},
        previewUrl: "https://extra-large-decision.net/",
        locale: null,
        source: "ElevenLabsShared",
      },
    ],
    playbackRate: 5862.23,
    volume: 1000.84,
  },
  connections: [],
  episodes: [
    {
      id: "b2409c35-0508-48e6-91d1-79c1076a441a",
      createdAt: "1727261256798",
      seriesId: "1ccc6683-aaf0-4858-8c71-3fb4f9e5eec3",
      publishingState: "processing",
      publishAt: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Unique ID of the series.                                                           |
| `createdAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Date and time (ISO 8601) when the series was created.                              |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Date and time (ISO 8601) when the series was last updated.                         |
| `nextPostingAt`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | Date and time (ISO 8601) when the next video will be posted.                       |
| `type`                                                                             | [operations.GetSeriesType](../../models/operations/getseriestype.md)               | :heavy_check_mark:                                                                 | Type of the series (e.g., automatically generated).                                |
| `schedule`                                                                         | [operations.GetSeriesSchedule](../../models/operations/getseriesschedule.md)       | :heavy_check_mark:                                                                 | The publishing schedule for the video series.                                      |
| `contentType`                                                                      | [operations.GetSeriesContentType](../../models/operations/getseriescontenttype.md) | :heavy_minus_sign:                                                                 | Indicates the type of content in this series.                                      |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | User-friendly name for the series.                                                 |
| `aspectRatio`                                                                      | [operations.GetSeriesAspectRatio](../../models/operations/getseriesaspectratio.md) | :heavy_check_mark:                                                                 | Aspect ratio of the series videos.                                                 |
| `soundtrackBehavior`                                                               | [operations.SoundtrackBehavior](../../models/operations/soundtrackbehavior.md)     | :heavy_check_mark:                                                                 | Behavior of the soundtrack.                                                        |
| `prompt`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | A custom topic for the series.                                                     |
| `tiktokSettings`                                                                   | [operations.TiktokSettings](../../models/operations/tiktoksettings.md)             | :heavy_minus_sign:                                                                 | Settings for the TikTok platform.                                                  |
| `youtubeSettings`                                                                  | [operations.YoutubeSettings](../../models/operations/youtubesettings.md)           | :heavy_minus_sign:                                                                 | Settings for the YouTube platform.                                                 |
| `xSettings`                                                                        | [operations.XSettings](../../models/operations/xsettings.md)                       | :heavy_minus_sign:                                                                 | Settings for the X/Twitter platform.                                               |
| `locale`                                                                           | [operations.GetSeriesLocale](../../models/operations/getserieslocale.md)           | :heavy_check_mark:                                                                 | Locale of the video series.                                                        |
| `soundtrack`                                                                       | [operations.Soundtrack](../../models/operations/soundtrack.md)                     | :heavy_check_mark:                                                                 | Soundtrack configuration for the series.                                           |
| `thumbnail`                                                                        | [operations.Thumbnail](../../models/operations/thumbnail.md)                       | :heavy_minus_sign:                                                                 | Thumbnail for the series.                                                          |
| `styles`                                                                           | [operations.Styles](../../models/operations/styles.md)                             | :heavy_check_mark:                                                                 | Styles for the series videos.                                                      |
| `imageStyle`                                                                       | [operations.ImageStyle](../../models/operations/imagestyle.md)                     | :heavy_check_mark:                                                                 | Image style for series.                                                            |
| `voice`                                                                            | [operations.Voice](../../models/operations/voice.md)                               | :heavy_check_mark:                                                                 | Voice configuration for the series.                                                |
| `customWatermark`                                                                  | [operations.CustomWatermark](../../models/operations/customwatermark.md)           | :heavy_minus_sign:                                                                 | Custom watermark for the series (paid plans only).                                 |
| `connections`                                                                      | [components.Connection](../../models/components/connection.md)[]                   | :heavy_check_mark:                                                                 | Publishing connections for the series.                                             |
| `hashtags`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | List of custom hashtags for the series.                                            |
| `episodes`                                                                         | [components.Video](../../models/components/video.md)[]                             | :heavy_check_mark:                                                                 | List of episodes associated with this series.                                      |