# UgcMedia2

## Example Usage

```typescript
import { UgcMedia2 } from "shortgenius/models/operations";

let value: UgcMedia2 = {
  url: "https://livid-folklore.org/",
  metadata: {
    sourceImageUrl: "https://experienced-tennis.info/",
    muxPlaybackId: "<id>",
  },
  source: "Ugc",
  data: {
    id: "<id>",
    ugcCreatorId: "<id>",
    ugcPresetId: "<id>",
    createdAt: "1719256062274",
  },
  state: "completed",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `url`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `deletedAt`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `metadata`                                                                                                   | [operations.UgcMediaMetadata](../../models/operations/ugcmediametadata.md)                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `lastError`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `source`                                                                                                     | [operations.CreateSeriesUgcMediaRequestSource](../../models/operations/createseriesugcmediarequestsource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `category`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [operations.CreateSeriesUgcMediaRequestData](../../models/operations/createseriesugcmediarequestdata.md)     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `state`                                                                                                      | [operations.UgcMediaState](../../models/operations/ugcmediastate.md)                                         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |