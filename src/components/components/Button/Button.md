# ButtonComponent

A simple Counter UI with button component and custom class props

```jsx
import { useState } from "react";
import Button from "./Button";
const [count, setCount] = useState(0);

<div>
  <span className="mx-2">
    <Button
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      {count}
    </Button>
  </span>
  <Button
    textColor={"text-red-400"}
    extraClass={
      "hover:bg-green-400 hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded"
    }
    onClick={() => setCount(0)}
  >
    Reset Count
  </Button>
</div>;
```
