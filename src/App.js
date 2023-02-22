import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";

//importing AOS library for animation (first install it by $ npm i aos)
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// aos library initialising here
AOS.init({
  duration: 1000, // here 1000 is millisecond for animation, more value more duration of animation
});

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
