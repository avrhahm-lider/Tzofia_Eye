import { ObjectId } from 'mongodb'
import {db} from '../db/mongodb.js'
import bcrypt from 'bcrypt'

const users = db.collection("users")

async function creatUser(user) {
    await  users.insertOne(user)
    return user
}

function deleteUser(id){
    return users.deleteOne({_id: new ObjectId(id)})
}

function getUserById(id){
    return users.findOne({_id: new ObjectId(id)})
}

function getUserByUserName(userName){
    return users.findOne({userName: userName})
}
function getAllUsers(){
    return users.find().toArray()
}



export default {creatUser, deleteUser, getUserById, getUserByUserName, getAllUsers}