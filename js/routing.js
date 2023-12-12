// Importar el plugin Leaflet Routing Machine;
import LRoutingMachine from "leaflet-routing-machine";

// Crear el objeto de routing
const routingMachine = new LRoutingMachine(map);

// Asociar el botón al evento click
const button = document.querySelector("#routing-button");
button.addEventListener("click", () => {
  // Obtener la ubicación del usuario
  const userLocation = map.userLocation;

  // Obtener las coordenadas de origen y destino
  const startLat = userLocation.lat;
  const startLng = userLocation.lng;
  const endLat = -36.9068;
  const endLng = -72.91444;

  // Calcular la ruta
  routingMachine.plan({
    start: [startLat, startLng],
    end: [endLat, endLng],
    profile: "driving-car",
  });

  // Mostrar la ruta
  routingMachine.addTo(map);
});