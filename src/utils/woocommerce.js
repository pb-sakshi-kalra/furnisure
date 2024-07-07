import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const ck = "ck_e1e1996207b9de9e12cd856a8c4107289eb64407";
const cs = "cs_aaeba1c2261ebf1c48d0c9a02e740a6f1205ea10";
const baseURL = "http://furnisure.greygenie.com/wp-json/wc/v3";

const Woocommerce = {
  getProducts: () => {
    return makeRequest("/products");
  },
  getProductByID: (id) => {
    return makeRequest("/wc/v3/products/" + id);
  },
};

function makeRequest(endpoint, method = "GET") {
  const oauth = getOauth();

  const requestData = {
    url: baseURL + endpoint,
    method,
  };

  const requestHTTP =
    requestData.url + "?" + jQuery.param(oauth.authorize(requestData));

  return axios.get(requestHTTP);
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

export default Woocommerce;
