import React from 'react'

function TileDetails({ hog }) {
    const { specialty, greased, weight, "highest medal achieved": medal } = hog
    const isGreased = () => {
        if (greased == true) {
            return "Yes"
        }
        if (greased == false) {
            return "No"
        }
    }

    return (
        <div className="description">
            <strong>Specialty:</strong> {specialty} <br/>
            <strong>Weight:</strong> {weight} <br/>
            <strong>Greased:</strong> {isGreased(hog)} <br/>
            <strong>Highest Medal Achieved:</strong> {medal} <br/>
        </div>
    )
}

export default TileDetails;