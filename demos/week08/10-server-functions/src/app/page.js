import TextHightlight from "@/components/TextHighlight";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <TextHightlight content={'This is the homepage with a lovely highlight'}/>
      <p className="mt-4 text-gray-600">Home page</p>
    </div>
  )
}