
export default ({

    name: "Trade",
    path: "trade",
    component: () => import("@/components/Analyze/TradeBoard.vue"),
    props: true,
    children: [
        {
            name: "defaultTrade",
            path: "",
            redirect: { name: "defaultTrade" },
        },
        {
            name: "history",
            path: "history",
            component: () => import("@/components/Analyze/TradeHistory.vue"),
        },
        {
            name: "Record",
            path: "record",
            component: () => import("@/components/Analyze/Record.vue"),
        }
    ],
    redirect: { name: "history" }

}
)