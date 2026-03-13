
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes"
// import React, { Children } from "react"

// export default function ThemesLayout({ children} : {children: React.ReactNode }) {
export default function ThemesLayout({ children }) {
    return (
        <Theme>
            {children}
        </Theme>
    )
}
