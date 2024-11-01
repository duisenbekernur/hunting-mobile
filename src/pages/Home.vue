<template>
  <v-container
    class="d-flex align-start flex-column justify-center pa-0"
    fluid
    style="height: 100vh; width: 100vw"
  >
    <!-- Header Section -->
    <div
      class="d-flex justify-between w-100 align-start"
      style="margin-top: 550px"
    >
      <div class="d-flex flex-column">
        <h1
          style="
            font-size: 30px;
            line-height: 30px;
            font-weight: 500;
            color: #661f1f;
            margin: 0;
          "
        >
          NHunter.kz
        </h1>
        <p class="text-subtitle1 mb-0">Astana</p>
      </div>
      <div style="display: flex; align-items: center; gap: 20px">
        <p class="text-h6">{{ appStore.user.name }}</p>
        <div
          style="
            border-radius: 100%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              0deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(177, 180, 229, 1) 20%,
              rgba(39, 48, 188, 1) 92%,
              rgba(30, 36, 112, 1) 100%
            );
          "
        >
          <img
            src="/hunter.png"
            style="
              width: 50px;
              height: 50px;
              margin-top: -10px;
              margin-left: 4px;
            "
          />
        </div>
      </div>
    </div>

    <!-- Top Analytics Section -->
    <div class="d-flex justify-around w-100 mt-8">
      <v-card
        v-for="(item, index) in topAnalytics"
        :key="index"
        class="d-flex flex-column align-center"
        elevation="2"
        style="
          background: linear-gradient(180deg, #a4b9f9, #ffffff);
          padding: 10px;
          width: 90px;
          text-align: center;
        "
      >
        <h3>{{ item.count }}</h3>
        <span>{{ item.label }}</span>
      </v-card>
    </div>

    <!-- Map Section -->
    <div class="w-100 mt-4">
      <h4 class="text-h6 font-weight-medium mb-2">Карта</h4>
      <leaflet-map
        class="w-100 ma-auto"
        style="
          height: 300px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #b8b8b8;
        "
      />
    </div>

    <!-- Weather Section -->
    <weather-forecast />

    <!-- FAQ Section -->
    <div class="w-100 mt-4">
      <h4 class="text-h6 font-weight-medium mb-2">Часто задаваемые вопросы</h4>
      <v-expansion-panels>
        <v-expansion-panel v-for="(faq, index) in faqList" :key="index">
          <v-expansion-panel-title>{{ faq.question }}</v-expansion-panel-title>
          <v-expansion-panel-text>{{ faq.answer }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <!--    <div class="h-100"></div>-->
  </v-container>
</template>

<script>
import LeafletMap from "components/LeafletMap.vue";
import WeatherForecast from "components/WeatherForecast.vue";
import { useAppStore } from "stores/app.store.ts";

export default {
  name: "HomePage",
  components: { WeatherForecast, LeafletMap },
  data() {
    return {
      topAnalytics: [
        { count: 4, label: "Всего разрешений" },
        { count: 3, label: "Активные лицензии" },
        { count: 1, label: "Заявки в ожидании" },
        { count: 8, label: "Недавняя активность" },
      ],
      faqList: [
        {
          question: "Какие лицензии необходимы для охоты?",
          answer:
            "Для охоты требуется получить лицензию на охоту и, в некоторых случаях, специальные разрешения на охоту на определенные виды животных. Рекомендуется ознакомиться с местными законами и правилами.",
        },
        {
          question: "Как выбрать подходящее оружие для охоты?",
          answer:
            "Выбор оружия зависит от типа охоты и вида добычи. Важно учитывать такие факторы, как калибр, вес и удобство использования. Консультация с опытными охотниками может помочь в выборе.",
        },
        {
          question:
            "Когда лучший сезон для охоты на определенные виды животных?",
          answer:
            "Лучший сезон для охоты зависит от вида животных и местных правил. Например, охота на водоплавающих птиц обычно осуществляется в осенние месяцы, а на крупную дичь — осенью и зимой.",
        },
        {
          question: "Какие меры безопасности следует соблюдать во время охоты?",
          answer:
            "Важно соблюдать правила безопасной охоты, такие как ношение яркой одежды, использование оружия только в безопасных условиях и наличие аптечки первой помощи. Также рекомендуется охотиться в компании и всегда сообщать кому-то о своих планах.",
        },
        {
          question: "Как правильно обрабатывать и сохранять мясо дичи?",
          answer:
            "После добычи дичи необходимо быстро очистить и охладить мясо, чтобы предотвратить его порчу. Рекомендуется использовать холодильник или лед для хранения мяса, а также следовать инструкциям по переработке и хранению, чтобы обеспечить его безопасность для употребления.",
        },
        {
          question:
            "Где можно найти информацию о предстоящих охотничьих мероприятиях?",
          answer:
            "Информацию о предстоящих охотничьих мероприятиях можно найти на специализированных веб-сайтах, в социальных сетях охотничьих сообществ или через местные охотничьи клубы и организации.",
        },
      ],
    };
  },
  computed: {
    appStore() {
      return useAppStore();
    },
  },
};
</script>

<style scoped>
/* Additional custom styles if necessary */
</style>
