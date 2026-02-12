import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  // a state variable to store my images in
  // images/setImages

  const [images, setImages] = useState([])
  // a state variable to keep track of what index of the images we're on
  // currentIndex / setCurrentIndex
  // start off at zero.
  const [currentIndex, setCurrentIndex] = useState(0)

  // console.log(images)

  // 1. We need to get out images -> we'll use fetch. Wrap the fetch in a useEffect.
  // 2. We'll want to fetch data inside a useEffect so that it only fetched once
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://week-6-api.vercel.app/api/images`);
      const data = await res.json();
      setImages(data);
    }
    fetchData()
  }, []);

  function handleThumbnailClick(index) {
    console.log(index)
    // handleThumbnailclick updates the current index state variable - triggers a re-render
    setCurrentIndex(index);
  }

  const imagesArray = []
  for (const image of images) {
    imagesArray.push(<p>{image.title}</p>)
  }

  // console.log(imagesArray)

  return (
    <div>
      {/* 3. map through images */}
      {imagesArray}
      <div className="thumbnail">
        {images.map((image, index) => {
          return (
            // 4 add event listenr to thumbnails - we pass in the index of the image that was clikced on to handleThumbnailClick
            <div onClick={() => handleThumbnailClick(index)}>
              {/* <p>{image.url}</p> */}
              <img src={image.url} />
            </div>
          );
        })}
      </div>
      {/* this will re-render and display with the correct new big image because currentIndex was changed */}
      <h2>Big image:</h2>
      {images.length > 0 ? <img src={images[currentIndex].url} alt="foo" /> : ''}
    </div>
  );
}
