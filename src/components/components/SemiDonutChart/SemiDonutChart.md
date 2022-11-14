# SemiDonutChart

SemiDonutChart component

```jsx
import SemiDonutChart from "./SemiDonutChart";

<div className="grid grid-cols-4 gap-5">
  <div className="w-52 h-40">
    <SemiDonutChart />
  </div>
  <div className="w-52 h-40">
    <SemiDonutChart
      data={[
        { name: "A", value: 40, fill: "#01b700" },
        { name: "B", value: 25, fill: "#83ce01" },
        { name: "C", value: 20, fill: "#fffa00" },
        { name: "D", value: 15, fill: "#ffcf00" },
      ]}
      donutText="65%"
    />
  </div>
</div>;
```
