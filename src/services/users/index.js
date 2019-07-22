import request from '@/utils/request';

export function getPublicKey() {
  return request(`/api/getKey`,{
    method:"POST"
  });
}
export function login(payload) {
  return request(`/api/login`,{
    method:"POST",
    requestType:"form",
    data:payload
  });
}