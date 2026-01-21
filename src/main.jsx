import { createRoot } from "react-dom/client";
import "./assets/css/global.css"
import Counter from "./components/Counter";

const el = document.getElementById("root");
const root = createRoot(el);

function Main() {
  return (
<div className="h-screen flex justify-center items-center">
    <Counter/>
</div>
  ) 
}
root.render(<Main />);