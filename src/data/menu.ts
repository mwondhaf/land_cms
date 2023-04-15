const sideBarMenu1 = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    subMenus: [],
  },
  {
    id: 2,
    name: "Properties",
    subMenus: [
      {
        name: "View All",
        link: "/properties",
      },
      { name: "Add Land", link: "/properties/add-property" },
    ],
  },
  {
    id: 3,
    name: "Customers",
    subMenus: [{ name: "View All", link: "/customers" }],
    link: "/customers",
  },
  {
    id: 4,
    name: "Sales",
    link: "/sales",
    subMenus: [
      { name: "View All Sales", link: "/sales" },
      { name: "Add New Sale", link: "/sales/new-sale" },
    ],
  },
  {
    id: 4,
    name: "Expenses",
    link: "/expenses",
    subMenus: [],
  },
];

export { sideBarMenu1 };
