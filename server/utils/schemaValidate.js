import z from "zod"
import { createError } from "./createError.js"

export function validate(schema){
    return (req, res, next) => {
        const schemaParse = schema.safeParse(req.body)
        if(!schemaParse.success){
            console.log(schemaParse.error.issues[0]);
            console.log(req.body);
            
            
            next(createError(400, "invalid body"))
        }
        next()
    }
}