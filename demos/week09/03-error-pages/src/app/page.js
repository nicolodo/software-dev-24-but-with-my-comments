import TextHightlight from "@/components/TextHighlight";
import CausesError from "@/components/CausesError";

export default function Page() {
  return (
    <div>
      {/* TextHighlight doesn't work on my end */}
      <TextHightlight content={'This is the homepage with a lovely highlight'}/>
      <p>Home page</p>
      {/* comment below out to not have an error */}
      <CausesError /> //This causes an error
    </div>
  )
}