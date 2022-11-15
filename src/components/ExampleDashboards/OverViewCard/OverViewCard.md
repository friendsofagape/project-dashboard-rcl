```jsx
import OverViewCard from "./OverViewCard";
import json from "../../../../AgProjectData.json";

<div className="bg-[#f9f9f9]">
  <OverViewCard
    Head1={"Overview"}
    Head2={"by the month"}
    currentBook={{ name: "Titus", jsonCode: "tit" }}
    json={json}
    donutdataKeys={["validated", "inprogress", "pending"]}
    donutPercentageKeys={["validated", "inprogress"]}
    donutColorPallete={["#0073e5", "#80bfff", "#cce6ff"]}
  />
</div>;
```
