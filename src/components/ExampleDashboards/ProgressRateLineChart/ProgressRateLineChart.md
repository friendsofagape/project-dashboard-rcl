ProgressRateLineChart chart

```jsx
import ProgressRateLineChart from "./ProgressRateLineChart";
import json from "../../../../AgProjectData.json";

<div className="bg-[#f9f9f9]">
  <ProgressRateLineChart
    Head={"Translation Rate"}
    subHead={"by the month - verses/hour"}
    currentBook={{ name: "Titus", jsonCode: "tit" }}
    json={json}
    graphdataKeys={["validated"]}
    graphColors={["#0073e5"]}
  />
</div>;
```
