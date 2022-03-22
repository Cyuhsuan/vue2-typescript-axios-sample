import Ajax from "@/utils/ajax";
import store from "@/store";

export async function doLogin(form: object): Promise<object> {
  let data: object = {};
  await Ajax.get("/sanctum/csrf-cookie");
  await Ajax.post("/login", form)
    .then((res) => {
      data = res.data;
      store.dispatch("SET_USER_INFO", res.data);
    })
    .catch(() => {
      data = {
        message: "Unauthorized",
      };
    });
  return data;
}
