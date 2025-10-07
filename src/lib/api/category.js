import axiosClient from './axiosClient';

export const categoriesApi = {
 getCategories: () =>
    axiosClient.post(`/categories/list`, {
      status: 1, 
    }),

  getCategoriesById: (id) => {
    return axiosClient.get(`/categories/Findby/${id}`);
  },

Sociallinks: () => {
  return axiosClient.get(`/social-links/list`);
},
subcribers: (payload = { name: "Guest User", email: "test@example.com" }) => {
  return axiosClient.post(`/subscribers/create`, payload);
},
// subCategories: (limit) => {
//   return axiosClient.get(`subcategories/list`, {
//     params: { limit: limit, }
//   });
// },
Banner:()=>{
    return axiosClient.get(`/gallery/list`)
},
BooksFilterByTag: (limit) => {
  return axiosClient.get(`books/filter-by-tag`, {
    params: {
      limit: limit,  // backend me ?limit=10 jayega
    },
  });
},

// yearWise:()=>{
//     return axiosClient.get(`/books/filter`)
// }
 yearWise: (year, month) => {
    if (year && month) {
      return axiosClient.get(`/books/filter?year=${year}&month=${month}`);
    }
    return axiosClient.get(`/books/filter`); // default
  },

  contactInfo:()=>{
    return axiosClient.get(`/settings/get`)
  }
};


