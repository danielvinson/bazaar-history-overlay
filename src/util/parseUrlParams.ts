export type Configuration = {
  name: string | null; // gamerTag
  useResultStyles: boolean;
  maxRuns: number;
};

export const parseUrlParams = (): Configuration => {
  const currentURL = window.location.href;
  const parsedURL = new URL(currentURL);
  const searchParams = new URLSearchParams(parsedURL.searchParams);

  const name = searchParams.get("name");
  const useResultStyles = searchParams.get("useResultStyles");
  const maxRuns = searchParams.get("maxRuns");

  return {
    name: name,
    useResultStyles: useResultStyles === "true" ? true : false,
    maxRuns: parseInt(maxRuns ?? "10"),
  };
};
