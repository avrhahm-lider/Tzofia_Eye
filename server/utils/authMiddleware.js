import { createError } from "./createError.js"
import { verify } from "./generateToken.js"


export function authMiddleware(req, res, next) {
    const {authorization} = req.headers
    const token = authorization.split("Bearer ")[1]
    const valid = verify(token)
    if (!valid) return next(createError(401, "Unknown or logged-in user"))  
    req.userId = valid.userId
    return next()
    

}