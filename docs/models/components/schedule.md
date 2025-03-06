# Schedule

The publishing schedule for the video series.

## Example Usage

```typescript
import { Schedule } from "shortgenius/models/components";

let value: Schedule = {
  timeZone: "America/Anchorage",
  times: [
    {
      dayOfWeek: 2828.07,
      timeOfDay: 1201.96,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `timeZone`                                                 | [components.TimeZone](../../models/components/timezone.md) | :heavy_check_mark:                                         | N/A                                                        |
| `times`                                                    | [components.Times](../../models/components/times.md)[]     | :heavy_check_mark:                                         | N/A                                                        |