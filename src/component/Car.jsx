import React, { Component } from 'react';

import Img1 from '../assests/images/bmw-i8.jpg';
import Img2 from '../assests/images/bmw-i8dm.jpg';
import Img3 from '../assests/images/baby.gif';
import ImgSvg from '../assests/images/svgcar.svg';

class Car extends Component {
    render() {
        return (
            <div>
                <h2>BMW i8</h2>
                <img src={Img1} width="500" height="300"/>
                <img src={Img2} width="500" height="300"/>
                <img src={Img3} width="500" height="300"/>
                <img src={ImgSvg} width="500" height="300"/>
            </div>
        );
    }
}

export default Car;