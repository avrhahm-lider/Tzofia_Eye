import authService from "../services/auth.servce.js"

async function register(req, res) {
    const result = await authService.register(req.userId,req.body)
    res.status(201).json({seccess: true, data: result})
}
async function login(req, res) {
    const result = await authService.login(req.body)
    res.status(201).json({seccess: true, data: result})
}
async function deleteUser(req, res) {
    const {id} = req.params
    const result = await authService.deleteUser(req.userId,id)
    res.status(203).json({seccess: true, data: result})
}
async function me(req, res) {
    const {id} = req.params
    const result = await authService.me(req.userId)
    res.status(201).json({seccess: true, data: result})
}
async function users(req, res) {
    const result = await authService.users(req.userId,)
    res.status(201).json({seccess: true, data: result})
}

export default {register, login, deleteUser, me, users}