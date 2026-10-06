import { ObjectId } from "mongodb"
import usersDal from "../DAL/users.dal.js"
import { createError } from "../utils/createError.js"
import { generateToken } from "../utils/generateToken.js"
import { isAdmin } from "../utils/isAdnin.js"
import bcrypt from 'bcrypt'
const SALT = 10
async function register(userId, user) {
    if(!isAdmin(userId)) throw createError(403, "Access denied")
    const password = bcrypt.hashSync(user.password, SALT)
    return usersDal.creatUser(userObj(user, password))
}
async function login(loginDitails) {
    console.log(loginDitails.userName);
    console.log(loginDitails.password);
    
    
    const user = await usersDal.getUserByUserName(loginDitails.userName)
    console.log(user);
    
    if (!user || !bcrypt.compareSync(loginDitails.password, user.password))
        throw createError(400, "Incorrect username or password")
    return {token: generateToken({userId: user._id, userName: user.userName})}
}
async function deleteUser(userId, id) {
    if(!isAdmin(userId)) throw createError(403, "Access denied")
    if (!id || !ObjectId.isValid(id)) throw createError(400, "invalid id")
    return usersDal.deleteUser(id)

}
async function me(id) {
    console.log(id);
    
    return usersDal.getUserById(id)
}
async function users(userId) {
    if(!isAdmin(userId)) throw createError(403, "Access denied")
    return usersDal.getAllUsers()
}

function userObj(user, password) {
    return {
        userName: user.userName,
        password,
        email: user.email,
        role: user.role,
        assignedArena: user.assignedArena
    }
}

export default {register, login, deleteUser, me, users}