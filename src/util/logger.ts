import debug from "debug";

export const trace = (namespace: string) => debug(`dnsprove:trace:${namespace}`);
export const info = (namespace: string) => debug(`dnsprove:info:${namespace}`);
export const error = (namespace: string) => debug(`dnsprove:error:${namespace}`);

export const getLogger = (namespace: string) => ({
  trace: trace(namespace),
  info: info(namespace),
  error: error(namespace)
});
