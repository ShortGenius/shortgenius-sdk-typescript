# GetSeriesIdSchedule

The publishing schedule for the video series.

## Example Usage

```typescript
import { GetSeriesIdSchedule } from "shortgenius/models/operations";

let value: GetSeriesIdSchedule = {
  timeZone: "America/Noronha",
  times: [
    {
      dayOfWeek: 1247.4,
      timeOfDay: 4617.58,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `timeZone`                                                                       | [operations.GetSeriesIdTimeZone](../../models/operations/getseriesidtimezone.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `times`                                                                          | [operations.GetSeriesIdTimes](../../models/operations/getseriesidtimes.md)[]     | :heavy_check_mark:                                                               | N/A                                                                              |