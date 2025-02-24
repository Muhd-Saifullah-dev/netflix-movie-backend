class AppError extends Error{
    constructor(message,status){
        super(message)
        this.status=status
        this.message=message
        Error.captureStackTrace(this,this.contructor)
    }
}

class validationError extends AppError{
    constructor(message,skipLogging=false){
        super(message,422)
    }
}
class BadRequestError extends AppError{
    constructor(message , skipLogging=false){
        super(message,401)
    }
}

class UnauthorizedError extends AppError {
    constructor(message) {
        super(message, 401);
    }
}

class ForbiddenError extends AppError {
    constructor(message) {
        super(message, 403);
    }
}

class NotFoundError extends AppError {
    constructor(message) {
        super(message, 404);
    }
}

class InternalServerError extends AppError {
    constructor(message) {
        super(message, 500);
    }
}

module.exports={
    InternalServerError,
    NotFoundError,
    BadRequestError,
    ForbiddenError,
    UnauthorizedError,
    validationError,
    AppError
}