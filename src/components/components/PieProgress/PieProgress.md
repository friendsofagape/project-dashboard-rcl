# PieProgress

PieProgress component

```jsx
import PieProgress from "./PieProgress";

<div className="flex flex-row gap-5 items-end">
  <div className="flex flex-col gap-2 items-center ">
    <PieProgress radius="20px" />
    <span className="text-xs">filled : 70</span>
  </div>
  <div className="flex flex-col gap-2 items-center">
    <PieProgress filled={60} radius="30px" />
    <span className="text-xs">filled : 60</span>
  </div>
  <div className="flex flex-col gap-2 items-center">
    <PieProgress
      filled={20}
      radius="40px"
      bgColor="#ff4d4d"
      borderColor="#ffcccc"
    />
    <span className="text-xs">filled : 20</span>
  </div>
  <div className="flex flex-col gap-2 items-center">
    <PieProgress
      filled={5}
      radius="50px"
      bgColor="#ff4d4d"
      borderColor="#ffcccc"
    />
    <span className="text-xs">filled : 5</span>
  </div>
  <div className="flex flex-col gap-2 items-center">
    <PieProgress
      filled={95}
      radius="60px"
      bgColor="#40c000"
      borderColor="#ddffcc"
    />
    <span className="text-xs">filled : 95</span>
  </div>
  <div className="flex flex-col gap-2 items-center">
    <PieProgress
      filled={42}
      radius="80px"
      bgColor="#40c000"
      borderColor="#ddffcc"
    />
    <span className="text-xs">filled : 42</span>
  </div>
</div>;
```
