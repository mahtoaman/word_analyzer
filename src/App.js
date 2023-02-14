import React from "react";
import Navbar from "./components/Navbar.jsx"
import TextForm from "./components/TextForm.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <h1 class="text-center">Word Analyzer</h1>

      <TextForm />
    </div>
  );
}

export default App;
