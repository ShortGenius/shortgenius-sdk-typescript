# TwoResults

## Example Usage

```typescript
import { TwoResults } from "shortgenius/models/components";

let value: TwoResults = {
  images: [
    {
      url: "https://miserly-doubter.org",
      width: 3719.19,
      height: 13.83,
      contentType: "<value>",
    },
  ],
  timings: {},
  seed: 2476.85,
  hasNsfwConcepts: [
    false,
  ],
  prompt: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `images`                                                 | [components.Images](../../models/components/images.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `timings`                                                | [components.Timings](../../models/components/timings.md) | :heavy_check_mark:                                       | N/A                                                      |
| `seed`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `hasNsfwConcepts`                                        | *boolean*[]                                              | :heavy_check_mark:                                       | N/A                                                      |
| `prompt`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |