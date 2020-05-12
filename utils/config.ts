export type Config = {
  url: string;
  title: string;
  description: string;
  language: string;
};

export const getConfig = async (): Promise<Config> => {
  const config = await import(`config.json`);
  return config.default;
};
