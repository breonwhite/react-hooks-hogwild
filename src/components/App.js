import React from "react";
import Nav from "./Nav";
import TileGroup from "./TileGroup";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<div className="nav">
				<Nav />
			</div>
			<div>
				<TileGroup hogs={hogs} />
			</div>
		</div>
	);
}

export default App;
