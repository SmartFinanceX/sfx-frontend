import trade from "./tradeView.js";
export default {
  name: "IncInfo",
  path: "inc/:ticker",
  component: () => import("@/views/IncView.vue"),
  props: true,
  children: [
    {
      name: "IncInfoHome",
      path: "",
      component: () => import("@/components/inc/BasicInfo.vue"),
    },
    {
      name: "BasicInfo",
      path: "basicinfo",
      redirect: { name: "IncInfoHome" },
      props: true,
    },
    {
      name: "Predict",
      path: "predict",
      component: () => import("@/components/inc/Predict.vue"),
      props: true,
    },
    {
      name: "Board",
      path: "board",
      component: () => import("@/components/inc/Board.vue"),
      props: true,
    },
    {
      name: "Balance",
      path: "balance",
      component: () => import("@/components/Inc/Balance.vue"),
      props: true,
    },
    {
      name: "Stock",
      path: "stock",
      component: () => import("@/components/inc/Stock.vue"),
    },
    trade,
  ],
};
