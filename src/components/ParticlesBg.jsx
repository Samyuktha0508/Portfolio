import Particles from "react-tsparticles";

const ParticlesBg = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#a855f7" }
        }
      }}
    />
  );
};

export default ParticlesBg;