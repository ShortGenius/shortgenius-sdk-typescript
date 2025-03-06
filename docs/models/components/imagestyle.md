# ImageStyle

A predefined image style

## Example Usage

```typescript
import { ImageStyle } from "shortgenius/models/components";

let value: ImageStyle = {
  id: "1045cf6a-fba1-45e3-bdb5-88b82c6f4459",
  name: "<value>",
  privacy: "Private",
  prompt: "<value>",
  examples: [
    "<value>",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | Unique ID of the image style.                            |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | Name of the image style.                                 |
| `privacy`                                                | [components.Privacy](../../models/components/privacy.md) | :heavy_check_mark:                                       | Privacy of the image style.                              |
| `prompt`                                                 | *string*                                                 | :heavy_check_mark:                                       | Prompt for the image style.                              |
| `examples`                                               | *string*[]                                               | :heavy_check_mark:                                       | Examples of the image style.                             |