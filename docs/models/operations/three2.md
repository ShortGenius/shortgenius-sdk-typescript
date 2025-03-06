# Three2

## Example Usage

```typescript
import { Three2 } from "shortgenius/models/operations";

let value: Three2 = {
  id: "874e6066-dc3d-4351-b0ae-7dcafc4cb613",
  url: "https://zany-popularity.info/",
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `deletedAt`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | [operations.GetSeries3Metadata](../../models/operations/getseries3metadata.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `lastError`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `source`                                                                       | [operations.GetSeries3Source](../../models/operations/getseries3source.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `category`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `state`                                                                        | [operations.GetSeries3State](../../models/operations/getseries3state.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [operations.GetSeries3Data](../../models/operations/getseries3data.md)         | :heavy_check_mark:                                                             | N/A                                                                            |