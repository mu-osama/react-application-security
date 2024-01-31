import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h2>Security of React Application</h2>
      <ul>
        <li>
          <Link to="/input-url">Input URL | Anchor Tag</Link>
        </li>
        <li>
          <Link to="/inner-html">Dangerously Set innerHTML</Link>
        </li>
        <li>
          <Link to="/iframe">iFrame Protection</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
