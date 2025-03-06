# Connection

A connection to a publishing destination

## Example Usage

```typescript
import { Connection } from "shortgenius/models/components";

let value: Connection = {
  id: "5fa51cbe-31b3-425d-a807-a893d8bf6e00",
  type: "TikTok",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Unique ID for the connection.                                          |
| `type`                                                                 | [components.ConnectionType](../../models/components/connectiontype.md) | :heavy_check_mark:                                                     | The publishing destination.                                            |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | User-friendly name for the connection.                                 |