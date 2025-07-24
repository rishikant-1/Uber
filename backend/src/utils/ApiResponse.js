class ApiResponse {
  constructor(message, success = true, error = false, statusCode = 200, data = {}) {
    this.message = message
    this.name = 'ApiResponse';
    this.success = success,
      this.error = error,
      this.statusCode = statusCode,
      this.data = data
  }
}


export default ApiResponse;