
'use client';

import "@radix-ui/themes/styles.css";
import { Flex, Text, Button, Switch } from "@radix-ui/themes";
import ThemedCard from "@/components/Themed/ThemedCard";
import { Popover } from "@radix-ui/themes";

export default function Page() {
    
    return(
        <Flex direction="column" gap="2">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Let's go</Button>
            <Switch defaultChecked/>
            <ThemedCard />

            <Popover.Root>
                <Popover.Trigger>
                    <Button variant="soft">Popover</Button>
                </Popover.Trigger>
                <Popover.Content size="3" maxWidth="500px">
                    <Text as="p" trim="both" size="3">
                        The quick brown fox jumps over the lazy dog.
                    </Text>
                </Popover.Content>
            </Popover.Root>
        </Flex>
    )
}
