import {HttpMethod} from "../types/http-method";
import {MyRouter} from "../types/my-router";

export function rest(httpMethod: HttpMethod, path: string) {
    return (target: MyRouter, propertyName: string): any => {
        console.log("czy to działa?")
    };
}