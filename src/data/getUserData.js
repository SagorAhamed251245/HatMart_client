"use client";

import useAuth from "@/hooks/useAuth";
import getSingleUser from "@/utils/users/getSingleUser";
import { useEffect, useState } from "react";

const getUserData = () => {
  const [getUser, setUser] = useState(null);
  const { user } = useAuth();
  
  useEffect(() => {
    (async () => {
      try {
        const getUserData = await getSingleUser(user?.email);
        setUser(getUserData);
      } catch (error) {}
    })();
  }, [user]);
  return getUser;
};

export default getUserData;
