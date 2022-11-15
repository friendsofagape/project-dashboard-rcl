# Ag Project Managament DashBoard

versification chart

```jsx
import VersificationBarCard from "./VersificationBarCard";
import json from "../../../../AgProjectData.json";

<div className="bg-[#f9f9f9]">
  <VersificationBarCard
    Head={"Verifications"}
    subHead={"by the month"}
    currentBook={{ name: "Titus", jsonCode: "tit" }}
    json={json}
    graphdataKeys={["pending", "inprogress", "validated"]}
    graphColors={["#cce6ff", "#80bfff", "#0073e5"]}
  />
</div>;
```
