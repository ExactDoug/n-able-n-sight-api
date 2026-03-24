/** General settings from list_general_settings */
export interface GeneralSettings {
  language: string;
  clear24x7checks: number;
  cleardailysafetychecks: number;
  notesbacklog: number;
  forcenotes: number;
  vartimezone: string;
}

/** Wall chart server settings */
export interface WallChartServerSettings {
  show24x7problems: number;
  showdailysafetycheckproblems: number;
  showautomatedtaskproblems: number;
  includeoverdueservers: number;
  includeofflineservers: number;
}

/** Wall chart workstation settings */
export interface WallChartWorkstationSettings {
  show24x7problems: number;
  showdailysafetycheckproblems: number;
  showautomatedtaskproblems: number;
}

/** Wall chart settings from list_wallchart_settings */
export interface WallChartSettings {
  servers: WallChartServerSettings;
  workstations: WallChartWorkstationSettings;
}
