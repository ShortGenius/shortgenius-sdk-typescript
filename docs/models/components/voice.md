# Voice

A text-to-speech voice

## Example Usage

```typescript
import { Voice } from "shortgenius/models/components";

let value: Voice = {
  id: "<id>",
  name: "<value>",
  description: "knottily adult agreeable muddy measly",
  tags: {},
  previewUrl: "https://unimportant-alert.com/",
  locale: "cs-CZ",
  source: "ElevenLabsShared",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Unique ID of the voice.                                          |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | Name of the voice.                                               |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | Description of the voice.                                        |
| `avatarUrl`                                                      | *string*                                                         | :heavy_minus_sign:                                               | Avatar url of the voice.                                         |
| `flagUrl`                                                        | *string*                                                         | :heavy_minus_sign:                                               | Flag url of the voice.                                           |
| `tags`                                                           | [components.Tags](../../models/components/tags.md)               | :heavy_check_mark:                                               | Tags of the voice. Describe the characteristics of the voice.    |
| `previewUrl`                                                     | *string*                                                         | :heavy_check_mark:                                               | URL of the preview audio of the voice.                           |
| `locale`                                                         | [components.VoiceLocale](../../models/components/voicelocale.md) | :heavy_check_mark:                                               | Locale of the voice.                                             |
| `source`                                                         | [components.Source](../../models/components/source.md)           | :heavy_check_mark:                                               | Source of the voice.                                             |