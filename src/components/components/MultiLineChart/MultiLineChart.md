# MultiLineChart

MultiLineChart component

```jsx
import MultiLineChart from "./MultiLineChart";

<div className="grid grid-cols-1 ">
  <div className="w-[32rem] h-64">
    <MultiLineChart
      data={{
        graphData: [
          {
            name: "2018",
            data1: 500,
          },
          {
            name: "2019",
            data1: 600,
          },
          {
            name: "2020",
            data1: 1500,
          },
          {
            name: "2021",
            data1: 1200,
          },
          {
            name: "2022",
            data1: 700,
          },
        ],
        colors: ["#8884d8"],
        dataKeyNames: ["data1"],
      }}
    />
  </div>
</div>;
```

Multiple Lines charts

```jsx
import MultiLineChart from "./MultiLineChart";

<div className="grid grid-cols-1 ">
  <div className="w-[32rem] h-64">
    <MultiLineChart
      data={{
        graphData: [
          {
            name: "2018",
            progress: 500,
            expected: 100,
          },
          {
            name: "2019",
            progress: 600,
            expected: 200,
          },
          {
            name: "2020",
            progress: 1500,
            expected: 500,
          },
          {
            name: "2021",
            progress: 1200,
            expected: 700,
          },
          {
            name: "2022",
            progress: 700,
            expected: 1400,
          },
        ],
        colors: ["#8884d8", "#e6981c"],
        dataKeyNames: ["progress", "expected"],
      }}
    />
  </div>
</div>;
```
