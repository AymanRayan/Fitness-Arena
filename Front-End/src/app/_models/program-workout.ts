import { Workout } from "./workout";

export class ProgramWorkout {
  constructor(
    public workoutId:number,
    public programId:number,
    public workout:Workout
  ){}
}
