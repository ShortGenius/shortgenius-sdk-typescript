# Six1

## Example Usage

```typescript
import { Six1 } from "shortgenius/models/components";

let value: Six1 = {
  url: "https://sugary-cappelletti.name/",
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
| `source`                                                     | [components.SixSource](../../models/components/sixsource.md) | :heavy_check_mark:                                           | N/A                                                          |
| `category`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | [components.SixData](../../models/components/sixdata.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `state`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |