import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const Particle = ({ particleId, options }) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [particleId, options]);

  const particlesLoaded = async (container?: Container): Promise<void> => { };

  const particleOptions: ISourceOptions = useMemo(() => (options), [options],);

  if (init) {
    return (
      <Particles
        id={particleId}
        particlesLoaded={particlesLoaded}
        options={particleOptions}
      />
    );
  }

  return <></>;
};

export default Particle;