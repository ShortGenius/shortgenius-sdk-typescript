# Eight

## Example Usage

```typescript
import { Eight } from "shortgenius/models/components";

let value: Eight = {
  id: "b438cd3a-e50a-4b23-8cf3-c631231d1a7f",
  url: "https://feline-disclosure.com/",
  metadata: {
    brandDomain: "<value>",
    assetType: "<value>",
  },
  state: "completed",
  data: {
    assetKey: "<value>",
    uploadedAt: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `deletedAt`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `metadata`                                                                       | [components.SeriesMediaMetadata](../../models/components/seriesmediametadata.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `lastError`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `source`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `category`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `state`                                                                          | [components.MediaState](../../models/components/mediastate.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.SeriesMediaData](../../models/components/seriesmediadata.md)         | :heavy_check_mark:                                                               | N/A                                                                              |