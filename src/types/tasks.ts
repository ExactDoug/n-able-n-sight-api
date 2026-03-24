/** Task run now response */
export interface TaskRunResponse {
  /** Minutes until the task starts */
  time: number;
  /** Human-readable time description (e.g. "15 minutes") */
  message: string;
}
