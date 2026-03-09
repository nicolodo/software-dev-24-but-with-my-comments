import { Popover } from "radix-ui";
import { IoIosAttach } from "react-icons/io";

export default function PopoverExample() {
    return (
        <div>
            <Popover.Root>
                <Popover.Trigger>
                    Click me for more information
                    <IoIosAttach />
                </Popover.Trigger>
                <Popover.Content>
                    <p className="bg-amber-300">Bees don't have knees</p>
                </Popover.Content>
            </Popover.Root>
        </div>
    )
}