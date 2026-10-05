export interface alertType {
    id?: string | null | undefined
    displayName: string
    description: string
    priority: string
    arena: string
    lon: number
    lat: number
}

export interface updateAlertType {
    displayName: string
    description: string
    priority: string
    arena: string
    lon: number
    lat: number
}


