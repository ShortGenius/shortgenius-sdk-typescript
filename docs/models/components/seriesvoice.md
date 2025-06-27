# SeriesVoice

Voice configuration for the series.

## Example Usage

```typescript
import { SeriesVoice } from "shortgenius/models/components";

let value: SeriesVoice = {
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
  playbackRate: 1326.33,
  volume: 7724.22,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `voices`                                               | [components.Voice](../../models/components/voice.md)[] | :heavy_check_mark:                                     | Voices for the series.                                 |
| `playbackRate`                                         | *number*                                               | :heavy_check_mark:                                     | Voice playback rate.                                   |
| `volume`                                               | *number*                                               | :heavy_check_mark:                                     | Voice volume.                                          |