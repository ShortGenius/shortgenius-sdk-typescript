# TwoMetadata

## Example Usage

```typescript
import { TwoMetadata } from "shortgenius/models/operations";

let value: TwoMetadata = {
  prompt: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `prompt`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `translatedPrompt`                                                           | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `rephrasedPrompt`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `imageStylePresetId`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `imageStyleCustomPrompt`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `aspectRatio`                                                                | [operations.TwoAspectRatio](../../models/operations/twoaspectratio.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `width`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `height`                                                                     | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `clonedMediaId`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `originalImageUrl`                                                           | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `quality`                                                                    | [operations.TwoQuality](../../models/operations/twoquality.md)               | :heavy_minus_sign:                                                           | N/A                                                                          |
| `animationModel`                                                             | [operations.TwoAnimationModel](../../models/operations/twoanimationmodel.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `animationPrompt`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |