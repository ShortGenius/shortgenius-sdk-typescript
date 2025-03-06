# GetSeriesResponseBody

Public series information.

## Example Usage

```typescript
import { GetSeriesResponseBody } from "shortgenius/models/operations";

let value: GetSeriesResponseBody = {
  id: "491391b7-4da1-4a3e-8293-f59279c8bd45",
  createdAt: "1727178197577",
  nextPostingAt: "<value>",
  type: "Series",
  schedule: {
    timeZone: "Asia/Shanghai",
    times: [
      {
        dayOfWeek: 9925.86,
        timeOfDay: 4543.52,
      },
    ],
  },
  aspectRatio: "1:1",
  soundtrackBehavior: "MutedAfter60s",
  locale: "no-NO",
  soundtrack: {
    tracks: [
      {
        url: "https://knowledgeable-allegation.biz",
      },
    ],
    recommendations: [
      {
        url: "https://immense-hygienic.org",
        reason: "<value>",
      },
    ],
    playbackRate: 2693.91,
    volume: 6159.32,
  },
  styles: {},
  imageStyle: {},
  voice: {
    voices: [
      {
        id: "<id>",
        name: "<value>",
        description:
          "yum pace chainstay archive hmph blindly and foolishly horn",
        tags: {},
        previewUrl: "https://next-hose.org",
        locale: "ca-ES",
        source: "CartesiaClonedVoice",
      },
    ],
    playbackRate: 3463.94,
    volume: 8535.03,
  },
  connections: [
    {
      id: "c4d17a41-4756-410e-914a-d5a7060fc536",
      type: "TikTok",
    },
  ],
  episodes: [
    {
      id: "e6b2879a-d360-49e6-9f93-8aaa333b7ac9",
      createdAt: "1722392713302",
      seriesId: "82cecdd2-fa6e-49fc-95bb-5e25a7af1cd4",
      publishingState: "completed",
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
| `type`                                                                             | [operations.Type](../../models/operations/type.md)                                 | :heavy_check_mark:                                                                 | Type of the series (e.g., automatically generated).                                |
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