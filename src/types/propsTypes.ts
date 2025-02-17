import React from "react";

export type ICounterProps =  {
  count: number;
  setCount: (count: number) => void;
  children?: React.ReactNode;
}
