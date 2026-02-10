export default function CoolerButton() {
  function handleClick(name) {
    console.log(`Hello, ${name}`);
  }

  return (
    <div>
      <button onClick={() => handleClick("Sam")}>Cooler Button</button>
      <button onClick={function() {
        handleClick('Connor')
      }} />
    </div>
  );
}

// DONT DO THIS - we dont want to invoke the function ourselves

// <button onClick={handleClick('Sam')}>Cooler Button</button>
