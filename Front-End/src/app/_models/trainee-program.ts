import { Program } from './program';

export class TraineeProgram {
  /**
   *
   */
  constructor(
    public programId: number,
    public traineeId: number,
    public traiProgID: number,
    public program: Program
  ) {}
}
