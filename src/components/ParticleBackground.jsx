import React, { useCallback } from "react"; 
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function ParticleBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, [])
  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  });

return(
  <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        background: {
          color: {
            value: "black",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
                enable: true,
                mode: "repulse",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
            },
            modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 100,
                duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#F45B69",
          },
          links: {
            color: "#F45B69",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "lines",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
    }}
  />

)}

export default ParticleBackground;