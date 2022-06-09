import React from "react";
import Tiles from "./Tiles";

function TileGroup({ hogs }) {
  return (
		<div>
			{hogs.map(hog => (
				<Tiles
					key={hog.name}
					hog={hog}
				/>
			))}
		</div>
  );
}

export default TileGroup;
