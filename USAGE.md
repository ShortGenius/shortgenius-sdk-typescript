<!-- Start SDK Example Usage [usage] -->
```typescript
import { ShortGenius } from "shortgenius";

const shortGenius = new ShortGenius();

async function run() {
  const result = await shortGenius.status.check();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->