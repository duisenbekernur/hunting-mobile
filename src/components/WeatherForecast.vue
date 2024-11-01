<script>
import axios from "axios";
import { useAppStore } from "stores/app.store.ts";

export default {
  name: "WeatherForecast",
  data() {
    return {
      weatherForecast: [],
    };
  },
  async created() {
    const savedForecast = localStorage.getItem("weatherForecast");
    const savedDate = localStorage.getItem("forecastDate");
    const today = new Date().toLocaleDateString();

    // if (savedForecast && savedDate === today) {
    //   this.weatherForecast = JSON.parse(savedForecast);
    // } else {
    await this.fetchWeatherData();
    // }
  },
  watch: {
    "$appStore.clickedPoint": {
      handler() {
        this.fetchWeatherData();
      },
      immediate: true,
    },
  },
  computed: {
    $appStore() {
      return useAppStore();
    },
  },
  methods: {
    async fetchWeatherData() {
      try {
        if (!this.$appStore.clickedPoint) {
          return;
        }
        const [lat, lng] = this.$appStore.clickedPoint.coords;

        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia/Almaty`;

        const response = await axios.get(apiUrl);
        const data = response.data;

        this.weatherForecast = data.daily.time.map((date, index) => {
          const condition =
            data.daily.weathercode[index] === 0 ? "Clear" : "Cloudy"; // Simplified condition
          const tempMax = `${Math.round(data.daily.temperature_2m_max[index])}°C`;
          const tempMin = `${Math.round(data.daily.temperature_2m_min[index])}°C`;
          return { date, condition, tempMax, tempMin };
        });

        localStorage.setItem(
          "weatherForecast",
          JSON.stringify(this.weatherForecast),
        );
        localStorage.setItem("forecastDate", new Date().toLocaleDateString());
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>

<template>
  <div class="w-100 mt-4">
    <h4 class="text-h6 font-weight-medium mb-2">
      Погода на неделю <strong>{{ $appStore.clickedPoint.title }}</strong>
    </h4>
    <v-list dense>
      <v-list-item v-for="(weather, index) in weatherForecast" :key="index">
        <v-list-item-title>{{ weather.date }}</v-list-item-title>
        <v-list-item-subtitle
          >{{ weather.condition }} - Max: {{ weather.tempMax }} / Min:
          {{ weather.tempMin }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<style scoped>
.w-100 {
  width: 100%;
}

.text-h6 {
  font-size: 1.25rem;
}

.font-weight-medium {
  font-weight: 500;
}
</style>
