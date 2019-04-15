import React, { Component } from 'react';
import Select from 'react-select';

import bmw from './assests/images/bmw-i8.jpg';
import audi from './assests/images/audi.jpeg';
import mercedi from './assests/images/mercy.jpg';
import jguare from './assests/images/jguare.jpg';
import lemborgini from './assests/images/lembo.jpg';

const MyCar = (props) => {
    const car = props.car;
    var mycar;
    switch (car) {
        case 'bmw':
            mycar = bmw;
            break;
        case 'audi':
            mycar = audi;
            break;
        case 'mercedi':
            mycar = mercedi;
            break;
        case 'jguare':
            mycar = jguare;
            break;
        case 'lemborgini':
            mycar = lemborgini;
            break;
        default :
            break;
    }
    return (
        <div className="dreamcar">
            <br/>
            <img src={mycar} width="500" height="300" />
            {console.log('Car=>', props.car)}
        </div>
    )
}


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const { selectedOption } = this.state;
        const options = [
            { value: 'bmw', label: 'BMW' },
            { value: 'audi', label: 'AUDI' },
            { value: 'mercedi', label: 'MERCEDI' },
            { value: 'jguare', label: 'JGUARE' },
            { value: 'lemborgini', label: 'LEMBORGINI' }
        ];
        return (
            <div>
                <h2>Test a drive with your dream car</h2>
                <i className="fa fa-car" style={{ "fontSize": "60px", "color": "red" }} />
                <Select
                    value={selectedOption}
                    onChange={(value) => this.handleChange(value)}
                    options={options}
                />
                {selectedOption !== null ? <MyCar car={selectedOption.value} /> : null}
            </div>
        );
    }
}

export default Test;