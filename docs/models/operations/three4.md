# Three4

## Example Usage

```typescript
import { Three4 } from "shortgenius/models/operations";

let value: Three4 = {
  id: "0196a4ec-1cff-4b19-b4fb-9b75e506caf1",
  url: "https://liquid-horde.com/",
  metadata: {},
  source: "Upload",
  state: "completed",
  data: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `url`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deletedAt`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | [operations.GetSeries3Response200Metadata](../../models/operations/getseries3response200metadata.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `lastError`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `source`                                                                                             | [operations.GetSeries3Response200Source](../../models/operations/getseries3response200source.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `category`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `state`                                                                                              | [operations.GetSeries3Response200State](../../models/operations/getseries3response200state.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | [operations.GetSeries3Response200Data](../../models/operations/getseries3response200data.md)         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |