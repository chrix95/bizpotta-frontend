import Api from "@/services/Api";

export default {
  businesses(search, page = 1) {
    return Api().get(`/businesses?search=${search}&page=${page}`);
  }
};
