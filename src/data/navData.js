const commonNavData = [
  /*  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/products",
    title: "Products",
  }, */
];

export const afterLoginNavData = [
  ...commonNavData,
  {
    path: "userProfile",
    title: "Profile",
  },
 
  {
    path: "helpCenter",
    title: "Help Center",
  },
];

export const beforeLoginNavData = [
  ...commonNavData,
  {
    path: "/registation",
    title: "Signup",
  },
  {
    path: "/login",
    title: "Login",
  },
  {
    path: "userProfile",
    title: "Profile",
  },

  {
    path: "helpCenter",
    title: "Help Center",
  },
];
