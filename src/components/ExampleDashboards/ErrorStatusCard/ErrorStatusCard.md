ErrorStatusCard

```jsx
import ErrorStatusCard from "./ErrorStatusCard";
import json from "../../../../AgProjectData.json";

<div class="grid grid-cols-4 gap-5">
  <div className="bg-[#f9f9f9] w-auto h-auto">
    <ErrorStatusCard
      Head={"Spell Check"}
      currentBook={{ name: "Titus", jsonCode: "tit" }}
      json={json}
      basePath="projectName1/books"
      dataKey="spellingErrors"
    />
  </div>
  <div className="bg-[#f9f9f9] w-auto h-auto">
    <ErrorStatusCard
      Head={"USFM Error"}
      currentBook={{ name: "Titus", jsonCode: "tit" }}
      json={json}
      basePath="projectName1/books"
      dataKey="usfmTagErrors"
    />
  </div>
  <div className="bg-[#f9f9f9] w-auto h-auto">
    <ErrorStatusCard
      Head={"White Spacing"}
      currentBook={{ name: "Titus", jsonCode: "tit" }}
      json={json}
      basePath="projectName1/books"
      dataKey="suspiciousWhitespaces"
    />
  </div>
</div>;
```
