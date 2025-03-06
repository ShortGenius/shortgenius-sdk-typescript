# CheckHealthResponseBody

Health status response.

## Example Usage

```typescript
import { CheckHealthResponseBody } from "shortgenius/models/operations";

let value: CheckHealthResponseBody = {
  status: "ok",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_check_mark:                                     | Indicates if the server is healthy.                    |