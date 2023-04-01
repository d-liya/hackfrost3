import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoicmFzaG9kayIsImEiOiJja3djbWVqNHczNTM4MnZtbmM4OHJwenk4In0.csbBPnsn9vOpoPNvFxA0kg";
const Maps = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [-52.710553, 47.565552], //, -52.710553
      zoom: 15.4,
    });
    // This code adds a 3D building layer to the map

    map.on("style.load", () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find((layer) => layer.type === "symbol" && layer.layout["text-field"]).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 13,
          paint: {
            "fill-extrusion-color": "#aaa",

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            "fill-extrusion-height": ["interpolate", ["linear"], ["zoom"], 11, 0, 15.05, ["get", "height"]],
            "fill-extrusion-base": ["interpolate", ["linear"], ["zoom"], 2, 0, 15.05, ["get", "min_height"]],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );
    });
    markers(map, [-52.710553, 47.565552], 1);
    markers(map, [-52.750553, 47.535552], 2);
    markers(map, [-52.720553, 47.575552], 3);
    // movingpoint(map);
    movingpointline(map, [-52.710553, 47.565552], [-52.750553, 47.535552], 2900, 1);
    movingpointline(map, [-52.750553, 47.535552], [-52.720553, 47.575552], 2500, 2);
    movingpointline(map, [-52.720553, 47.575552], [-52.710553, 47.565552], 3000, 3);
    //add point whic move from one point to another point with animation effect

    return () => map.remove();
  }, []);

  function markers(map, coordinate, num) {
    const size = 100;
    const pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

      // When the layer is added to the map,
      // get the rendering context for the map canvas.
      onAdd: function () {
        const canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext("2d");
      },

      // Call once before every frame where the icon will be used.
      render: function () {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = this.context;

        // Draw the outer circle.
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
        context.fill();

        // Draw the inner circle.
        context.beginPath();
        context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(255, 100, 100, 1)";
        context.strokeStyle = "white";
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // Update this image's data with data from the canvas.
        this.data = context.getImageData(0, 0, this.width, this.height).data;

        // Continuously repaint the map, resulting
        // in the smooth animation of the dot.
        map.triggerRepaint();

        // Return `true` to let the map know that the image was updated.
        return true;
      },
    };

    map.on("load", () => {
      // Add the third coordinate
      map.addImage(`pulsing-dot-${num}`, pulsingDot, { pixelRatio: 2 });
      map.addSource(`dot-point-${num}`, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate, // icon position [lng, lat]
              },
            },
          ],
        },
      });

      map.addLayer({
        id: `layer-with-pulsing-dot-${num}`,
        type: "symbol",
        source: `dot-point-${num}`,
        layout: {
          "icon-image": `pulsing-dot-${num}`,
        },
      });
    });
  }

  function movingpoint(map) {
    const start = [-52.714861, 47.565382]; // Start point
    const end = [-52.7044781, 47.568621]; // End point
    const duration = 5000; // Duration of animation in milliseconds

    //make the line curved with bezier curve

    function pointOnLine(start, end, elapsed, forward) {
      const duration = 1000; // duration of the animation in milliseconds
      const centerX = (start[0] + end[0]) / 2; // x-coordinate of the center of the circle
      const centerY = (start[1] + end[1]) / 2; // y-coordinate of the center of the circle
      const radius = Math.sqrt(Math.pow(end[0] - centerX, 2) + Math.pow(end[1] - centerY, 2)); // radius of the circle

      let t = (elapsed % duration) / duration; // Calculate the percentage of the distance between the points based on the elapsed time
      if (!forward) {
        t = 1 - t; // Reverse the direction of the animation
      }

      const angle = t * 2 * Math.PI; // Calculate the angle of the point on the circle
      const lon = centerX + radius * Math.cos(angle); // Calculate the longitude of the point on the circle
      const lat = centerY + radius * Math.sin(angle); // Calculate the latitude of the point on the circle

      return {
        type: "Point",
        coordinates: [lon, lat],
      };
    }

    map.on("load", () => {
      // Add a source and layer displaying a point which will be animated along a line.
      map.addSource("point", {
        type: "geojson",
        data: pointOnLine(start, end, 0, true),
      });

      map.addLayer({
        id: "point",
        source: "point",
        type: "circle",
        paint: {
          "circle-radius": 13,
          "circle-color": "#007cbf",
        },
      });

      let forward = true; // Initialize the direction of the animation to forward

      function animateMarker(timestamp, startTime) {
        const elapsed = timestamp - startTime;
        // Update the data to a new position based on the elapsed time, the start and end points, and the direction of the animation.
        map.getSource("point").setData(pointOnLine(start, end, elapsed, forward));

        if (elapsed > duration) {
          // Reverse the direction of the animation when it reaches the end of the path
          forward = !forward;
          startTime = timestamp;
        }
        // Request the next frame of the animation.
        requestAnimationFrame((t) => animateMarker(t, startTime));
      }

      // Start the animation.
      animateMarker(0, performance.now());
    });
  }

  function movingpointline(map, startcoord, endcoord, durat, num) {
    const start = startcoord; // Start point
    const end = endcoord; // End point
    const duration = durat; // Duration of animation in milliseconds

    function pointOnLine(start, end, elapsed, forward) {
      let t = (elapsed % duration) / duration; // Calculate the percentage of the distance between the points based on the elapsed time
      if (!forward) {
        t = 1 - t; // Reverse the direction of the animation
      }
      const lon = start[0] + (end[0] - start[0]) * t;
      const lat = start[1] + (end[1] - start[1]) * t;
      return {
        type: "Point",
        coordinates: [lon, lat],
      };
    }

    map.on("load", () => {
      // Add a source and layer displaying a point which will be animated along a line.
      map.addSource(`point${num}`, {
        type: "geojson",
        data: pointOnLine(start, end, 0, true),
      });

      map.addLayer({
        id: `point${num}`,
        source: `point${num}`,
        type: "circle",
        paint: {
          "circle-radius": 5,
          "circle-color": "#007cbf",
        },
      });

      let forward = true; // Initialize the direction of the animation to forward

      function animateMarker(timestamp, startTime) {
        const elapsed = timestamp - startTime;
        // Update the data to a new position based on the elapsed time, the start and end points, and the direction of the animation.
        map.getSource(`point${num}`).setData(pointOnLine(start, end, elapsed, forward));

        if (elapsed > duration) {
          // Reverse the direction of the animation when it reaches the end of the path
          forward = !forward;
          startTime = timestamp;
        }
        // Request the next frame of the animation.
        requestAnimationFrame((t) => animateMarker(t, startTime));
      }

      // Start the animation.
      animateMarker(0, performance.now());
    });
  }
  return <div ref={mapContainerRef} className="h-[70vh]" />;
};

export default Maps;
