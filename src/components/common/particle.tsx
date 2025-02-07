import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

interface ParticleProps {
  particleId: string;
  options: ISourceOptions;
}

const Particle = ({ particleId, options }: ParticleProps) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [particleId, options]);

  const particleOptions: ISourceOptions = useMemo(() => (options), [options],);

  if (init) {
    return (
      <Particles
        id={particleId}
        options={particleOptions}
      />
    );
  }

  return <></>;
};

export default Particle;