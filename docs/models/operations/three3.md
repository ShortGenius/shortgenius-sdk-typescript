# Three3

## Example Usage

```typescript
import { Three3 } from "shortgenius/models/operations";

let value: Three3 = {
  id: "a0284122-ce9f-4a38-b930-10fc3b814e50",
  url: "https://inconsequential-kick.com/",
  metadata: {},
  source: "Upload",
  data: {
    sourceMedia: {
      id: "c9c17aff-75ae-4e5a-aa69-930e2517fcba",
      url: "https://unsung-archaeology.com/",
    },
  },
  state: "generating",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deletedAt`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | [operations.GetSeries3ResponseMetadata](../../models/operations/getseries3responsemetadata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastError`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `source`                                                                                       | [operations.GetSeries3ResponseSource](../../models/operations/getseries3responsesource.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `category`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.GetSeries3ResponseData](../../models/operations/getseries3responsedata.md)         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `state`                                                                                        | [operations.GetSeries3ResponseState](../../models/operations/getseries3responsestate.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |