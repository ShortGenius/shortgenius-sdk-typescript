# Two1

## Example Usage

```typescript
import { Two1 } from "shortgenius/models/operations";

let value: Two1 = {
  id: "558a9b6d-25c5-4a42-94e7-350c390d204e",
  url: "https://impure-emergent.org",
  metadata: {
    prompt: "<value>",
  },
  source: "fal-ai/flux-pro/v1.1-ultra",
  state: "request_smart_motion",
  data: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deletedAt`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | [operations.GetSeries2ResponseMetadata](../../models/operations/getseries2responsemetadata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastError`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `source`                                                                                       | [operations.GetSeries2ResponseSource](../../models/operations/getseries2responsesource.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `category`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `state`                                                                                        | [operations.GetSeries2ResponseState](../../models/operations/getseries2responsestate.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.TwoData](../../models/operations/twodata.md)                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |