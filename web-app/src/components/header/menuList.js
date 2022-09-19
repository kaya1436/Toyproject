export const menuList = [
  {
    title: "Vehicle Mgnt.",
    url: "/vehicle",
    submenu: [
      { title: "Vehicle Info.", url: "/vehicle" },
      { title: "Vehicle Model Mgmt.", url: "/vehicleModel" },
    ],
  },
  {
    title: "Subscription Operation Mgmt.",
    url: "/product",
    submenu: [
      { title: "Charge Plan Mgmt.", url: "/product" },
      { title: "Contractor Mgmt.", url: "/subscriptionUser" },
    ],
  },
  {
    title: "Service Operation Mgmt.",
    url: "/notification/temp",
    submenu: [
      { title: "Template", url: "/notification/temp" },
      { title: "Send Mgmt.", url: "/notification/send" },
    ],
  },
  {
    title: "System Mgmt.",
    url: "/batch",
    submenu: [
      {
        title: "Batch Mgmt.",
        url: "/batch",
        submenu: [
          { title: "Job Mgmt.", url: "/batch" },
          { title: "Job History", url: "/batchHistory" },
        ],
      },
    ],
  },
];
