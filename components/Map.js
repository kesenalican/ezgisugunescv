import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const Map = () => {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/@37.0346032,37.3276048,15z?entry=ttu"
                width="100%" height="100%" />
        </div>
    )
}

export default Map