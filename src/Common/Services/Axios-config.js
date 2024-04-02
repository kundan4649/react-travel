import axios from "axios";
import { API_ROOT } from "./Api-config";

const Instense = axios.create();

Instense.defaults.baseURL = `${API_ROOT.backendHost}`;
Instense.interceptors.request.use((config) => {
  if (localStorage.getItem("token") != null && localStorage.getItem("storage") != null) {
   // config.headers.Authorization = `bearer ${localStorage.getItem("token")}`;
    let storage = JSON.parse(localStorage.getItem("storage") || "{}");
    let userName = storage.userName || "";
    let tenantID = storage.tenantID || "";
    //config.headers.Username = userName;
    //config.headers.tenantId = tenantID;
  };
  return config;
}, (err) => {
  console.log(err);
  return Promise.reject(err);
});

Instense.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error?.response?.data?.message === "under maintenance") {
    window.location.href = "/Under-Maintenance";
  }
  else if (error.response && error?.response?.data && error?.response?.data?.error &&
    (error.response.data.session === false || error.response.data.session === "false") || (localStorage.getItem("token") === null)) {
    alert(error.response.data.error.message);
  }
  else if (error?.response && error?.response?.data && error?.response?.data?.error && error?.response?.data?.error?.message) {
    alert(error.response.data.error.message);
  }
  else if ((error?.response && error?.response?.status === 401) || (localStorage.getItem("token") === null)) {
    alert(error.response.data.error.message);
  } else {
    return Promise.reject(error);
  }
});

export default Instense;
