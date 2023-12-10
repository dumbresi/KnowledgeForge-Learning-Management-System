import * as baseService from './base-service';

const videoBaseurl='/video/';

export const getVideo= async (id:string) : Promise<string>=>{
    try {
        const video: string= await baseService.GetOne(videoBaseurl+id)
        return video;
    } catch (error) {
        throw new Error("Error fetching data")
    }
}