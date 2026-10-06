import z, { email, string } from "zod";

export const userSchema = z.strictObject({
    userName: z.string().min(3),
    password: z.string().min(7),
    email: z.email(),
    role: z.enum(['arena_user' , 'general_user' , 'admin']),
    assignedArena: z.enum(['North' , 'South' , 'Center' , 'All'])
})

export const loginuserSchema = z.strictObject({
    userName: z.string().min(3),
    password: z.string().min(7),
})