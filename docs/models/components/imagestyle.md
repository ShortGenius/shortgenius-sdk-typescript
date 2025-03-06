# ImageStyle

A predefined image style

## Example Usage

```typescript
import { ImageStyle } from "shortgenius/models/components";

let value: ImageStyle = {
  id: "a1045cf6-afba-415e-a3db-588b82c6f445",
  name: "<value>",
  prompt: "<value>",
  examples: [
    "<value>",
  ],
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `id`                          | *string*                      | :heavy_check_mark:            | Unique ID of the image style. |
| `name`                        | *string*                      | :heavy_check_mark:            | Name of the image style.      |
| `prompt`                      | *string*                      | :heavy_check_mark:            | Prompt for the image style.   |
| `examples`                    | *string*[]                    | :heavy_check_mark:            | Examples of the image style.  |