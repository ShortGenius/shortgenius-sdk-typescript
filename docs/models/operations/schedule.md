# Schedule

Publishing schedule for the video (optional).

## Example Usage

```typescript
import { Schedule } from "shortgenius/models/operations";

let value: Schedule = {
  timeZone: "Africa/Abidjan",
  times: [
    {
      dayOfWeek: 6154.24,
      timeOfDay: 8785.95,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `timeZone`                                                 | [operations.TimeZone](../../models/operations/timezone.md) | :heavy_check_mark:                                         | N/A                                                        |
| `times`                                                    | [operations.Times](../../models/operations/times.md)[]     | :heavy_check_mark:                                         | N/A                                                        |