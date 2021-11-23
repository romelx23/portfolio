export interface Projects{
    id:number,
    name:string,
    url:string,
    git_url:string,
    html_url:string,
    owner:{
       avatar_url:string,
       type:string
    }
    img:string,
    updated_at:string,
    descrition:string | '',
}