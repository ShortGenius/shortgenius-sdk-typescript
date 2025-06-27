# MusicGenre

A music genre.

## Example Usage

```typescript
import { MusicGenre } from "shortgenius/models/components";

let value: MusicGenre = {
  name: "Classical",
  recommendedForLocales: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The name of the genre (e.g., "Classical").                                             | Classical                                                                              |
| `recommendedForLocales`                                                                | [components.RecommendedForLocales](../../models/components/recommendedforlocales.md)[] | :heavy_check_mark:                                                                     | The languages this genre is particularly popular in.                                   |                                                                                        |