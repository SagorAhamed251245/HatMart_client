"use client";

import useAuth from "@/hooks/useAuth";
import getSingleUser from "@/utils/users/getSingleUser";
import { useEffect, useState } from "react";

const getUserData = () => {
  const [getUser, setUser] = useState(null);
  const { user } = useAuth();
  console.log("🚀 ~ file: getUserData.js:10 ~ getUserData ~ user:", user);
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
