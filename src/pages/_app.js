import React from 'react'
import AOS from 'aos'
import Layout from '../components/Layout'
import objectFitImages from 'object-fit-images'
import 'aos/dist/aos.css'
import '../fonts/stylesheet.css'
import '../scss/style.default.scss'


const App = ({ Component, pageProps }) => {
  function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var version = false;

    if (msie > 0) {
      // IE 10 or older => return version number
      version = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      version = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    if (version !== false && version <= 11) {

      if(window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
      }
      if(window.HTMLCollection && !HTMLCollection.prototype.forEach) {
        HTMLCollection.prototype.forEach = Array.prototype.forEach;
      }
      
      return true;
    } else {
      return false;
    }

  }
  objectFitImages();
  React.useEffect(() => {
    AOS.init({
      disable: detectIE(), // dont' run in IEs as it's really slow
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      offset: 120, // offset (in px) from the original trigger point
      delay: 150, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
    AOS.refresh();
  });
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
};


export default App;