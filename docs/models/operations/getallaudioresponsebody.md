# GetAllAudioResponseBody

Successful response

## Example Usage

```typescript
import { GetAllAudioResponseBody } from "shortgenius/models/operations";

let value: GetAllAudioResponseBody = {
  audio: [
    {
      id: "b509b24d-cf78-404d-829a-dda0f9b4b3a6",
      createdAt: "1732129601116",
      url: null,
      userId: "5f2c40f8-889e-4510-abe0-373ae526884c",
      state: "pending",
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