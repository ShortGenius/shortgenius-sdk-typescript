# Two1

## Example Usage

```typescript
import { Two1 } from "shortgenius/models/operations";

let value: Two1 = {
  id: "72056cc6-6651-4bc9-ac7f-f0eecc7db68e",
  url: "https://acclaimed-fax.name/",
  metadata: {
    prompt: "<value>",
  },
  source: "fal-ai/flux-pro/v1.1-ultra",
  state: "generating",
  data: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `deletedAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `metadata`                                                       | [operations.TwoMetadata](../../models/operations/twometadata.md) | :heavy_check_mark:                                               | N/A                                                              |
| `lastError`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `type`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `source`                                                         | [operations.TwoSource](../../models/operations/twosource.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `category`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `state`                                                          | [operations.TwoState](../../models/operations/twostate.md)       | :heavy_check_mark:                                               | N/A                                                              |
| `data`                                                           | [operations.TwoData](../../models/operations/twodata.md)         | :heavy_check_mark:                                               | N/A                                                              |