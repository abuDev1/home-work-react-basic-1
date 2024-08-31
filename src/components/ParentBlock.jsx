import React from "react";
import { Small } from "./Small";
import { Large } from "./Large";

export const ParentBlock = () => {
  const x = 99;

  <div>{x < 50 ? <Small /> : <Large />}</div>;
};
