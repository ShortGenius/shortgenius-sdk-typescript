# Media9

## Example Usage

```typescript
import { Media9 } from "shortgenius/models/operations";

let value: Media9 = {
  id: "5f532872-64e1-468a-b339-f74f4c4d6018",
  url: "https://actual-midwife.net/",
  metadata: {
    adId: "<id>",
    creativeId: "<id>",
  },
  state: "completed",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `url`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `deletedAt`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `metadata`                                                                                                   | [operations.GetSeriesMediaResponse200Metadata](../../models/operations/getseriesmediaresponse200metadata.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `lastError`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `source`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `category`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `state`                                                                                                      | [operations.GetSeriesMediaResponseState](../../models/operations/getseriesmediaresponsestate.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |