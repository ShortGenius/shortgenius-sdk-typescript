# GetSeriesIdResponseBody

Public series information.

## Example Usage

```typescript
import { GetSeriesIdResponseBody } from "shortgenius/models/operations";

let value: GetSeriesIdResponseBody = {
  id: "91b74da1-a3e2-493f-b592-79c8bd4508fb",
  createdAt: "1724011981204",
  nextPostingAt: "<value>",
  type: "Series",
  schedule: {
    timeZone: "America/Havana",
    times: [
      {
        dayOfWeek: 4220.06,
        timeOfDay: 6436.14,
      },
    ],
  },
  aspectRatio: "16:9",
  soundtrackBehavior: "MutedAfter60s",
  locale: "hr-HR",
  soundtrack: {
    tracks: [
      {
        url: "https://immense-hygienic.org",
      },
    ],
    recommendations: [
      {
        url: "https://plump-statue.net/",
        reason: "<value>",
      },
    ],
    playbackRate: 2387.23,
    volume: 510.89,
  },
  styles: {},
  imageStyle: {},
  voice: {
    voices: [
      {
        id: "<id>",
        name: "<value>",
        description: "fooey now punctually gladly after",
        tags: {},
        previewUrl: "https://aching-bandwidth.com/",
        locale: "en-US",
        source: "Cartesia",
      },
    ],
    playbackRate: 168.83,
    volume: 2449.14,
  },
  connections: [
    {
      id: "c0fadac4-4a98-4238-96f8-6f145dc4d17a",
      type: "Email",
    },
  ],
  episodes: [
    {
      id: "475610e1-4ad5-4a70-a60f-c53655e6b287",
      createdAt: "1731124465790",
      seriesId: "d3609e6f-938a-4aa3-b33b-7ac97682cecd",
      publishingState: "pending",
      publishAt: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique ID of the series.                                                               |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Date and time (ISO 8601) when the series was created.                                  |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | Date and time (ISO 8601) when the series was last updated.                             |
| `nextPostingAt`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | Date and time (ISO 8601) when the next video will be posted.                           |
| `type`                                                                                 | [operations.Type](../../models/operations/type.md)                                     | :heavy_check_mark:                                                                     | Type of the series (e.g., automatically generated).                                    |
| `schedule`                                                                             | [operations.GetSeriesIdSchedule](../../models/operations/getseriesidschedule.md)       | :heavy_check_mark:                                                                     | The publishing schedule for the video series.                                          |
| `contentType`                                                                          | [operations.GetSeriesIdContentType](../../models/operations/getseriesidcontenttype.md) | :heavy_minus_sign:                                                                     | Indicates the type of content in this series.                                          |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | User-friendly name for the series.                                                     |
| `aspectRatio`                                                                          | [operations.GetSeriesIdAspectRatio](../../models/operations/getseriesidaspectratio.md) | :heavy_check_mark:                                                                     | Aspect ratio of the series videos.                                                     |
| `soundtrackBehavior`                                                                   | [operations.SoundtrackBehavior](../../models/operations/soundtrackbehavior.md)         | :heavy_check_mark:                                                                     | Behavior of the soundtrack.                                                            |
| `prompt`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | A custom topic for the series.                                                         |
| `tiktokSettings`                                                                       | [operations.TiktokSettings](../../models/operations/tiktoksettings.md)                 | :heavy_minus_sign:                                                                     | Settings for the TikTok platform.                                                      |
| `youtubeSettings`                                                                      | [operations.YoutubeSettings](../../models/operations/youtubesettings.md)               | :heavy_minus_sign:                                                                     | Settings for the YouTube platform.                                                     |
| `xSettings`                                                                            | [operations.XSettings](../../models/operations/xsettings.md)                           | :heavy_minus_sign:                                                                     | Settings for the X/Twitter platform.                                                   |
| `locale`                                                                               | [operations.GetSeriesIdLocale](../../models/operations/getseriesidlocale.md)           | :heavy_check_mark:                                                                     | Locale of the video series.                                                            |
| `soundtrack`                                                                           | [operations.Soundtrack](../../models/operations/soundtrack.md)                         | :heavy_check_mark:                                                                     | Soundtrack configuration for the series.                                               |
| `thumbnail`                                                                            | [operations.Thumbnail](../../models/operations/thumbnail.md)                           | :heavy_minus_sign:                                                                     | Thumbnail for the series.                                                              |
| `styles`                                                                               | [operations.Styles](../../models/operations/styles.md)                                 | :heavy_check_mark:                                                                     | Styles for the series videos.                                                          |
| `imageStyle`                                                                           | [operations.ImageStyle](../../models/operations/imagestyle.md)                         | :heavy_check_mark:                                                                     | Image style for series.                                                                |
| `voice`                                                                                | [operations.Voice](../../models/operations/voice.md)                                   | :heavy_check_mark:                                                                     | Voice configuration for the series.                                                    |
| `customWatermark`                                                                      | [operations.CustomWatermark](../../models/operations/customwatermark.md)               | :heavy_minus_sign:                                                                     | Custom watermark for the series (paid plans only).                                     |
| `connections`                                                                          | [components.Connection](../../models/components/connection.md)[]                       | :heavy_check_mark:                                                                     | Publishing connections for the series.                                                 |
| `hashtags`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | List of custom hashtags for the series.                                                |
| `episodes`                                                                             | [components.Video](../../models/components/video.md)[]                                 | :heavy_check_mark:                                                                     | List of episodes associated with this series.                                          |