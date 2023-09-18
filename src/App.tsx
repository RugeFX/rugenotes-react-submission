import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("ruge");
  return (
    <>
      <h1>Home</h1>
      <p>Hi!, {name}!</p>
    </>
  );
}

export default App;
