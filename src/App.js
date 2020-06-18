import React from 'react'
import './App.css'

import {wards2015} from './wards2015'

import Map from "./Map";

function App() {
	return (
		<div className="App">
			<Map data={wards2015} zoom={11} />
		</div>
	);
}

export default App
