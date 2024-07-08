import makeRequest from "../utils/woocommerce"

const Category = {
  get: () => {
    return makeRequest("/products/categories");
  },
  getByID: (id) => {
    return makeRequest(`/products/categories/${id}`);
  },
  post: (categoryData) => {
    return makeRequest("/products/categories", "POST", categoryData);
  },
  update: (id, categoryData) => {
    return makeRequest(`/products/categories/${id}`, "PUT", categoryData);
  },
  delete: (id) => {
    return makeRequest(`/products/categories/${id}`, "DELETE");
  },
};

export default Category;
