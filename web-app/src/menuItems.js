export const menuItems = [
  {
    title: "차량 관리",
    submenu: [
      { title: "차량 정보", url: "/vehicle" },
      { title: "차량 모델 관리", url: "/vehicleModel" },
    ],
  },
  {
    title: "구독 운영 관리",
    url: "/product",
    submenu: [
      { title: "요금제 관리", url: "/product" },
      { title: "계약자 관리", url: "/subscriptionUser" },
    ],
  },
  {
    title: "서비스 운영 관리",
    url: "/notification/temp",
    submenu: [
      { title: "템플릿 관리", url: "/notification/temp" },
      { title: "발송 관리", url: "/notification/send" },
    ],
  },
  {
    title: "시스템 관리",
    url: "/batch",
    submenu: [
      {
        title: "배치",
        url: "/batch",
        submenu: [
          { title: "job 관리", url: "/batch" },
          { title: "job 이력", url: "/batchHistory" },
        ],
      },
    ],
  },
];
