import { useState } from "react";
import { useCookies } from "react-cookie";

export default function useCookie(name?: string, value?: any) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [cookieValue, setCookieValue] = useState<any>();

  const get = () => {
    setCookieValue(cookies[name!]);
  };

  const set = (setName: string, setValue: any) => {
    setCookie(setName!, setValue!);
  };

  const remove = (removeName: string) => {
    removeCookie(removeName!);
  };

  return {
    get,
    set,
    remove,
  };
}
