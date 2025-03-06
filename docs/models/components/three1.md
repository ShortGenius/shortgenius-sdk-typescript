# Three1

## Example Usage

```typescript
import { Three1 } from "shortgenius/models/components";

let value: Three1 = {
  id: "5de035df-fe4f-431f-a3b0-be465b3274d3",
  url: "https://pricey-suitcase.org",
  metadata: {},
  source: "ImagePicker",
  state: "completed",
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
| `metadata`                                                           | [components.ThreeMetadata](../../models/components/threemetadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `lastError`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `source`                                                             | [components.ThreeSource](../../models/components/threesource.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `category`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `state`                                                              | [components.ThreeState](../../models/components/threestate.md)       | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [components.ThreeData](../../models/components/threedata.md)         | :heavy_check_mark:                                                   | N/A                                                                  |