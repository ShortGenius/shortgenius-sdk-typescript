# GetCreditsResponseBody

Successful response

## Example Usage

```typescript
import { GetCreditsResponseBody } from "shortgenius/models/operations";

let value: GetCreditsResponseBody = {
  balance: {
    credits: 8053.26,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `balance`                                                              | [operations.Balance](../../models/operations/balance.md)               | :heavy_check_mark:                                                     | Response object containing usage information for various credit types. |