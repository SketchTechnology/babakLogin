import { useEffect } from 'react';
import '../../assets/Css/Animated.css' 
import $ from 'jquery';

const AnimatedCircles = () => {
    useEffect(() => {
        // Run the jQuery script when the component mounts
        $(".container-wrap").append(
          "<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
        );
      }, []); 
  return (
       <div className="container-wrap">
    </div>
  )
}

export default AnimatedCircles
