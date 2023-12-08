const baseURL = 'http://localhost:4000';

export const GET = async <T>(path: string) : Promise<T[]> =>{
    const response = await fetch(baseURL+path,{
        method: 'GET'
    })

    const data: T[] = await response.json();

    return data;

}

export const search = async<T>(path: string, params: any):Promise<T[]>=>{
    const query: URLSearchParams=new URLSearchParams(params);
    const response = await fetch(baseURL+path+query,{
        method:'GET'
    })
    const data:T[]=await response.json();
    return data;
}

export const post=async<T>(path:string,payload:any,params:any): Promise<Response> =>{
    const query: URLSearchParams=new URLSearchParams(params);
    const response = await fetch(baseURL+path+query,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: payload
    })
    const data=await response;
    return data;
}