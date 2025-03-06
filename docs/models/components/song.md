# Song

Metadata about a music track.

## Example Usage

```typescript
import { Song } from "shortgenius/models/components";

let value: Song = {
  id: "<id>",
  name: "<value>",
  previewUrl: "https://necessary-hierarchy.name",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *string*                | :heavy_check_mark:      | Unique ID of the track. |
| `name`                  | *string*                | :heavy_check_mark:      | N/A                     |
| `previewUrl`            | *string*                | :heavy_check_mark:      | N/A                     |