import { ShapeConfig } from "konva/lib/Shape";
import { RequireProperty } from "./common";

export type StrictShapeConfig = RequireProperty<ShapeConfig, "id">;
