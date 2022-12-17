import {HttpMethod} from "./http-method";

export interface RestDecoratorInfo {
    httpMethod: HttpMethod;
    path: string;
    propertyName: string;
}