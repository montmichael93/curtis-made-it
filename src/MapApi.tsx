import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
export function MapApi() {
  const position = { lat: 32.768799, lng: -97.309341 };

  return (
    <APIProvider apiKey={"AIzaSyDGMg29nnv2aitjtvDvCHWwueAAzwzrYmk"}>
      <div className="map-api">
        <Map center={position} zoom={10} disableDefaultUI={true}>
          <Marker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}
