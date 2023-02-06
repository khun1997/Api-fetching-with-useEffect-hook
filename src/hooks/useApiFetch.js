import React,{ useState,useEffect } from "react";
import styled from "styled-components";

const Section =styled.section`
    width:4em;
    color:white;
    background: blue;
    margin: 0.25em 1em;
    padding:1em;
    display:flex;
    flex-direction: column;
    border-radius:10px;
`;
const useApiFetch = (props) => {
    const [user ,setUser] = useState([]);

    useEffect(()=> {
        const fetchData = async ()=>{
            const response = await fetch('https://475cd8d9-f083-41b3-982d-0430418098ec.mock.pstmn.io/demo')
            const data = await response.json();
            setUser(data);
        };
        fetchData();
    },[props.id]);
        
    return(
        <div >
           <Section>
                {user.map((id)=> <div>{id.name}</div>)}
           </Section>
        </div>
    )
}

export default useApiFetch;