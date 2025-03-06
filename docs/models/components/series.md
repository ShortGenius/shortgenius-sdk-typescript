# Series

Public series information.

## Example Usage

```typescript
import { Series } from "shortgenius/models/components";

let value: Series = {
  id: "a6cb7a8c-7849-4492-a266-420047b7e025",
  createdAt: "1736586129638",
  nextPostingAt: "<value>",
  type: "SingleVideo",
  schedule: {
    timeZone: "America/Argentina/Buenos_Aires",
    times: [
      {
        dayOfWeek: 618.89,
        timeOfDay: 8213.04,
      },
    ],
  },
  aspectRatio: "16:9",
  soundtrackBehavior: "FullMusic",
  locale: "zh-TW",
  soundtrack: {
    tracks: [
      {
        url: "https://courteous-saw.net/",
      },
    ],
    recommendations: [
      {
        url: "https://muted-wasabi.info",
        reason: "<value>",
      },
    ],
    playbackRate: 6019.44,
    volume: 633.69,
  },
  styles: {},
  imageStyle: {},
  voice: {
    voices: [
      {
        id: "<id>",
        name: "<value>",
        description: "blah pfft pigpen aha now ouch",
        tags: {},
        previewUrl: "https://wiggly-encouragement.net",
        locale: "hu-HU",
        source: "CartesiaClonedVoice",
      },
    ],
    playbackRate: 2305.94,
    volume: 3440.1,
  },
  connections: [
    {
      id: "f43947d3-698f-4abf-9650-232c8ad35b60",
      type: "X",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Unique ID of the series.                                                       |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Date and time (ISO 8601) when the series was created.                          |
| `updatedAt`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Date and time (ISO 8601) when the series was last updated.                     |
| `nextPostingAt`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | Date and time (ISO 8601) when the next video will be posted.                   |
| `type`                                                                         | [components.Type](../../models/components/type.md)                             | :heavy_check_mark:                                                             | Type of the series (e.g., automatically generated).                            |
| `schedule`                                                                     | [components.Schedule](../../models/components/schedule.md)                     | :heavy_check_mark:                                                             | The publishing schedule for the video series.                                  |
| `contentType`                                                                  | [components.ContentType](../../models/components/contenttype.md)               | :heavy_minus_sign:                                                             | Indicates the type of content in this series.                                  |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | User-friendly name for the series.                                             |
| `aspectRatio`                                                                  | [components.AspectRatio](../../models/components/aspectratio.md)               | :heavy_check_mark:                                                             | Aspect ratio of the series videos.                                             |
| `soundtrackBehavior`                                                           | [components.SoundtrackBehavior](../../models/components/soundtrackbehavior.md) | :heavy_check_mark:                                                             | Behavior of the soundtrack.                                                    |
| `prompt`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | A custom topic for the series.                                                 |
| `tiktokSettings`                                                               | [components.TiktokSettings](../../models/components/tiktoksettings.md)         | :heavy_minus_sign:                                                             | Settings for the TikTok platform.                                              |
| `youtubeSettings`                                                              | [components.YoutubeSettings](../../models/components/youtubesettings.md)       | :heavy_minus_sign:                                                             | Settings for the YouTube platform.                                             |
| `xSettings`                                                                    | [components.XSettings](../../models/components/xsettings.md)                   | :heavy_minus_sign:                                                             | Settings for the X/Twitter platform.                                           |
| `locale`                                                                       | [components.Locale](../../models/components/locale.md)                         | :heavy_check_mark:                                                             | Locale of the video series.                                                    |
| `soundtrack`                                                                   | [components.Soundtrack](../../models/components/soundtrack.md)                 | :heavy_check_mark:                                                             | Soundtrack configuration for the series.                                       |
| `thumbnail`                                                                    | [components.Thumbnail](../../models/components/thumbnail.md)                   | :heavy_minus_sign:                                                             | Thumbnail for the series.                                                      |
| `styles`                                                                       | [components.Styles](../../models/components/styles.md)                         | :heavy_check_mark:                                                             | Styles for the series videos.                                                  |
| `imageStyle`                                                                   | [components.SeriesImageStyle](../../models/components/seriesimagestyle.md)     | :heavy_check_mark:                                                             | Image style for series.                                                        |
| `voice`                                                                        | [components.SeriesVoice](../../models/components/seriesvoice.md)               | :heavy_check_mark:                                                             | Voice configuration for the series.                                            |
| `customWatermark`                                                              | [components.CustomWatermark](../../models/components/customwatermark.md)       | :heavy_minus_sign:                                                             | Custom watermark for the series (paid plans only).                             |
| `connections`                                                                  | [components.Connection](../../models/components/connection.md)[]               | :heavy_check_mark:                                                             | Publishing connections for the series.                                         |
| `hashtags`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | List of custom hashtags for the series.                                        |