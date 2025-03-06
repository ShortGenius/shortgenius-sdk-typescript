<!-- Start SDK Example Usage [usage] -->
```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius({
  bearerAuth: process.env["SHORTGENIUS_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await shortGenius.getMusicGenres();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->