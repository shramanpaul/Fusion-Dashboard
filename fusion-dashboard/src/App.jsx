// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="" alt="React logo" />
//         </a>
//         <p className="text-3xl">hello</p>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Hello, Tailwind CSS!</h1>
        <p className="text-gray-700 bg-red-50">
          This is a sample application to test Tailwind CSS setup.
        </p>
      </div>
    </div>
  );
}

export default App;
