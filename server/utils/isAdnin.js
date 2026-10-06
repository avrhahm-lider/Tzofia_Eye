import usersDal from "../DAL/users.dal.js"

export async function isAdmin(id) {
    const user = await usersDal.getUserById(id)
    if (user.role === 'admin')
        return true
    return false
}