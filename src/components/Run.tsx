import { BIRun } from "../types";
import { colors } from "../util/colors";
import { HeroIcon } from "./HeroIcon";
import { ResultIcon } from "./ResultIcon";

type Props = {
  runData: BIRun;
  useResultStyles: boolean;
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    marginBottom: "3px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    paddingLeft: "5px",
    paddingRight: "5px",
    boxShadow: "1px 1px 2px 0px rgba(0,0,0,0.3)",
    borderRadius: "5px",
    background:
      "linear-gradient(0deg, rgba(25,25,25,1), rgba(40,40,40,1), rgba(25,25,25,1))",
    color: "rgba(255,255,255,1)",
  },
  headerFont: {
    color: colors.lightGold,
    textShadow: "0px 0px 2px rgba(0,0,0,1)",
    fontFamily: "Bebas Neue",
    fontSize: "0.8em",
    fontWeight: "400",
  },
  bodyFont: {
    color: colors.lightGold,
    textShadow: "0px 0px 2px rgba(0,0,0,1)",
    fontFamily: "Dosis",
    fontSize: "0.9em",
    fontWeight: "400",
  },
  winsFont: {
    fontSize: "1.8em",
    fontWeight: "600",
    fontFamily: "Bebas Neue",
    textShadow: "0px 0px 2px rgba(0,0,0,1)",
    width: "0.9em",
    textAlign: "right",
    color: colors.darkGold,
  },
  perfect: {
    // silver/purple
    background: `linear-gradient(90deg, ${colors.bannerDarkPurple}, ${colors.bannerLightPurple})`,
    border: `2px solid ${colors.diamond}`,
  },
  gold: {
    // gold/blue
    background: `linear-gradient(90deg, ${colors.bannerDarkBlue}, ${colors.bannerLightBlue})`,
    border: `2px solid ${colors.goldBorder}`,
  },
  silver: {
    // silver/orange
    background: `linear-gradient(90deg, ${colors.bannerDarkOrange}, ${colors.bannerLightOrange})`,
    border: `2px solid ${colors.silver}`,
  },
  bronze: {
    // bronze/green
    background: `linear-gradient(90deg, ${colors.bannerDarkGreen}, ${colors.bannerLightGreen})`,
    border: `2px solid ${colors.bronze}`,
  },
  loss: {
    // ?
    background: `linear-gradient(90deg, ${colors.bannerDarkBrown}, ${colors.bannerLightBrown})`,
    border: `2px solid ${colors.blueBorder}`,
  },
};

export const Run = ({ runData, useResultStyles }: Props) => {
  const numberOfVictories = runData.run.state.victories;
  const numberOfDefeats = runData.run.state.defeats;
  const isPerfectVictory = numberOfVictories === 10 && numberOfDefeats === 0;
  const isGoldVictory = numberOfVictories === 10 && numberOfDefeats >= 1;
  const isSilverVictory = numberOfVictories < 10 && numberOfVictories >= 7;
  const isBronzeVictory = numberOfVictories >= 4 && numberOfVictories < 7;

  const getContainerStyle = () => {
    if (!useResultStyles) return {};
    if (isPerfectVictory) return styles.perfect;
    if (isGoldVictory) return styles.gold;
    if (isSilverVictory) return styles.silver;
    if (isBronzeVictory) return styles.bronze;
    return styles.loss;
  };

  const getRunResultString = () => {
    if (isPerfectVictory) return "perfect";
    if (isGoldVictory) return "gold";
    if (isSilverVictory) return "silver";
    if (isBronzeVictory) return "bronze";
    return "loss";
  };

  return (
    <div
      style={{
        ...styles.container,
        ...getContainerStyle(),
      }}
    >
      <ResultIcon result={getRunResultString()} />
      <div style={styles.winsFont}>{runData.run.state.victories}</div>
      <div style={{ ...styles.headerFont, paddingTop: "10px" }}>W</div>
      <div style={styles.winsFont}>{runData.run.state.defeats}</div>
      <div style={{ ...styles.headerFont, paddingTop: "10px" }}>L</div>
      <div style={{ marginLeft: "15px" }} />
      <div style={styles.bodyFont}>
        {runData.run.state.playMode === "Ranked" ? "Ranked" : "Normal"}
      </div>
      <div style={{ marginLeft: "10px" }} />
      <HeroIcon heroName={runData.run.state.hero} />
    </div>
  );
};
