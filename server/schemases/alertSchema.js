import z from 'zod'

export const alertSchema = z.object({
    displayName: z.string().min(3),
    description: z.string().min(5),
    priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
    arena: z.enum(['Active', 'Handled']),
    lon: z.number(),
    lat: z.number()
})