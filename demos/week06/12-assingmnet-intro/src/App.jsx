export default function App() {
  // a state variable to store my images in
  // images/setImages


  // a state variable to keep track of what index of the images we're on
  // currentIndex / setCurrentIndex
  // start off at zero.

  // 1. We need to get out images -> we'll use fetch. Wrap the fetch in a useEffect.
  // 2. We'll want to fetch data inside a useEffect so that it only fetched once
  async function fetchData() {
    const res = await fetch(`blah`)
    const data = await res.json()
    setImages(data)
  }

  function handleThumbnailClick(index) {
    // handleThumbnailclick updates the current index state variable - triggers a re-render
    setCurrentIndex(index)
  }

  return (
    <div>
      {/* 3. map through images */}
      {images.map((image, index) => {return (
        // 4 add event listenr to thumbnails - we pass in the index of the image that was clikced on to handleThumbnailClick
        <p onClick={() => handleThumbnailClick(index)}>whatever you want</p>
      )})}
        {/* this will re-render and display with the correct new big image because currentIndex was changed */}
      <img src={images[currentIndex]} alt="" />
    </div>
  )
}