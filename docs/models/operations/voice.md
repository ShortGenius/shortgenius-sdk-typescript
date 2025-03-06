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
        "sediment litter oxidise yowza how yowza even chiffonier mould",
      tags: {},
      previewUrl: "https://lighthearted-bidet.com",
      locale: "fr-FR",
      source: "ElevenLabsShared",
    },
  ],
  playbackRate: 2551.08,
  volume: 6094.29,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `voices`                                               | [components.Voice](../../models/components/voice.md)[] | :heavy_check_mark:                                     | Voices for the series.                                 |
| `playbackRate`                                         | *number*                                               | :heavy_check_mark:                                     | Voice playback rate.                                   |
| `volume`                                               | *number*                                               | :heavy_check_mark:                                     | Voice volume.                                          |