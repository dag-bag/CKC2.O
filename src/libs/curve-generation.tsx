type Curve = {
  end: { x: number; y: number };
  start: { x: number; y: number };
  controlPoint1: { x: number; y: number };
  controlPoint2: { x: number; y: number };
};

export const responsiveCurveGeneration = (w: number) => {
  const curveOneThirdArea = w / 3;

  const curvesPoints = [
    curveOneThirdArea,
    curveOneThirdArea * 2,
    curveOneThirdArea * 3,
  ];

  const curveFromToPoints = curvesPoints.map((curvePoint) => [
    curvePoint < curveOneThirdArea ? 0 : curvePoint - curveOneThirdArea,
    curvePoint,
  ]);

  const object = curveFromToPoints.map(([sx, ex]) => {
    const cp1x = sx + (ex - sx) * (1 / 5); // Formula for the first control point's x-coordinate
    const cp2x = sx + (ex - sx) * (2 / 5); // Formula for the second control point's x-coordinate
    return {
      end: { x: ex, y: 50 },
      start: { x: sx, y: 50 },
      controlPoint1: { x: cp1x, y: 0 },
      controlPoint2: { x: cp2x, y: 300 },
    };
  });
  return generateConnectedCurvePath(object);
};

const generateConnectedCurvePath = (curves: Curve[]) => {
  const curveDimention = curves
    .map(
      ({ controlPoint1, controlPoint2, end }) =>
        `C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${end.x} ${end.y}`
    )
    .join(" ");

  const connectedCurvePath = `M${curves[0].start.x} ${curves[0].start.y} ${curveDimention}`;

  return connectedCurvePath;
};
