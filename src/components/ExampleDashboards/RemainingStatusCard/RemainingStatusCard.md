RemainingStatusCard chart

```jsx
import RemainingStatusCard from "./RemainingStatusCard";
import json from "../../../../AgProjectData.json";

<div class="grid grid-cols-2 gap-1">
  <div className="bg-[#f9f9f9] w-52 h-auto">
    <RemainingStatusCard
      type="verse"
      Head={"Remaining Verses"}
      currentBook={{ name: "Titus", jsonCode: "tit" }}
      json={json}
      basePath="projectName1/books"
      badgeType="primary"
      pieFill="#0073e5"
      pieBorder="#cce6ff"
      pieRadius="40px"
    />
  </div>
  <div className="bg-[#f9f9f9] w-52 h-auto">
    <RemainingStatusCard
      type="chapter"
      Head={"Remaining Chapters"}
      currentBook={{ name: "Titus", jsonCode: "tit" }}
      json={json}
      basePath="projectName1/books"
      badgeType="primary"
      pieFill="#0073e5"
      pieBorder="#cce6ff"
      pieRadius="40px"
    />
  </div>
</div>;
```
