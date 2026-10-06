
export interface alertType {
    id?: string | null | undefined
    displayName: string
    description: string
    priority: 'Low'| 'Medium'| 'High'| 'Critical'
    arena: "North"| "South"| "Center"
    status: 'Active'| 'Handled'
    lon: number
    lat: number
}

export interface updateAlertType {
    displayName: string
    description: string
    priority: 'Low'| 'Medium'| 'High'| 'Critical'
    arena: "North"| "South"| "Center"
    status: 'Active'| 'Handled'
    lon: number
    lat: number
}


export interface registerType{
        userName: string,
    password: string,
    email: string,
    role: 'arena_user' | 'general_user' | 'admin',
    assignedArena: 'North' | 'South' | 'Center' | 'All'
}

export interface loginType{
    userName: string,
    password: string,
}