import Image from "./components/Image.jsx"
import { images} from "./stores/imageData.js"

export default function App() {

  return (
    <div>
      {/* react is perfectly happy to render arrays in it's jsx */}
      {[<p key={1}>Hello2</p>, <p key={2}>Hello</p>]}
      {/* seperation------ */}
      {images.map((image, index) => {
        return (
          <Image imgUrl={image.imgUrl} title={image.title} author={image.author} key={index}/>
        )
      })}


      {/* easier to read */}

      {images.map((image) => (
          <div key={image.id}>
            <Image imgUrl={image.imgUrl} title={image.title} author={image.author} loved={image.loved}/>
          </div>
        )
      )}
    </div>
  )
}

