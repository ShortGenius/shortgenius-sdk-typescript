# Two3

## Example Usage

```typescript
import { Two3 } from "shortgenius/models/operations";

let value: Two3 = {
  id: "e584afd5-1f64-457f-8f45-802e016b444d",
  url: "https://zesty-range.info",
  metadata: {
    prompt: "<value>",
  },
  source: "luma-ai",
  state: "error",
  data: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `deletedAt`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `metadata`                                                                             | [operations.GetSeries2Metadata](../../models/operations/getseries2metadata.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `lastError`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `source`                                                                               | [operations.GetSeries2Source](../../models/operations/getseries2source.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `category`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `state`                                                                                | [operations.GetSeries2State](../../models/operations/getseries2state.md)               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [operations.GetSeries2ResponseData](../../models/operations/getseries2responsedata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |