<template>
  <v-sheet class="d-flex flex-wrap">
    <v-sheet class="flex-1-0 ma-2 pa-2" max-width="800">
      <div>
        <v-card max-width="1000" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-card-text style="font-weight: bold; font-size: large"
                >财经新闻</v-card-text
              >
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
    </v-sheet>

    <v-sheet class="ma-2 pa-2" style="width: 300px">
      <v-img
        class=""
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
      <v-card-text style="font-weight: bold; font-size: large"
        >IT资讯</v-card-text
      >
      <v-card
        v-for="it in its"
        v-bind:key="it.title"
        @click="window(it.url)"
        class="mx-auto"
        style="margin-top: 20px"
      >
        <v-img class="align-end text-white" height="200" :src="it.picUrl" cover>
          <v-card-text>{{ it.title }}</v-card-text>
        </v-img>
      </v-card>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    key: "5edaca3ae98496546e95a7b0be57346b",
    num: [17, 35],
    cards: [],
    color: ["#bfe9ff", "#7ffac7", "#8cf4f2", "#d1e4ff"],
    text: "",
    its: [],
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
          if (datas[i].source != source) {
            //澎湃财经的数据没有description;
            //我也不知道怎么搞
          }
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
    getITData() {
      let url = `https://apis.tianapi.com/it/index?key=${this.key}&num=20`;
      this.$http.get(url).then((res) => {
        // console.log(res);
        let datas = res.data.result.newslist;
        for (let i = 0; i < datas.length; i++) {
          this.its.push({
            title: datas[i].title,
            picUrl: datas[i].picUrl,
            url: datas[i].url,
          });
        }
      });
    },
  },
  mounted: function () {
    if (this.$route.params.keyword != null) {
      this.text = this.$route.params.keyword;
      this.getData(1);
    } else {
      this.getData(0);
    }
    this.getITData();
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
