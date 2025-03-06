# Voice

Voice configuration for the series.

## Example Usage

```typescript
import { Voice } from "shortgenius/models/operations";

let value: Voice = {
  voices: [
    {
      id: "<id>",
      name: "<value>",
      description:
        "slowly into along ew malfunction supplier finally reschedule whenever indeed",
      tags: {},
      previewUrl: "https://content-lieu.name",
      locale: "ko-KR",
      source: "ElevenLabs",
    },
  ],
  playbackRate: 783.5,
  volume: 1459.37,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `voices`                                               | [components.Voice](../../models/components/voice.md)[] | :heavy_check_mark:                                     | Voices for the series.                                 |
| `playbackRate`                                         | *number*                                               | :heavy_check_mark:                                     | Voice playback rate.                                   |
| `volume`                                               | *number*                                               | :heavy_check_mark:                                     | Voice volume.                                          |