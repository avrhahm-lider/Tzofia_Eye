export async function api(url:RequestInfo | URL, options: RequestInit){
    console.log('ddddd',url, options);
    
    const res = await fetch(url, options)
    if (!res.ok) throw Error("error")
    const data = await res.json()
    return data
    
}