import React, { useState } from "react";
import TileDetails from "./TileDetails";

function Tiles({ hog }) {
    const { name, image } = hog;
    const [isHidden, setIsHidden] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    function handleClick() {
        setShowDetails((prevShowDetails) => !prevShowDetails);
    }
    
    if (isHidden) return null;
    
    return (
        <div className="pigTile">
            <div className="image">
                <img src={image} alt={name} height={200} width={200} onClick={handleClick}/>
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
            </div>
            <div className="details">
            {showDetails ? <TileDetails hog={hog} /> : null}
            </div>
        </div>
    )
}

export default Tiles;