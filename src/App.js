import React from 'react'
import './App.css'

import Map from "./Map";

function App() {
	return (
		<div className="App">
			<Map
				markers={[{
					title: 'The Loop',
					coordinates: [
						41.88203,
						-87.62780,
					]
				}]}
			/>
		</div>
	);
}

export default App
