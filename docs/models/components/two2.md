# Two2

## Example Usage

```typescript
import { Two2 } from "shortgenius/models/components";

let value: Two2 = {
  id: "11d28c72-3685-4cce-a0e6-ebfc586547a4",
  url: "https://curly-archaeology.org/",
  metadata: {},
  source: "fal-ai/stable-video",
  state: "pending",
  data: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `deletedAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `metadata`                                                       | [components.TwoMetadata](../../models/components/twometadata.md) | :heavy_check_mark:                                               | N/A                                                              |
| `lastError`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `type`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `source`                                                         | [components.TwoSource](../../models/components/twosource.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `category`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `state`                                                          | [components.TwoState](../../models/components/twostate.md)       | :heavy_check_mark:                                               | N/A                                                              |
| `data`                                                           | [components.Series2Data](../../models/components/series2data.md) | :heavy_check_mark:                                               | N/A                                                              |