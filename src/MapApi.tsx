import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import Branding from "../public/branding.jpg";

export const MapApi = () => {
  const position = { lat: 29.760427, lng: -95.369804 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.MAP_KEY!}>
      <div
        style={{
          height: "500px",
        }}
      >
        <Map zoom={10} center={position} mapId={"4f4da17c72a0c4f3"}>
          <AdvancedMarker
            position={position}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Pin background={"gray"} borderColor={"navy"} glyphColor={"navy"} />
          </AdvancedMarker>
          {open && (
            <InfoWindow
              position={position}
              onCloseClick={() => {
                setOpen(false);
              }}
            >
              <img src={Branding} />
              <p>Send Me A Message</p>
              <p>Let's Build It Together</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};
