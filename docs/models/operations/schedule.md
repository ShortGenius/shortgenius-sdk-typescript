# Schedule

Publishing schedule for the video (optional).

## Example Usage

```typescript
import { Schedule } from "shortgenius/models/operations";

let value: Schedule = {
  timeZone: "Pacific/Marquesas",
  times: [
    {
      dayOfWeek: 2286.35,
      timeOfDay: 2290.35,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `timeZone`                                                 | [operations.TimeZone](../../models/operations/timezone.md) | :heavy_check_mark:                                         | N/A                                                        |
| `times`                                                    | [operations.Times](../../models/operations/times.md)[]     | :heavy_check_mark:                                         | N/A                                                        |