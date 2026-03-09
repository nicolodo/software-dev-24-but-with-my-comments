import TextHightlight from "@/components/TextHighlight";
import CausesError from "@/components/CausesError";

export default function Page() {
  return (
    <div>
      <TextHightlight content={'This is the homepage with a lovely highlight'}/>
      <p>Home page</p>
      <CausesError />
    </div>
  )
}