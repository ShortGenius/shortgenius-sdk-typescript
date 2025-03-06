# TwoResults

## Example Usage

```typescript
import { TwoResults } from "shortgenius/models/operations";

let value: TwoResults = {
  images: [
    {
      url: "https://well-made-galoshes.info",
      width: 5158.54,
      height: 6849.38,
      contentType: "<value>",
    },
  ],
  timings: {},
  seed: 5660.24,
  hasNsfwConcepts: [
    false,
  ],
  prompt: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `images`                                                 | [operations.Images](../../models/operations/images.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `timings`                                                | [operations.Timings](../../models/operations/timings.md) | :heavy_check_mark:                                       | N/A                                                      |
| `seed`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `hasNsfwConcepts`                                        | *boolean*[]                                              | :heavy_check_mark:                                       | N/A                                                      |
| `prompt`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |