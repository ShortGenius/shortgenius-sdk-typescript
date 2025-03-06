# Three3

## Example Usage

```typescript
import { Three3 } from "shortgenius/models/operations";

let value: Three3 = {
  id: "5db6acdd-2d03-4919-8465-18f94f6bafe2",
  url: "https://unsung-jury.net",
  metadata: {},
  source: "Upload",
  data: {
    sourceMedia: {
      id: "329304a9-5d44-4877-9284-6bec69b652bd",
      url: "https://pitiful-schedule.info",
    },
  },
  state: "error",
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