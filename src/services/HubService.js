import Api from "@/services/Api";

export default {
  businesses() {
    return Api().get("/businesses");
  }
};
