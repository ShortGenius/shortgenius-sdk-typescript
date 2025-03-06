# Three2

## Example Usage

```typescript
import { Three2 } from "shortgenius/models/operations";

let value: Three2 = {
  id: "066dc3d3-510a-4e7d-acaf-c4cb613c3fb7",
  url: "https://wiggly-cod.biz",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deletedAt`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `metadata`                                                                         | [operations.GetSeriesId3Metadata](../../models/operations/getseriesid3metadata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `lastError`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `source`                                                                           | [operations.GetSeriesId3Source](../../models/operations/getseriesid3source.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `category`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `state`                                                                            | [operations.GetSeriesId3State](../../models/operations/getseriesid3state.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [operations.GetSeriesId3Data](../../models/operations/getseriesid3data.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |