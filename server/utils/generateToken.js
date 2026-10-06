import jwt from "jsonwebtoken"
import dotenv from 'dotenv/config'
export function generateToken(pyload) {
    return jwt.sign(pyload, process.env.SECRET, {expiresIn: process.env.EXPIRES_IN})
}

export function verify(token) {
    try {
        return jwt.verify(token, process.env.SECRET)
    } catch (error) {
        return false
    }
}