import NavBar from "@/components/NavigationMenu";
import PopoverExample from "@/components/Popover";

//primitive radix Components I'm trying out from the docs
import NBlockquote from "@/components/NBlockquote";
import NCard from "@/components/NCard";
import NSwitch from "@/components/NSwitch";
import NPopover2 from "@/components/NPopover2/NPopover2";

import { LuAlarmClockCheck } from "react-icons/lu"; // icon

export default function Page() {
  return (
    <div>
      <p>Radix nav menu:</p>
      <NavBar />
      <PopoverExample />
      <div>
        <NBlockquote />
        <NCard /> {/* Card not appearing as on site */}
        <NSwitch />
        <NPopover2 />
        <LuAlarmClockCheck /> {/* puts a little alarm clock icon on the pg */}
      </div>
    </div>
  )
}