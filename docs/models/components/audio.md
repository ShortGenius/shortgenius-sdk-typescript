# Audio

Details about the created or retrieved audio media.

## Example Usage

```typescript
import { Audio } from "shortgenius/models/components";

let value: Audio = {
  id: "7ac84a9e-0e80-45b7-af65-d8aca619e6e8",
  createdAt: "1735968120905",
  url: "https://broken-wear.biz",
  userId: "b873b1fd-8648-4e48-8353-f9b15e12a9de",
  state: "generating",
  text: "<value>",
  voice: {
    id: "<id>",
    name: "<value>",
    description: "inasmuch drive frankly unblinking furthermore sightseeing",
    tags: {},
    previewUrl: "https://sizzling-eggplant.info",
    locale: "en-US",
    source: "Cartesia",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | Unique ID of the audio.                                                               |
| `createdAt`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | Date and time (ISO 8601) when the audio media was created.                            |
| `updatedAt`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | Date and time (ISO 8601) when the audio media was last updated.                       |
| `url`                                                                                 | *string*                                                                              | :heavy_check_mark:                                                                    | URL of the audio. Only available after the audio is generated.                        |
| `userId`                                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | ID of the user who generated the audio.                                               |
| `transcript`                                                                          | [components.Transcript](../../models/components/transcript.md)                        | :heavy_minus_sign:                                                                    | Transcript of the audio with timestamps. Only available after the audio is generated. |
| `state`                                                                               | [components.AudioState](../../models/components/audiostate.md)                        | :heavy_check_mark:                                                                    | State of the audio generation.                                                        |
| `text`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Source text of the audio.                                                             |
| `locale`                                                                              | [components.AudioLocale](../../models/components/audiolocale.md)                      | :heavy_minus_sign:                                                                    | Locale of the audio to guide the AI. Auto-detected if not provided.                   |
| `voice`                                                                               | [components.Voice](../../models/components/voice.md)                                  | :heavy_check_mark:                                                                    | A text-to-speech voice                                                                |
| `duration`                                                                            | *number*                                                                              | :heavy_minus_sign:                                                                    | Duration of the generated audio. Only available after the audio is generated.         |
| `lufs`                                                                                | *number*                                                                              | :heavy_minus_sign:                                                                    | Loudness normalization value in LUFS. Only available after the audio is generated.    |