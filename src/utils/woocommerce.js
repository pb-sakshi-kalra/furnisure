import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const ck = "ck_2d38c1e1d3d2236111aa47ac16b2326183bdd640";
const cs = "cs_22b4ef1be51edc59fa1f2643072ed82ffda75b09";
const baseURL = "https://events.furnisure.me/wp-json/wc/v3";


function makeRequest(endpoint, method = "GET", body = {}) {
  const oauth = getOauth();
  const updatedEndpoint = endpoint.replace(
    /category=([^&?]*)\?/,
    "category=$1&"
  );
  let requestData = {
    url: baseURL + updatedEndpoint,
    method,
    body: {},
  };

  const splitUrl = updatedEndpoint.split("?")[1];
  const str = updatedEndpoint.endsWith(`?${splitUrl}`) === true ? `&` : `?`;
  let requestHTTP = "";

  if (method === "GET" || method === "DELETE") {
    requestHTTP = `${requestData.url}${str}${jQuery.param(
      oauth.authorize(requestData)
    )}`;
    return axios({
      url: requestHTTP,
      method: method,
    });
  } else {
    requestData = {
      url: baseURL + updatedEndpoint,
      method,
      body,
    };
    requestHTTP = `${requestData.url}?${jQuery.param(
      oauth.authorize(requestData)
    )}`;
    return axios({
      url: requestHTTP,
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: body,
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
