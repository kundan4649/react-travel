import axios from "axios";
import Instense from "./Axios-config";
import { API_ROOT } from "./Api-config";

class SkyScannerApiService {
  static SearchFlights = async (request) => {
    let storage = JSON.parse(localStorage.getItem("storage"));
    let tenantID = storage === null ? 0 : storage.tenantID;

   
    request.tenantid = tenantID;
    const url = `/Invoice/GetInvoiceById`;
    return Instense.get(url, { params: request }).then((response) => {
      let result = response.data.result;
      return result;
    });
  };

  static GetAirportList = async (request) => {
    let storage = JSON.parse(localStorage.getItem("storage"));
    let tenantID = storage === null ? 0 : storage.tenantID;
    const headers = {
      'x-api-key': 'sh428739766321522266746152871799'
    };
   
    //request.tenantid = tenantID;
    const url = `geo/hierarchy/flights/en-GB`;
    return Instense.get(url, { params: request,headers  }).then((response) => {
      let result = response.data;
      return result;
    });
  };

  static SaveInvoice = async (request) => {
    let storage = JSON.parse(localStorage.getItem("storage"));
    let tenantID = storage === null ? 0 : storage.tenantID;

    request.tenantID = tenantID;
    const url = `/Invoice/SaveInvoice`;
    return Instense.post(url, request).then((response) => {
      let result = response.data.result;
      return result;
    });
  };
}

export default SkyScannerApiService;
