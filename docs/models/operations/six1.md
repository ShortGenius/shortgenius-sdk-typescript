# Six1

## Example Usage

```typescript
import { Six1 } from "shortgenius/models/operations";

let value: Six1 = {
  url: "https://shiny-story.info/",
  source: "Ugc",
  data: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `url`                                                        | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `deletedAt`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `metadata`                                                   | *any*                                                        | :heavy_minus_sign:                                           | N/A                                                          |
| `lastError`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `source`                                                     | [operations.SixSource](../../models/operations/sixsource.md) | :heavy_check_mark:                                           | N/A                                                          |
| `category`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | [operations.SixData](../../models/operations/sixdata.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `state`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |