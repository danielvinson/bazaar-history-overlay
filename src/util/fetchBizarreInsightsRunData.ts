import { BIData, BIResponse } from "../types";

export const fetchBizarreInsightsRunData = async (name: string) => {
  const res = await fetch(
    `https://api.allorigins.win/get?url=https://bizarre.gg/api/bizarre/runs/${name}/recent`
  );
  const parsedResponse: BIResponse = await res.json();
  const parsedContents: BIData = JSON.parse(parsedResponse.contents);
  return parsedContents;
};
