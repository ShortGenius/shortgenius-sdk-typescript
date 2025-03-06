# GetVoicesRequest

## Example Usage

```typescript
import { GetVoicesRequest } from "shortgenius/models/operations";

let value: GetVoicesRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `locale`                                                                   | [operations.QueryParamLocale](../../models/operations/queryparamlocale.md) | :heavy_minus_sign:                                                         | The locale for which to retrieve voices.                                   |
| `page`                                                                     | *number*                                                                   | :heavy_minus_sign:                                                         | The page number to retrieve.                                               |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The maximum number of items per page.                                      |