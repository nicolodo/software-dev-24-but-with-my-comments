
export default function Game({game, img, description}) {
  return (
    <div>
      <p>{5 + 5}</p>
      <p>{game}</p>
      <img className="w-[250px]" src={img} alt="generic alt text" />
      <p>{description}</p>
    </div>
  );
}

// PROPS are *ALWAYS* passed as objects
/*
{
    game: 'Eldren Ring',
    img: 'something',
    description: 'Eldren ring description'
}

*/


// DONT PASTE BOTH "GAMES" 

// This is called de-structuring. Add in an exprea pair of {}'s/ 
// it's a native part of JS, not unique to react!