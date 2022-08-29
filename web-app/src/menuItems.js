export const menuItems = [
  {
    title: "차량 관리",
    path: "/vehicle",
    submenu: [
      { title: "차량 정보", path: "/vehicle", cName: "submenu-item" },
      { title: "차량 모델 관리", path: "/vehicleModel", cName: "submenu-item" },
    ],
  },
  {
    title: "구독 운영 관리",
    path: "/product",
    submenu: [
      { title: "요금제 관리", path: "/product" },
      { title: "계약자 관리", path: "/subscriptionUser" },
    ],
  },
  {
    title: "서비스 운영 관리",
    path: "/notification/temp",
    submenu: [
      { title: "템플릿 관리", path: "/notification/temp" },
      { title: "발송 관리", path: "/notification/send" },
    ],
  },
  {
    title: "시스템 관리",
    path: "/batch",
    submenu: [
      {
        title: "배치",
        path: "/batch",
        submenu: [
          { title: "job 관리", path: "/batch" },
          { title: "job 이력", path: "/batchHistory" },
        ],
      },
    ],
  },
];
