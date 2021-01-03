import { LaunchDetail } from "./components/launch-detail/LaunchDetail";
import { Launch } from "./components/launches/Launch";
import { useState } from "react";

function App() {
  const [id, setid] = useState("23");

  const handleIdChange = (newId) => {
    setid(newId);
  };

  return (
    <div className="APP-CONTAINER: flex w-screen h-screen ">
      <Launch handleIdChange={handleIdChange} />
      <LaunchDetail id={id} />
    </div>
  );
}

export default App;