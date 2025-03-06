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
      description: "oof oof ugh beneath",
      tags: {},
      previewUrl: "https://shameful-flint.info",
      locale: "hu-HU",
      source: "ElevenLabsShared",
    },
  ],
  playbackRate: 9004.11,
  volume: 1731.93,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `voices`                                               | [components.Voice](../../models/components/voice.md)[] | :heavy_check_mark:                                     | Voices for the series.                                 |
| `playbackRate`                                         | *number*                                               | :heavy_check_mark:                                     | Voice playback rate.                                   |
| `volume`                                               | *number*                                               | :heavy_check_mark:                                     | Voice volume.                                          |