# One

## Example Usage

```typescript
import { One } from "shortgenius/models/operations";

let value: One = {
  url: "https://hurtful-manner.net/",
  source: "Ugc",
  data: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `url`                                                  | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `deletedAt`                                            | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `metadata`                                             | *any*                                                  | :heavy_minus_sign:                                     | N/A                                                    |
| `lastError`                                            | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `source`                                               | [operations.Source](../../models/operations/source.md) | :heavy_check_mark:                                     | N/A                                                    |
| `category`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [operations.Data](../../models/operations/data.md)     | :heavy_check_mark:                                     | N/A                                                    |
| `state`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |