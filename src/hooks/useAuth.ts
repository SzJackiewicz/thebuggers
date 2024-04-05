import { User } from "@/interfaces/User";
import { useEffect, useState } from "react";
import useCookie from "./useCookie";

const hrUser: User = {
  id: "924c3fb8-4529-4caa-8eec-6e4f8ce3131e",
  fullName: "Simeon Graham",
  age: 28,
  email: "simeon.graham@email.com",
  departmentId: "123",
  departmentName: "HR",
};

const devUser: User = {
  id: "464ba8b4-1c57-4262-b104-3b936bee592b",
  fullName: "Braylon Griffin",
  age: 31,
  email: "braylon.griffin@email.com",
  departmentId: "32",
  departmentName: "IT",
};

export default function useAuth() {
  const { set } = useCookie();
  const [userData, setUserData] = useState<User>(hrUser);

  useEffect(() => {
    set("userData", userData);
  }, [userData]);

  return {
    userData,
    setUserData,
    mock: {
      hr: hrUser,
      dev: devUser,
    },
  };
}
