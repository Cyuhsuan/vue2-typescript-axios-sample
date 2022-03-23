import VueI18n from "vue-i18n";
import en from "@/i18n/langs/en-US.json";
import tw from "@/i18n/langs/zh-TW.json";
import Vue from "vue";
// import es from "./es.json"
Vue.use(VueI18n);

const messages = {
  "zh-TW": tw,
  "en-US": en,
};
let locale = sessionStorage.getItem("locale") ?? "zh-TW";
if (sessionStorage.getItem("locale")) {
  locale = JSON.parse(locale);
}
const i18n = new VueI18n({
  /** 默认值 */
  locale,
  messages,
});

export default i18n;
