# Table

Table component

```jsx
import Table from "./Table";
import Badge from "../Badge";

<div className="w-3/4 ">
  <Table
    headBg={"#f9f9f9"}
    tableHead={"Checks"}
    headContents={[
      <Badge BadgeType={"danger"} fontSize={"text-xs"}>
        50% Completed
      </Badge>,
      <Badge BadgeType={"secondary"} fontSize={"text-xs"}>
        50% Pending
      </Badge>,
    ]}
    tableContents={[
      [<Badge fontSize={"text-xs"}>2%</Badge>, "R1C2", "R1C3", "R1C4"],
      [<Badge fontSize={"text-xs"}>4%</Badge>, "R2C2", "R2C3", "R2C4"],
      [<Badge fontSize={"text-xs"}>6%</Badge>, "R2C2", "R2C3", "R2C4"],
    ]}
  />
</div>;
```
