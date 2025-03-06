# Video

Details about the created or retrieved video, including scenes and their media.

## Example Usage

```typescript
import { Video } from "shortgenius/models/components";

let value: Video = {
  id: "ef6c89e1-10dc-4dfc-a7c1-a2f864c79099",
  createdAt: "1739456280640",
  seriesId: "a56b0aa3-2559-47f1-832a-47321a235d1d",
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