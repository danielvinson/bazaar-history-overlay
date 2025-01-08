import vanessa from "../assets/bazaar-avatar-vanessa.jpg";
import dooley from "../assets/bazaar-avatar-dooley.jpg";
import pygmalien from "../assets/bazaar-avatar-pygmalien.jpg";

type Props = {
  heroName: string;
};

export const HeroIcon = ({ heroName }: Props) => {
  const getHeroImage = () => {
    switch (heroName) {
      case "vanessa":
        return vanessa;
      case "dooley":
        return dooley;
      case "pygmalien":
        return pygmalien;
      default:
        return vanessa;
    }
  };

  return (
    <img
      src={getHeroImage()}
      alt={heroName}
      style={{
        width: "40px",
        height: "40px",
        //borderRadius: "15px 20px 15px 20px",
        margin: "3px",
        //boxShadow: "0px 0px 2px -1px rgb(255,255,255)",
        //border: "1px solid rgba(255,255,255,0.1)"
      }}
    />
  );
};
