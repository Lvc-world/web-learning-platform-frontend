import {cacheToken} from '@/constants/cacheKey.ts'

export const cacheAdapter = (isSessionStorage?: boolean) => {
  return isSessionStorage ? sessionStorage : localStorage;
};
export const fix="lyu@"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setCache=(key:string,value:any,isSessionStorage:boolean)=>{
key=fix+key
  cacheAdapter(isSessionStorage).setItem(
    key,
    typeof value === "object" ? JSON.stringify(value) : value
  );
}
export const getCache=(key:string,isSessionStorage:boolean)=>{
  key=fix+key
  return cacheAdapter(isSessionStorage).getItem(key);
}
export const removeCache=(key:string,isSessionStorage:boolean)=>{
  key=fix+key
  cacheAdapter(isSessionStorage).removeItem(key);
}
export const getToken=()=>{
return getCache(cacheToken,false)
}
