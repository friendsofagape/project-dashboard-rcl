# Badge

Badge component

- Pre defined Badges
- custom Badge

```jsx
import Badge from "./Badge";

<div className="flex flex-col gap-5">
  <div className="flex flex-row gap-4">
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge>80%</Badge>
      <span>Primary</span>
    </div>
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="secondary">80%</Badge>
      <span>Secondary</span>
    </div>
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="success">80%</Badge>
      <span>success</span>
    </div>
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="danger">80%</Badge>
      <span>danger</span>
    </div>
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="warning">80%</Badge>
      <span>warning</span>
    </div>
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="info">80%</Badge>
      <span>info</span>
    </div>
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="light">80%</Badge>
      <span>light</span>
    </div>
  </div>

  <div className="flex flex-row gap-4">
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="pass">PASS</Badge>
      <span>Pass</span>
    </div>
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="recheck">RECHECK</Badge>
      <span>Re Check</span>
    </div>
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="fail">FAIL</Badge>
      <span>Fail</span>
    </div>
    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge BadgeType="notstarted">NOT STARTED</Badge>
      <span>Not Started</span>
    </div>

    <div className="flex flex-col text-xs text-center gap-1 ">
      <Badge
        BadgeType="custom"
        bgColor="#e9a425"
        color="#000"
        borderColor="#91630f"
        fontFamily="font-serif"
        fontSize="text-sm"
        fontWeight="font-bold"
      >
        Custom
      </Badge>
      <span>Custom</span>
    </div>
  </div>
</div>;
```
