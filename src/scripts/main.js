import "../styles/styles.css";
// Add imports here
import "@picocss/pico/css/pico.min.css"; 
import Aos from "aos";
import "aos/dist/aos.css";
import 'simple-lightbox/dist/simple-lightbox.min.css';
console.log("What?");
console.log("Hello world, from main.js!");
if (typeof window !== "undefined") {
  // Put code that runs ONLY in the browser here -- this is most likely where
  // MOST of your code should go.
  //
  Aos.init()
  //picocss.init()
  // If you see a SSR error, try moving your code here!
  console.log("Hello world, browser :-)");
} console.log ("Hello world, from Main.js!");

 