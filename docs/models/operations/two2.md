# Two2

## Example Usage

```typescript
import { Two2 } from "shortgenius/models/operations";

let value: Two2 = {
  id: "8b58ccb8-a17d-49f4-91a1-c48cc7f744b6",
  url: "https://fruitful-strategy.net/",
  metadata: {},
  source: "fal-ai/stable-video",
  state: "completed",
  data: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `url`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `deletedAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metadata`                                                             | [operations.TwoMetadata](../../models/operations/twometadata.md)       | :heavy_check_mark:                                                     | N/A                                                                    |
| `lastError`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `source`                                                               | [operations.TwoSource](../../models/operations/twosource.md)           | :heavy_check_mark:                                                     | N/A                                                                    |
| `category`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `state`                                                                | [operations.TwoState](../../models/operations/twostate.md)             | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [operations.GetSeries2Data](../../models/operations/getseries2data.md) | :heavy_check_mark:                                                     | N/A                                                                    |