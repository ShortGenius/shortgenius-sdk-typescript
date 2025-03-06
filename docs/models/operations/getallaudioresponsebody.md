# GetAllAudioResponseBody

Successful response

## Example Usage

```typescript
import { GetAllAudioResponseBody } from "shortgenius/models/operations";

let value: GetAllAudioResponseBody = {
  audio: [
    {
      id: "fa6b025d-4063-4065-8b16-5ae2d90c8c6a",
      createdAt: "1715749008006",
      url: "https://miserable-provision.net/",
      userId: "d6e12a42-e1fd-4da3-9c09-7c06726e7480",
      state: "error",
      text: "<value>",
      voice: {
        id: "<id>",
        name: "<value>",
        description:
          "goodwill behind gee deadly silently backburn quizzically squeaky",
        tags: {},
        previewUrl: "https://avaricious-whack.info",
        locale: "en-US",
        source: "OpenAI",
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