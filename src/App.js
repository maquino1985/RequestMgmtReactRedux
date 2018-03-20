import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// PSEUDO CODE!
const state = {
    measurementTypes: [
        {
            id: 1,
            label: 'Enodotoxin Measurement',
            attributes: [
                measurementAttributes[0],
            ],
        }
    ],

    measurementAttributes: [
        {
            id: 1,
            parentMeasurementType: measurementTypes[0],
            label: 'Endotoxin Level Value',
            selected: true,
        }
    ],

    requests: [
        {
            id: measurementType.id,
            measurementAttributes: measurementType.attributes.filter( attr => {return attr.selected == true}),
            measurementType: measurementType.label
        }
    ],

    associatedEntities: {
       ids: ['ppb-123', 'ppb-456']
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
