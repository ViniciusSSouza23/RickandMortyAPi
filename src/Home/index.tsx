/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useEffect, useState } from "react";
import { Card } from "../Components/card";
import api from "../services/api";
import {  Content } from "./style";

interface Pagination{
    page : number
}


export function Home(props:Pagination)
{
    const [persons,setPerson] = useState([]);
    
    

    

    useEffect (()=>{
        api.get(`/character`,{
            params:{
                page:props.page,
            }
        }).then((result)=>{
            setPerson(result.data.results);
           
            console.log(persons);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[props.page]);





    
        
            
        return(
            <main>
                <Content>
                    {persons.map((person,index)=>{
                        return(
                            <Card //@ts-ignore
                                key={person.id} img={person.image} name={person.name} species={person.species} gender={person.gender} origin={person.origin.name} status={person.status}/>
                        );
                        
                    })}
               
                </Content>
            </main>
                
            
        );
    
  
}