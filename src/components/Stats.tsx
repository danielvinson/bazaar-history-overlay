import { BIData, BIRun, Hero } from "../types";
import { colors } from "../util/colors";
import { Row } from "./Row";

const styles: Record<string, React.CSSProperties> = {
  statsContainer: {
    maxWidth: "235px",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    backgroundColor: "black",
    border: "1px solid white",
    boxShadow: "1px 1px 2px 0px rgba(0,0,0,0.3)",
    borderRadius: "5px",
    background:
      "linear-gradient(0deg, rgba(25,25,25,1), rgba(40,40,40,1), rgba(25,25,25,1))",
    color: "rgba(255,255,255,1)",
  },
  mainHeading: {
    fontWeight: "600",
    fontSize: "0.7em",
    color: colors.lightGold,
    padding: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tableRowTitle: {
    fontWeight: "600",
    fontSize: "0.7em",
    color: colors.lightGold,
  },
  tableHeading: {
    fontWeight: "600",
    fontSize: "0.7em",
    color: colors.lightGold,
  },
  tableBody: {
    fontSize: "0.7em",
    color: colors.lightGold,
  },
};

type Props = {
  readonly runData: BIData | null;
};

export const Stats = ({ runData }: Props) => {
  if (runData === null) {
    return <div>Loading...</div>;
  }

  const getAverageWins = (runs: BIData) => {
    if (runs.length === 0) {
      return "No Runs";
    }
    return (
      runs.map((run) => run.run.state.victories).reduce((a, b) => a + b) /
      runs.length
    ).toFixed(1);
  };

  const getRunsByHero = (runs: BIData, hero: Hero) =>
    runs.filter((run) => run.run.state.hero === hero);

  const rankedRuns = runData?.filter(
    (run) => run.run.state.playMode === "Ranked"
  );
  const normalRuns = runData?.filter(
    (run) => run.run.state.playMode === "Unranked"
  );

  return (
    <div style={styles.statsContainer}>
      <div style={styles.mainHeading}>Average wins (last 10 runs)</div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th style={styles.tableHeading}>Overall</th>
            <th style={styles.tableHeading}>Ranked</th>
            <th style={styles.tableHeading}>Normal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.tableRowTitle}>Total</td>
            <td style={styles.tableBody}>{getAverageWins(runData)}</td>
            <td style={styles.tableBody}>{getAverageWins(rankedRuns)}</td>
            <td style={styles.tableBody}>{getAverageWins(normalRuns)}</td>
          </tr>
          <tr>
            <td style={styles.tableRowTitle}>Pygmalien</td>
            <td style={styles.tableBody}>
              {getAverageWins(getRunsByHero(runData, "pygmalien"))}
            </td>
            <td style={styles.tableBody}>
              {getAverageWins(getRunsByHero(rankedRuns, "pygmalien"))}
            </td>
            <td style={styles.tableBody}>
              {getAverageWins(getRunsByHero(normalRuns, "pygmalien"))}
            </td>
          </tr>
          <tr>
            <td style={styles.tableRowTitle}>Vanessa</td>
            <td style={styles.tableBody}>
              {getAverageWins(getRunsByHero(runData, "vanessa"))}
            </td>
            <td style={styles.tableBody}>
              {getAverageWins(getRunsByHero(rankedRuns, "vanessa"))}
            </td>
            <td style={styles.tableBody}>
              {getAverageWins(getRunsByHero(normalRuns, "vanessa"))}
            </td>
          </tr>
          <tr>
            <td style={styles.tableRowTitle}>Dooley</td>
            <td style={styles.tableBody}>
              {getAverageWins(getRunsByHero(runData, "dooley"))}
            </td>
            <td style={styles.tableBody}>
              {getAverageWins(getRunsByHero(rankedRuns, "dooley"))}
            </td>
            <td style={styles.tableBody}>
              {getAverageWins(getRunsByHero(normalRuns, "dooley"))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
