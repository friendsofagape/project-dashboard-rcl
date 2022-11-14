# StackedBarChart

StackedBarChart component

```jsx
import StackedBarChart from "./StackedBarChart";

<div className="grid grid-cols-1 ">
  <div className="w-[32rem] h-64">
    <StackedBarChart
      data={{
        graphData: [
          {
            name: "Mar",
            pending: 60,
            inProgress: 25,
            validated: 10,
          },
          {
            name: "Jun",
            pending: 20,
            inProgress: 20,
            validated: 10,
          },
          {
            name: "Sep",
            pending: 65,
            inProgress: 35,
            validated: 20,
          },
        ],
        colors: ["#77eb67", "#32b021", "#1b820d"],
      }}
    />
  </div>
</div>;
```
