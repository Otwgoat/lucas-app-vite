import { useEffect, useMemo, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Minus, Plus } from "@phosphor-icons/react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const MapBento = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = useMemo(() => [1.45758, 45.27611], []); // Coordonnées fixes
  const customMarkerSizes = {
    width: "40px",
    height: "40px",
  };
  const customMarkerImgSize = {
    width: "35px",
    height: "35px",
  };
  useEffect(() => {
    // Initialiser la carte
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: center,
      zoom: 3,
      minZoom: 3,
      maxZoom: 13,
      dragPan: false,
      scrollZoom: true,
      doubleClickZoom: true,
      touchZoomRotate: false,
    });

    return () => map.current.remove();
  }, [center]);

  // Gestion du zoom
  const zoomIn = () => {
    const currentZoom = map.current.getZoom();
    if (currentZoom < 13) {
      map.current.zoomTo(currentZoom + 3, {
        duration: 500,
        easing: (t) => t * (2 - t),
      });
    }
  };

  const zoomOut = () => {
    const currentZoom = map.current.getZoom();
    if (currentZoom > 3) {
      map.current.zoomTo(currentZoom - 3, {
        duration: 500,
        easing: (t) => t * (2 - t), // Easing quadratique
      });
    }
  };

  return (
    <div className="bentoCase" id="mapBentoCase">
      <div id="customMarker" style={customMarkerSizes}>
        <img
          style={customMarkerImgSize}
          id="customMarkerImg"
          src="../public/images/iconemap.png"
          alt="map marker icon"
        />
      </div>
      <div
        id="mapContainer"
        ref={mapContainer}
        style={{ width: "245px", height: "210px" }}
      />
      <div className="zoomControls">
        <button id="zoomOut" onClick={zoomOut}>
          <Minus size={30} color="whitesmoke" weight="bold" />
        </button>
        <button id="zoomIn" onClick={zoomIn}>
          <Plus size={30} color="whitesmoke" weight="bold" />
        </button>
      </div>
    </div>
  );
};
