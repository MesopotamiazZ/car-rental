import reuqers  from './base/request'

export async function query(): Promise<any> {
  return reuqers.post('/api/users');
}
