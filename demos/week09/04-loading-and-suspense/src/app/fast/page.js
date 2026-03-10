import { SlowComponent } from "@/components/SlowComponent";
import { Suspense } from "react";
import {Spinner} from "@heroui/spinner";


export default function Page() {
    return (
        <div>
            <p>This is some content I can read while the rest of the page loads in! I'll feast my eyes on these delightful characters in the meantime</p>
            <Suspense fallback={<p className="animate-spin">Loading....</p>}>
                <SlowComponent />
            </Suspense>
        </div>
    )
}