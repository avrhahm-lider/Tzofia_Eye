import { useState } from "react";

export default function useAlret(){
    const [onpage, setOnpage] = useState<"Edit" |"Create" | "List">("List")
    const setPage = (page : "Edit" |"Create" | "List") =>{
        setOnpage(page)
    }
    return {onpage, setPage}
}