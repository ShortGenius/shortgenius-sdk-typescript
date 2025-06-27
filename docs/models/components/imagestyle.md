# ImageStyle

A predefined image style

## Example Usage

```typescript
import { ImageStyle } from "shortgenius/models/components";

let value: ImageStyle = {
  id: "db8e3193-1e0c-494e-a204-d9c16f35ca73",
  name: "<value>",
  privacy: "Private",
  prompt: "<value>",
  examples: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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