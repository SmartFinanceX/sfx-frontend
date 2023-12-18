<template>
  <div>
    <div class="search">
      <v-card class="pa-8 d-flex justify-center flex-wrap">
        <v-responsive max-width="600">
          <v-img
            class="mx-auto mt-12 mb-16"
            max-height="200"
            max-width="340"
            src="../images/logo_big.png"
          ></v-img>

          <v-text-field
            ref="searchField"
            v-model="text"
            hide-details
            label="查找您想看的金融资讯..."
            prepend-inner-icon="mdi-magnify"
            single-line
            clearable
            @keyup.enter="getData(1)"
          ></v-text-field>
        </v-responsive>
      </v-card>
    </div>
    <div>
      <v-card max-width="1000" class="mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12" v-for="card in cards" :key="card.title">
              <v-card :color="card.color">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar
                    @click="window(card.url)"
                    v-if="card.show"
                    class="ma-3 clickable"
                    size="250"
                    rounded="0"
                  >
                    <v-img :src="card.src"></v-img>
                  </v-avatar>
                  <div class="info">
                    <v-card-title
                      @click="window(card.url)"
                      class="text-h5 clickable"
                    >
                      {{ card.title }}
                    </v-card-title>

                    <v-card-subtitle>{{ card.source }}</v-card-subtitle>
                    <v-card-text>{{ card.description }}</v-card-text>
                    <v-card-text>{{ card.date }}</v-card-text>
                  </div>
                  <v-avatar
                    @click="window(card.url)"
                    v-if="!card.show"
                    class="ma-3 clickable"
                    size="250"
                    rounded="0"
                  >
                    <v-img :src="card.src"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    key: "5edaca3ae98496546e95a7b0be57346b",
    num: [15, 35],
    cards: [],
    color: ["#bfe9ff", "#7ffac7", "#8cf4f2", "#d1e4ff"],
    text: "",
  }),
  methods: {
    getData(tag = 0) {
      let url;
      if (tag == 1) {
        url = `https://apis.tianapi.com/caijing/index?key=${this.key}&num=${this.num[tag]}&word=${this.text}`;
      } else {
        url = `https://apis.tianapi.com/caijing/index?key=${this.key}&num=${this.num[tag]}`;
      }
      this.$http.get(url).then((res) => {
        // console.log(res);
        let datas = res.data.result.newslist;
        let date = "";
        let show = false;
        let source = "中国日报财经";
        this.cards = []; //置空

        for (let i = 0; i < this.num[tag]; i++) {
          if (datas[i].source != source); //澎湃财经的数据没有description;
          //左右显示的逻辑
          show = !show;

          //数据格式化处理
          if (datas[i].description.length >= 5) {
            datas[i].description =
              datas[i].description.slice(0, -5) +
              " " +
              datas[i].description.slice(-5);
          } else {
            console.warn(
              "The string is too short to insert a space before the last 5 characters."
            );
          }
          date = datas[i].description.slice(-16);
          datas[i].description = datas[i].description.slice(0, -16);

          //产生最终数据
          this.cards.push({
            show: show,
            title: datas[i].title,
            src: datas[i].picUrl,
            url: datas[i].url,
            description: datas[i].description,
            source: datas[i].source,
            date: date,
            color: this.color[i % this.color.length],
          });
        }
      });
    },
    window(url) {
      if (url && typeof url === "string") window.open(url, "_blank");
    },
  },
  mounted: function () {
    this.getData(0);
  },
};
</script>

<style scoped>
.search {
  margin-bottom: 2cm;
}
.info {
  display: grid;
  place-content: center;
}
.clickable {
  cursor: pointer;
}
.text-h5:hover {
  color: #ffa07d;
}
</style>
