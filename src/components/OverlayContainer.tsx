import React, { useEffect, useState } from "react";
import { Configuration, parseUrlParams } from "../util/parseUrlParams";
import { fetchBizarreInsightsRunData } from "../util/fetchBizarreInsightsRunData";
import { BIData } from "../types";
import { Run } from "./Run";
import { Stats } from "./Stats";

export const OverlayContainer = () => {
  const [data, setData] = useState<BIData | null>(null);
  const [appConfiguration, setAppConfiguration] = useState<Configuration>({
    name: null,
    useResultStyles: true,
    maxRuns: 10,
    showRunStats: true,
  });

  useEffect(() => {
    const configuration = parseUrlParams();
    const { name } = configuration;

    if (name == null) {
      return;
    }

    setAppConfiguration(configuration);

    if (data !== null) {
      return;
    }

    const getBIData = async () => {
      const data = await fetchBizarreInsightsRunData(name);
      setData(data);
    };

    getBIData();
  }, [data]);

  return (
    <div
      style={{
        width: 235,
        height: 800,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stats runData={data} />
      <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <div>
          {data?.slice(0, appConfiguration.maxRuns).map((run, index) => (
            <Run
              runData={run}
              useResultStyles={appConfiguration.useResultStyles}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
