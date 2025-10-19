import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

const numericalId = int().primaryKey({ autoIncrement: true });

export const workoutsTable = sqliteTable("workouts", {
  id: numericalId,
});

export const exercisesTable = sqliteTable("exercises", {
  id: numericalId,
  name: text().notNull(),
  notes: text(),
  movement_id: int().references(() => movementsTable.id),
  load_type: text().notNull(), // TODO: Change to ENUM (barbell, dumbell, body weight, machine)
  weight: real(),
  weight_unit: text().notNull(), // TODO: Change to ENUM (kg/lbs)-sets, time, time-sets)
  repetition_quantity: int(),
  set_quantity: int(),
  duration_seconds: int(),
});

export const workoutsExercisesTable = sqliteTable("workouts_exercises", {
  workout_id: int().references(() => workoutsTable.id),
  exercise_id: int().references(() => exercisesTable.id),
});

export const movementsTable = sqliteTable("movements", {
  id: numericalId,
  name: text().notNull(),
  muscle_group_id: int().references(() => muscleGroupsTable.id),
});

export const muscleGroupsTable = sqliteTable("muscle_groups", {
  id: numericalId,
  name: text().notNull(),
  color: text(),
});

export const settings = sqliteTable("settings", {
  id: numericalId,
  key: text().notNull(),
  string_value: text(),
  boolean_value: int({ mode: "boolean" }),
});
