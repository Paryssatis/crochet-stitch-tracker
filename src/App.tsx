import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [stitchesPerRow, setStitchesPerRow] = useState<number[]>([]); // generics (research)

  function increment() {
    setCount(() => count + 1);
  }

  function save() {
    const newStitchesPerRow = [...stitchesPerRow, count];
    setStitchesPerRow(newStitchesPerRow);
    setCount(0);
  }

  function reset() {
    if (confirm("Are you sure?")) {
      setStitchesPerRow([]);
      setCount(0);
    }
  }

  return (
    <>
      <h1 className="m-5 text-4xl">Crochet Stitch Counter</h1>
      <div className="flex flex-col justify-center items-center text-center min-w-[25rem] h-screen">
        <div className="w-72 h-96 p-4 items-center bg-slate-50/60 shadow-md rounded-md backdrop-blur">
          <div className="my-2.5 text-2xl">Stitches entered:</div>
          <div className="my-5 text-6xl">{count}</div>
          <button
            className="bg-violet-500 hover:bg-violet-600 border-0 py-2.5 text-white bold w-52 mb-1 rounded-md"
            onClick={increment}
          >
            STITCH
          </button>
          <button
            className="bg-teal-500 hover:bg-teal-600 border-0 py-2.5 text-white bold w-52 mb-1 rounded-md"
            onClick={save}
          >
            NEXT ROW
          </button>
          <button
            className="bg-neutral-500 hover:bg-neutral-600 border-0 py-2.5 text-white bold w-52 mb-1 rounded-md"
            onClick={reset}
          >
            CLEAR ENTRIES
          </button>
          <p className="mt-2.5">Stitches Finished per Row:</p>
          <div>{stitchesPerRow.join(", ")}</div>
        </div>
      </div>
    </>
  );
}

export default App;
