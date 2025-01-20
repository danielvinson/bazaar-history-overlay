import { ReactNode } from "react";

type Props = {
  readonly children: ReactNode;
};

export const Row = ({ children }: Props) => (
  <div style={{ display: "flex", flexDirection: "row" }}>{children}</div>
);
