import gold from "../assets/icon-gold-win-small.png";
import perfect from "../assets/icon-perfect-win-small.png";
import silver from "../assets/icon-silver-win-small.png";
import bronze from "../assets/icon-bronze-win-small.png";

const ICON_SIZE = "40px";

type Props = {
  result: "perfect" | "gold" | "silver" | "bronze" | "loss";
};

const Placeholder = () => (
  <div
    style={{
      width: ICON_SIZE,
      height: ICON_SIZE,
      marginTop: "5px",
      marginBottom: "5px",
    }}
  />
);

export const ResultIcon = ({ result }: Props) => {
  if (result === "loss") {
    return <Placeholder />;
  }

  const getResultImage = () => {
    switch (result) {
      case "perfect":
        return perfect;
      case "gold":
        return gold;
      case "silver":
        return silver;
      case "bronze":
        return bronze;
    }
  };

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        marginTop: "5px",
        marginBottom: "5px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: ICON_SIZE,
          height: ICON_SIZE,
          borderRadius: "20px",
          boxShadow: "inset 0px 0px 3px 1px rgb(150,150,150, 0.9)",
        }}
      />
      <img
        src={getResultImage()}
        alt={result}
        style={{
          width: ICON_SIZE,
          height: ICON_SIZE,
          borderRadius: "20px",
          zIndex: -1,
          boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
};
