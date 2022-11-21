# TableExtended

TableExtended component

```jsx
import TableExtended from "./TableExtended";
import Badge from "../Badge";

<div className="w-[150%] p-5">
  <TableExtended
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
    tableChildHeadContents={[
      <Badge BadgeType={"pass"} fontSize={"text-xs"}>
        PASS
      </Badge>,
      <Badge BadgeType={"fail"} fontSize={"text-xs"}>
        Fail
      </Badge>,
      <Badge BadgeType={"recheck"} fontSize={"text-xs"}>
        Recheck
      </Badge>,
    ]}
    tableChildHeads={["R1-Title", "R2-Title", ""]}
    tableChildContents={[
      [
        [
          <Badge BadgeType={"pass"} fontSize={"text-xs"}>
            PASS
          </Badge>,
          "Titus 1:3",
          "1:30 Hrs",
        ],
        [
          <Badge BadgeType={"recheck"} fontSize={"text-xs"}>
            RECHECK
          </Badge>,
          "Luke 12:3",
          "0:00 Hrs",
        ],
      ],
      [
        [
          <Badge BadgeType={"pass"} fontSize={"text-xs"}>
            PASS
          </Badge>,
          "Mathew 1:3",
          "2:30 Hrs",
        ],
        [
          <Badge BadgeType={"fail"} fontSize={"text-xs"}>
            FAIL
          </Badge>,
          "John 12:3",
          "0:00 Hrs",
        ],
      ],
      [],
    ]}
  />
</div>;
```
