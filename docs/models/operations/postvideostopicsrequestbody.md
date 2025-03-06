# PostVideosTopicsRequestBody

Parameters for generating video topic suggestions.

## Example Usage

```typescript
import { PostVideosTopicsRequestBody } from "shortgenius/models/operations";

let value: PostVideosTopicsRequestBody = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `parentTopic`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | Base idea or theme for generating custom topics.                                                 |
| `locale`                                                                                         | [operations.PostVideosTopicsLocale](../../models/operations/postvideostopicslocale.md)           | :heavy_minus_sign:                                                                               | Locale for topic generation.                                                                     |
| `numberOfTopics`                                                                                 | *number*                                                                                         | :heavy_minus_sign:                                                                               | Approximate number of topics to generate (max 100).                                              |
| `contentType`                                                                                    | [operations.PostVideosTopicsContentType](../../models/operations/postvideostopicscontenttype.md) | :heavy_minus_sign:                                                                               | Content type of the video.                                                                       |