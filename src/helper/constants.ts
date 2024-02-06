interface MathType {
  [key: string]: any;
  x: "*";
  e: number;
  π: number;
}

const MATH: MathType = {
  x: "*",
  e: Math.E,
  π: Math.PI,
};

export { MATH };
export type { MathType };
