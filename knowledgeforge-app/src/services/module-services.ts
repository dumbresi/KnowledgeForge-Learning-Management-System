import Modules from '../models/modules'
import * as baseServices from './base-service';


const modulesResourcePath='/modules';

export const search = async():Promise<Modules[]>=>{
    const courses = await baseServices.search<Modules>(modulesResourcePath,{});
    return courses;
}

export const getModules=async (id:string) : Promise<Modules[]>=> {
    const modules = await baseServices.GET<Modules>(modulesResourcePath+'/course/'+id);
    return modules;
}