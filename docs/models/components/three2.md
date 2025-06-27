# Three2

## Example Usage

```typescript
import { Three2 } from "shortgenius/models/components";

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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `url`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `deletedAt`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metadata`                                                               | [components.Series3Metadata](../../models/components/series3metadata.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `lastError`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `source`                                                                 | [components.Series3Source](../../models/components/series3source.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `category`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `state`                                                                  | [components.Series3State](../../models/components/series3state.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [components.Series3Data](../../models/components/series3data.md)         | :heavy_check_mark:                                                       | N/A                                                                      |