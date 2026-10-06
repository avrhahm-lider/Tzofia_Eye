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


