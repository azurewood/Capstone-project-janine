//'asyncHandler' function takes in a single parameter called 'fn', which represents an asynchronous route handler function
//An asynchronous route handler function is a function that handles requests made to a specific route in a web application
//when a request is made to a specific route in the app, the asynchronous route handler function is responsible for processing that request and generating a response. 
//The returned middleware function takes 3 parameters: 'req'(request object), 'res'(response object), and 'next'(next middleware function)

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

module.exports = asyncHandler