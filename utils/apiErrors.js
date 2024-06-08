class ApiError {
    constructor(
        statusCode,
        message= "Something went wrong!!",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.response = false;
        this.errors = errors


        if(stack){
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {apiErrors}