# Three1

## Example Usage

```typescript
import { Three1 } from "shortgenius/models/operations";

let value: Three1 = {
  id: "2686d41e-272e-4acb-8feb-ee42a4a25c94",
  url: "https://weary-conversation.name/",
  metadata: {},
  source: "ImagePicker",
  state: "request_smart_motion",
  data: {
    uploadId: "<id>",
    key: "<key>",
    alt: "<value>",
    uploadedAt: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `url`                                                                | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `deletedAt`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `metadata`                                                           | [operations.ThreeMetadata](../../models/operations/threemetadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `lastError`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `source`                                                             | [operations.ThreeSource](../../models/operations/threesource.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `category`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `state`                                                              | [operations.ThreeState](../../models/operations/threestate.md)       | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [operations.ThreeData](../../models/operations/threedata.md)         | :heavy_check_mark:                                                   | N/A                                                                  |