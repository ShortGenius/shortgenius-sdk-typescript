# GetUsageResponseBody

Successful response

## Example Usage

```typescript
import { GetUsageResponseBody } from "shortgenius/models/operations";

let value: GetUsageResponseBody = {
  balance: {
    credits: 5231.54,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `balance`                                                              | [operations.Balance](../../models/operations/balance.md)               | :heavy_check_mark:                                                     | Response object containing usage information for various credit types. |