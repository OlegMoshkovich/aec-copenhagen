import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';

const Map = forwardRef((props, ref) => {
  const mapRef = useRef();
  const [activeMarker, setActiveMarker] = useState(null); // State to track the active marker
  // const toggleShowViewer = useStore((state) => state.toggleShowViewer);

  const goToLocation = (lat, lng, zoom=10) => {
    const map = mapRef.current.getMap();
    map.flyTo({
      // center: [12.5981, 55.6811],
      center: [lng, lat],
      zoom: 16, // You might adjust the zoom level based on your preference
      essential: true,
      duration: 6000,
    });
  };
   // Function to handle marker click event
  const onMarkerClick = (markerId) => {
    setActiveMarker(markerId); // Set the clicked marker as active
    // toggleShowViewer();
  };

  // Use useImperativeHandle to expose specific functions to the parent component
  useImperativeHandle(ref, () => ({
    goToLocation
  }));

  const markerStyle={
    width: '16px',
    height: '16px',
    borderRadius: '50%',
  }

  return (
    <MapGL
      ref={mapRef}
      initialViewState={{
        latitude: 55.6811, // Initial coordinates; you might want to set these to New York as well
        longitude: 12.5981,
        zoom: 7
      }}
      mapStyle="mapbox://styles/aechack2024/cltb88ibs00d201qsdm0cfzqd"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
        <Marker latitude={55.672278} longitude={12.5785}>
          <button onClick={() => onMarkerClick('marker1')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{
              ...markerStyle,
              backgroundColor: activeMarker === 'marker1' ? '#F2B138' : '#172DEF',
              border: activeMarker === 'marker1' ? '6px solid blue' : '1px solid #E9B352'
            }}></div>
          </button>
        </Marker>
        <Marker latitude={55.6273872} longitude={12.579409}>
          <button onClick={() => onMarkerClick('marker2')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{
              ...markerStyle,
              backgroundColor: activeMarker === 'marker2' ? '#F2B138' : '#172DEF',
              border: activeMarker === 'marker2' ? '6px solid blue' : '1px solid #E9B352'
            }}></div>
          </button>
        </Marker>
        <Marker latitude={55.7676765} longitude={12.4998316}>
          <button onClick={() => onMarkerClick('marker3')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{
              ...markerStyle,
              backgroundColor: activeMarker === 'marker3' ? '#F2B138' : '#172DEF',
              border: activeMarker === 'marker3' ? '6px solid blue' : '1px solid #E9B352'
            }}></div>
          </button>
        </Marker>
      </MapGL>
  )
});

export default Map;
