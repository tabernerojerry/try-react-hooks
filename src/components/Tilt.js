import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const tiltRoot = {
  width: "200px",
  height: "200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#eee"
};

const tiltChild = {
  margin: "20px",
  background: "#ccc",
  width: "150px",
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

function Tilt(props) {
  const tiltRef = useRef();

  // Use side effect
  useEffect(
    () => {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
      });

      // prevent memory leak
      // clean up function
      return () => tiltRef.current.vanillaTilt.destroy();
    },
    // optimize which only runs when component is mounted
    []
  );

  return (
    <div ref={tiltRef} style={tiltRoot}>
      <div style={tiltChild}>{props.children}</div>
    </div>
  );
}

export function Usage() {
  return (
    <Tilt>
      <div>Vanilla Tilt JS</div>
    </Tilt>
  );
}
