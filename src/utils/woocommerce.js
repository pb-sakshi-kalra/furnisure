import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const ck = "ck_e1e1996207b9de9e12cd856a8c4107289eb64407";
const cs = "cs_aaeba1c2261ebf1c48d0c9a02e740a6f1205ea10";
const baseURL = "http://furnisure.greygenie.com/wp-json/wc/v3";

function makeRequest(endpoint, method = "GET", data = {}) {
  const oauth = getOauth();

  const requestData = {
    url: baseURL + endpoint,
    method,
    body:{}
  };

  const requestHTTP =
    requestData.url + "?" + jQuery.param(oauth.authorize(requestData));

  if (method === "GET" || method === "DELETE") {
    return axios({
      url: requestHTTP,
      method: method
    });
  } else {
    return axios({
      url: requestHTTP,
      method: method,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

function getOauth() {
  return Oauth({
    consumer: {
      key: ck,
      secret: cs,
    },
    signature_method: "HMAC-SHA1",
    hash_function: function (base_string, key) {
      return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
    },
  });
}

export default makeRequest;
