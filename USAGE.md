<!-- Start SDK Example Usage [usage] -->
```typescript
import { Shortgenius } from "shortgenius";

const shortgenius = new Shortgenius();

async function run() {
  const result = await shortgenius.status.check();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->