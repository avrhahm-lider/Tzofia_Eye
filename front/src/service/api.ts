export async function api(url:RequestInfo | URL, options: RequestInit){
    console.log('ddddd',url, options);
    
    const res = await fetch(url, {...options, headers: {authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWM1MGRiOTc0Yzg4ZjYwMDk2Nzk1M2QiLCJ1c2VyTmFtZSI6Im1vbW8iLCJpYXQiOjE3OTEyOTk3NzAsImV4cCI6MTc5MTM4NjE3MH0.mqKBx8dpCrYme0iHdQCdlk2vl8hIQ9IAae8m2Fyzxf0"}})
    if (!res.ok) throw Error("error")
    const data = await res.json()
    return data
    
}