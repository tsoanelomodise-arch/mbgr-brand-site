import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
}

interface Office {
  name: string;
  position: { lat: number; lng: number };
  address: string;
  territory: string;
  color: string;
}

const offices: Office[] = [
  {
    name: "Johannesburg Head Office",
    position: { lat: -26.2041, lng: 28.0473 },
    address: "Johannesburg, Gauteng, South Africa",
    territory: "South Africa",
    color: "hsl(41, 54%, 61%)",
  },
  {
    name: "Cape Town Office",
    position: { lat: -33.9249, lng: 18.4241 },
    address: "Cape Town, Western Cape, South Africa",
    territory: "South Africa",
    color: "hsl(41, 54%, 61%)",
  },
  {
    name: "Durban Office",
    position: { lat: -29.8587, lng: 31.0218 },
    address: "Durban, KwaZulu-Natal, South Africa",
    territory: "South Africa",
    color: "hsl(41, 54%, 61%)",
  },
  {
    name: "Windhoek Office",
    position: { lat: -22.5609, lng: 17.0658 },
    address: "Windhoek, Namibia",
    territory: "Namibia",
    color: "hsl(41, 54%, 71%)",
  },
  {
    name: "Gaborone Office",
    position: { lat: -24.6282, lng: 25.9232 },
    address: "Gaborone, Botswana",
    territory: "Botswana",
    color: "hsl(41, 54%, 51%)",
  },
];

export const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initMap();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBok5Lep0qeiye47t2V0jB0ilOfFMDQODI`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current) return;

      // Create map centered on Southern Africa
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -26, lng: 24 },
        zoom: 5,
      });

      googleMapRef.current = map;

      // Add markers for each office
      offices.forEach((office) => {
        const marker = new google.maps.Marker({
          position: office.position,
          map: map,
          title: office.name,
          animation: google.maps.Animation.DROP,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; font-family: system-ui; max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">
                ${office.name}
              </h3>
              <p style="margin: 0 0 4px 0; font-size: 13px; color: #666;">
                <strong>Territory:</strong> ${office.territory}
              </p>
              <p style="margin: 0; font-size: 13px; color: #666;">
                <strong>Location:</strong> ${office.address}
              </p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-full min-h-[600px] rounded-lg"
      style={{ background: "#e5e3df" }}
    />
  );
};
