import { ResponseData } from "./ResponseData";

export interface ApiResponse {
    data?: ResponseData,
    code?: ResponseData,
    msg?:any
  }