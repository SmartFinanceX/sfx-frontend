export default {
  name: "Account",
  path: "account",
  component: () => import("@/views/Account.vue"),
  props: true,
  children: [
    {
      name: "AccountHome",
      path: "",
      component: () => import("@/components/Account/AccountCenter.vue"),
    },
    {
      name: "AccountCenter",
      path: "accountcenter",
      redirect: { name: "AccountHome" },
      props: true,
    },
    {
      name: "TradeHistory",
      path: "tradehistory",
      component: () => import("@/components/Account/TradeHistory.vue"),
    },
    {
      name: "UserInfor",
      path: "userinfor",
      component: () => import("@/components/Account/UserInfor.vue"),
    },
    {
      name: "Collect",
      path: "collect",
      component: () => import("@/views/Collect.vue"),
    },
  ],
};
