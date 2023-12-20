import {get} from "./baseApi.ts";

import {entity} from "../type/types.ts";


export async function test(): Promise<entity[]> {
    return await get("/test");
}



