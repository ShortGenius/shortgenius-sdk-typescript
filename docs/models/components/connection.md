# Connection

A connection to a publishing destination

## Example Usage

```typescript
import { Connection } from "shortgenius/models/components";

let value: Connection = {
  id: "654c9c3a-526d-4e3e-b9bf-4c9c84516453",
  type: "X",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Unique ID for the connection.                                          |
| `type`                                                                 | [components.ConnectionType](../../models/components/connectiontype.md) | :heavy_check_mark:                                                     | The publishing destination.                                            |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | User-friendly name for the connection.                                 |