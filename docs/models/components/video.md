# Video

Details about the created or retrieved video, including scenes and their media.

## Example Usage

```typescript
import { Video } from "shortgenius/models/components";

let value: Video = {
  id: "95b2e1ec-90b4-4020-a922-6795ddf4a1b2",
  createdAt: "1706137012127",
  seriesId: "5a75a91e-3cb4-4ccb-ba72-441daeb38c7a",
  publishingState: "error",
  publishAt: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `title`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `caption`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `createdAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Date and time (ISO 8601) when the video was created.                     |
| `updatedAt`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | Date and time (ISO 8601) when the video was last updated.                |
| `seriesId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | ID of the associated series.                                             |
| `publishingState`                                                        | [components.PublishingState](../../models/components/publishingstate.md) | :heavy_check_mark:                                                       | Upload status of the video.                                              |
| `publishAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Date and time (ISO 8601) when the video was fully uploaded.              |