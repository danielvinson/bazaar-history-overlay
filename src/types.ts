export type BIResponse = {
  contents: string;
  status: object;
};

export type Hero = "vanessa" | "pygmalien" | "dooley";
export type PlayMode = "Unranked" | "Ranked";

export type BIRun = {
  runId: string;
  gamerTag: string;
  createdAt: string;
  run: {
    day: number;
    hour: number;
    runId: string;
    state: {
      hero: Hero;
      playMode: PlayMode;
      gameModeId: string;
      victories: number;
      defeats: number;
      unlockedSlots: number;
      attributes: {
        gold: number;
        experience: number;
        health: number;
        healthMax: number;
        healthRegen: number;
        income: number;
        level: number;
      };
      skills: object;
      stash: object;
    };
  };
};

export type BIData = BIRun[];
