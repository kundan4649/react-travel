const hostname = window && window.location && window.location.hostname;
const app_Root = {};

if (hostname.indexOf("localhost") > -1) {
  app_Root.backendHost = "https://localhost:7014/v3/";  
} else {
  app_Root.backendHost = "https://partners.api.skyscanner.net/apiservices/v3/";  
}

export const API_ROOT = app_Root;
