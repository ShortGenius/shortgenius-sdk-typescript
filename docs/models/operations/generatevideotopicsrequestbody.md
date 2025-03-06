# GenerateVideoTopicsRequestBody

Parameters for generating video topic suggestions.

## Example Usage

```typescript
import { GenerateVideoTopicsRequestBody } from "shortgenius/models/operations";

let value: GenerateVideoTopicsRequestBody = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `parentTopic`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Base idea or theme for generating custom topics.                                                       |
| `locale`                                                                                               | [operations.GenerateVideoTopicsLocale](../../models/operations/generatevideotopicslocale.md)           | :heavy_minus_sign:                                                                                     | Locale for topic generation.                                                                           |
| `numberOfTopics`                                                                                       | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Approximate number of topics to generate (max 100).                                                    |
| `contentType`                                                                                          | [operations.GenerateVideoTopicsContentType](../../models/operations/generatevideotopicscontenttype.md) | :heavy_minus_sign:                                                                                     | Content type of the video.                                                                             |