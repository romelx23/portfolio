import { Projects } from "../interfaces/ProyectsInterface";

export const GetProjects = async () => {
    const resp=await fetch('https://api.github.com/users/romelx23/repos')
    const data:Projects[]=await resp.json();
    // console.log(data);
    return data;
}

export const GetProjectsParse=async()=>{
    // const 
}