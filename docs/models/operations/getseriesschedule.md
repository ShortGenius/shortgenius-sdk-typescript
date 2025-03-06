# GetSeriesSchedule

The publishing schedule for the video series.

## Example Usage

```typescript
import { GetSeriesSchedule } from "shortgenius/models/operations";

let value: GetSeriesSchedule = {
  timeZone: "America/Havana",
  times: [
    {
      dayOfWeek: 9044.85,
      timeOfDay: 2870.2,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `timeZone`                                                                   | [operations.GetSeriesTimeZone](../../models/operations/getseriestimezone.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `times`                                                                      | [operations.GetSeriesTimes](../../models/operations/getseriestimes.md)[]     | :heavy_check_mark:                                                           | N/A                                                                          |