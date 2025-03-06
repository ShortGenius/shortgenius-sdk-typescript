# Schedule

Publishing schedule for the video (optional).

## Example Usage

```typescript
import { Schedule } from "shortgenius/models/operations";

let value: Schedule = {
  timeZone: "Europe/Volgograd",
  times: [
    {
      dayOfWeek: 544.98,
      timeOfDay: 1912.02,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `timeZone`                                                 | [operations.TimeZone](../../models/operations/timezone.md) | :heavy_check_mark:                                         | N/A                                                        |
| `times`                                                    | [operations.Times](../../models/operations/times.md)[]     | :heavy_check_mark:                                         | N/A                                                        |