class TaskEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async runTaskNow(checkId) {
    this.apiClient.validateParameters({ checkId }, ['checkId']);
    return this.apiClient.makeRequest('task_run_now', {
      checkid: checkId
    });
  }

  async getTaskResults(deviceId, taskId) {
    this.apiClient.validateParameters(
      { deviceId, taskId },
      ['deviceId', 'taskId']
    );
    return this.apiClient.makeRequest('list_task_results', {
      deviceid: deviceId,
      taskid: taskId
    });
  }

  async getTaskHistory(deviceId, days = 30) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_task_history', {
      deviceid: deviceId,
      days: days
    });
  }

  async getScheduledTasks(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_scheduled_tasks', {
      deviceid: deviceId
    });
  }

  // Helper method for task status checks
  async checkTaskStatus(deviceId, taskId) {
    const results = await this.getTaskResults(deviceId, taskId);
    return {
      isComplete: results.status === 'COMPLETED',
      status: results.status,
      results: results
    };
  }

  // Helper method to wait for task completion
  async waitForTaskCompletion(deviceId, taskId, timeout = 300000) {
    const startTime = Date.now();
    let status;

    do {
      status = await this.checkTaskStatus(deviceId, taskId);
      if (status.isComplete) {
        return status;
      }

      // Wait 5 seconds before checking again
      await new Promise(resolve => setTimeout(resolve, 5000));

    } while (Date.now() - startTime < timeout);

    throw new Error('Task execution timed out');
  }
}

module.exports = TaskEndpoints;