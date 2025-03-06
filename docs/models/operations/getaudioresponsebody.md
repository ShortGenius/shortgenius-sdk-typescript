# GetAudioResponseBody

Successful response

## Example Usage

```typescript
import { GetAudioResponseBody } from "shortgenius/models/operations";

let value: GetAudioResponseBody = {
  audio: [
    {
      id: "2adc5ed8-7021-48a9-9dad-22e53efa6b02",
      createdAt: "1735928565851",
      url: "https://bad-giggle.biz/",
      userId: "065b165a-e2d9-40c8-9c6a-3358bad6e12a",
      state: "pending",
      text: "<value>",
      voice: {
        id: "<id>",
        name: "<value>",
        description:
          "where mechanically across weatherize wherever but quizzically questionably pale whereas",
        tags: {},
        previewUrl: "https://firm-paintwork.info/",
        locale: "hr-HR",
        source: "CartesiaClonedVoice",
      },
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `audio`                                                | [components.Audio](../../models/components/audio.md)[] | :heavy_check_mark:                                     | Array of audio records.                                |
| `hasMore`                                              | *boolean*                                              | :heavy_check_mark:                                     | Indicates if more items are available.                 |