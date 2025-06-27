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
        "scamper woot dead merrily joyfully wriggler shadowbox politely frightfully not",
      tags: {},
      previewUrl: "https://extra-large-decision.net/",
      locale: null,
      source: "ElevenLabsShared",
    },
  ],
  playbackRate: 2023.4,
  volume: 5207.52,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `voices`                                               | [components.Voice](../../models/components/voice.md)[] | :heavy_check_mark:                                     | Voices for the series.                                 |
| `playbackRate`                                         | *number*                                               | :heavy_check_mark:                                     | Voice playback rate.                                   |
| `volume`                                               | *number*                                               | :heavy_check_mark:                                     | Voice volume.                                          |