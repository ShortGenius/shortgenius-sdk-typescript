# Audio

Details about the created or retrieved audio media.

## Example Usage

```typescript
import { Audio } from "shortgenius/models/components";

let value: Audio = {
  id: "e10a1585-255d-4459-9f29-3e5cf99f1acb",
  createdAt: "1705857521630",
  url: "https://violent-e-mail.com/",
  userId: "97de9a7b-d4ec-42c0-ba38-234d2b5c59b8",
  state: "completed",
  text: "<value>",
  voice: {
    id: "<id>",
    name: "<value>",
    description: "immediately forsaken um react underneath boohoo",
    tags: {},
    previewUrl: "https://lined-request.info",
    locale: "pt-BR",
    source: "CartesiaClonedVoice",
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