
import * as React from "react";
import { Popover } from "radix-ui";
import "./styles.css"

const NPopover2 = () => (
    <Popover.Root>
        <Popover.Trigger className="PopoverTrigger">NPopover: More info</Popover.Trigger>
        <Popover.Portal>
            <Popover.Content className="PopoverContent">
                Some more info...
                <Popover.Arrow className="PopoverArrow"/>
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
)

export default NPopover2;
