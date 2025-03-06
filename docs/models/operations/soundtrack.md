# Soundtrack

Soundtrack configuration for the series.

## Example Usage

```typescript
import { Soundtrack } from "shortgenius/models/operations";

let value: Soundtrack = {
  tracks: [
    {
      url: "https://disloyal-newsprint.info",
    },
  ],
  recommendations: [
    {
      url: "https://menacing-elver.biz/",
      reason: "<value>",
    },
  ],
  playbackRate: 8797.23,
  volume: 1557.62,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `tracks`                                                                   | [operations.Tracks](../../models/operations/tracks.md)[]                   | :heavy_check_mark:                                                         | Soundtracks for the series.                                                |
| `recommendations`                                                          | [operations.Recommendations](../../models/operations/recommendations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `playbackRate`                                                             | *number*                                                                   | :heavy_check_mark:                                                         | Soundtrack playback rate.                                                  |
| `volume`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | Soundtrack volume.                                                         |