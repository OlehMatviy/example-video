enum ETargetZone {
  Calories = "TargetZone.Calories",
  Proteins = "TargetZone.Proteins",
  Fluids = "TargetZone.Fluids",
  Carbs = "TargetZone.Carbs",
  Fats = "TargetZone.Fats",
  TargetZone = "TargetZone",
}

interface ITargetZoneRes {
  title: ETargetZone;
  min: number;
  max: number;
  current: number;
}

interface ITargetZone extends ITargetZoneRes {
  id: number;
  name: string;
}

export type { ITargetZone, ITargetZoneRes };

export { ETargetZone };
