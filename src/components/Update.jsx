import { useParams, useSearchParams } from "react-router-dom";
import { getallEvents } from "../service/api";
import { useEffect, useState } from "react";
function Update(){
    const {id} = useParams()
    const [searchParams, setSearchParams] = useSearchParams({name: ""})
    const [listEvent, setListEvent] = useState();

    useEffect(() => {
        const  fetchList = async()=>{
            const result = await getallEvents();
            setListEvent(result.data);
        }
        fetchList();
    },[]);
    
    listEvent == undefined? console.log("undefined") : console.log(listEvent[0].name);
    return (
        <>
            <h1>Welcome {searchParams.get('name')} to home page</h1>
            <h2>Your id is {id}</h2>
        </>
    )
}

export default Update