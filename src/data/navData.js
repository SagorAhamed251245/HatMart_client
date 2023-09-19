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
    path: "/dashboard/myProfile",
    title: "Profile",
  },
  {
    path: "/products/localFarm",
    title: "Local Farm",
  },
  {
    path: "/products/ecoFriendly",
    title: "Eco-Friendly",
  },
  {
    path: "/dashboard",
    title: "dashboard",
  },
  {
    path: "/HelpCenter",
    title: "Help Center",
  },
];

export const beforeLoginNavData = [
  ...commonNavData,
  {
    path: "/registration",
    title: "Signup",
  },
  {
    path: "/login",
    title: "Login",
  },

  {
    path: "/HelpCenter",
    title: "Help Center",
  },
];
