# Soundtrack

Soundtrack configuration for the series.

## Example Usage

```typescript
import { Soundtrack } from "shortgenius/models/components";

let value: Soundtrack = {
  tracks: [
    {
      url: "https://regular-overcoat.net",
    },
  ],
  recommendations: [
    {
      url: "https://pushy-king.com/",
      reason: "<value>",
    },
  ],
  playbackRate: 6379.95,
  volume: 2009.45,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `tracks`                                                                   | [components.Tracks](../../models/components/tracks.md)[]                   | :heavy_check_mark:                                                         | Soundtracks for the series.                                                |
| `recommendations`                                                          | [components.Recommendations](../../models/components/recommendations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `playbackRate`                                                             | *number*                                                                   | :heavy_check_mark:                                                         | Soundtrack playback rate.                                                  |
| `volume`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | Soundtrack volume.                                                         |