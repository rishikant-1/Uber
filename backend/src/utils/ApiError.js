class ApiError extends Error{
  constructor(message,success=false,error=true,statusCode=404,data={}){
    super(message)
    this.name = 'ApiError'; 
    this.success = success,
    this.error = error,
    this.statusCode = statusCode,
    this.data = data
  }
  }





export default ApiError;