# 📘 JavaScript ES Modules

## What are ES Modules?

ES Modules (ECMAScript Modules) are the modern way to split JavaScript code into multiple files.

Benefits:

- Better code organization
- Reusable code
- Easier maintenance
- Avoid global variables
- Used in modern frameworks

---

## Export

Exports allow other files to use values.

### Named Export

```js
export const username = "John";
```

```js
export function greet() {
  console.log("Hello");
}
```

---

## Import

```js
import { username } from "./user.js";

console.log(username);
```

---

## Multiple Imports

```js
import { username, greet } from "./user.js";
```

---

## Default Export

```js
export default function greet() {
  console.log("Hello");
}
```

Import:

```js
import greet from "./user.js";
```

---

## Renaming Imports

```js
import { username as user } from "./user.js";
```

---

## Import Everything

```js
import * as UserModule from "./user.js";

console.log(UserModule.username);
```

---

## Module Script

HTML must use:

```html
<script type="module" src="app.js"></script>
```

---

## Best Practices

- One responsibility per module
- Use named exports when possible
- Keep modules small
- Use clear file names
- Avoid giant files

---

## Real World Usage

Modules are used in:

- React
- Vue
- Angular
- Node.js
- Vite
- Next.js

Understanding modules is required for modern JavaScript development.
