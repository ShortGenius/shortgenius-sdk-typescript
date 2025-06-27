# Three2

## Example Usage

```typescript
import { Three2 } from "shortgenius/models/operations";

let value: Three2 = {
  id: "32b897dc-0fc2-4cd8-9721-ce27c0dffae5",
  url: "https://vague-corporation.name/",
  metadata: {},
  source: "ImagePicker",
  state: "uploading",
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