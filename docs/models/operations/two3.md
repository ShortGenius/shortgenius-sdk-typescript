# Two3

## Example Usage

```typescript
import { Two3 } from "shortgenius/models/operations";

let value: Two3 = {
  id: "9095752c-f190-4a4a-9bd7-9e3f227b6930",
  url: "https://black-and-white-giant.info/",
  metadata: {
    prompt: "<value>",
  },
  source: "luma-ai",
  state: "pending",
  data: null,
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
| `data`                                                                                         | [operations.GetSeries2ResponseData](../../models/operations/getseries2responsedata.md)         | :heavy_check_mark:                                                                             | N/A                                                                                            |