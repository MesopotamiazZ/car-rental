
import reuqers from "@/api/base/request";


export async function query( params:any): Promise<any> {
  return reuqers.post('/customer/list/page',params);
}
