import { DeviceId, CheckId, ApiResponse } from './common';

/**
 * Status of an automated task
 */
export enum TaskStatus {
    PENDING = 'PENDING',
    RUNNING = 'RUNNING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED'
}

/**
 * Type of automated task
 */
export enum TaskType {
    SCRIPT = 'SCRIPT',
    COMMAND = 'COMMAND',
    MAINTENANCE = 'MAINTENANCE',
    CUSTOM = 'CUSTOM'
}

/**
 * Schedule type for tasks
 */
export enum TaskScheduleType {
    ONCE = 'ONCE',
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY',
    ON_DEMAND = 'ON_DEMAND'
}

/**
 * Information about an automated task
 */
export interface Task {
    /** Unique identifier for the task */
    check_id: CheckId;
    /** Name of the task */
    name: string;
    /** Description of what the task does */
    description: string;
    /** Type of task */
    type: TaskType;
    /** Current status of the task */
    status: TaskStatus;
    /** When the task is scheduled to run */
    schedule_type: TaskScheduleType;
    /** Last time the task was run */
    last_run?: string;
    /** Next scheduled run time */
    next_run?: string;
    /** Last result from task execution */
    last_result?: string;
    /** Whether the task is enabled */
    enabled: boolean;
}

/**
 * Parameters for running a task now
 */
export interface RunTaskNowParams {
    /** Task ID to run */
    checkid: CheckId;
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Parameters for listing tasks
 */
export interface ListTasksParams {
    /** Device ID to list tasks for */
    deviceid: DeviceId;
    /** Optional status filter */
    status?: TaskStatus;
    /** Optional type filter */
    type?: TaskType;
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Response for running a task now
 */
export interface RunTaskNowResponse extends ApiResponse {
    /** Minutes until task will start */
    time: number;
    /** Human readable time description */
    message: string;
}

/**
 * Response for listing tasks
 */
export interface ListTasksResponse extends ApiResponse {
    /** Array of tasks */
    tasks: Task[];
}

/**
 * Task execution result
 */
export interface TaskResult {
    /** Task ID */
    check_id: CheckId;
    /** Status of execution */
    status: TaskStatus;
    /** Output from task execution */
    output: string;
    /** Any error messages */
    error?: string;
    /** When the task started */
    start_time: string;
    /** When the task completed */
    end_time: string;
    /** Exit code if applicable */
    exit_code?: number;
}

/**
 * Response for getting task results
 */
export interface TaskResultResponse extends ApiResponse {
    /** Task execution result */
    result: TaskResult;
}

/**
 * Task Management endpoint methods
 */
export interface TaskEndpoints {
    /** List tasks for a device */
    listTasks(params: ListTasksParams): Promise<ListTasksResponse>;
    /** Run a task immediately */
    runNow(params: RunTaskNowParams): Promise<RunTaskNowResponse>;
    /** Get task execution result */
    getTaskResult(checkId: CheckId): Promise<TaskResultResponse>;
}