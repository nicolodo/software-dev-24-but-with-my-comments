export default function Game(props) {
  console.log(props);

//   if we want to run javascript inside our JSX, it must be wrapped in curley brakcets
  return (
    <div>
      <p>{5 + 5}</p>
      <p>{props.game}</p>
      <img src={props.img} alt="generic alt text" />
      <p>{props.description}</p>
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
export default function Game({game, img, description}) {
  return (
    <div>
      <p>{5 + 5}</p>
      <p>{game}</p>
      <img src={img} alt="generic alt text" />
      <p>{description}</p>
    </div>
  );
}