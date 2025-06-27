# ImageStyleRecommendations

## Example Usage

```typescript
import { ImageStyleRecommendations } from "shortgenius/models/components";

let value: ImageStyleRecommendations = {
  presetId: "725b5178-83f5-48d1-b37e-69bba517823e",
  reason: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `presetId`                                          | *string*                                            | :heavy_check_mark:                                  | ID of the recommended image style preset.           |
| `reason`                                            | *string*                                            | :heavy_check_mark:                                  | Reason why this style is recommended for the video. |