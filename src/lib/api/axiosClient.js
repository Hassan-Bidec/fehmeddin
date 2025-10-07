import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error.response) {
      // Handle 401 Unauthorized
      // if (error.response.status === 401) {
      //   try {
      //     const res = await axios.post(
      //       "http://fehmuddin-nest.bidecsol.co.uk/admin/login",
      //       {
      //         email: "admin@gmail.com",
      //         password: "123456789",
      //       }
      //     );

      //     if (res.data?.access_token) {
      //       const newToken = res.data.access_token;
      //       localStorage.setItem("token", newToken);

      //       // Retry the failed request with new token
      //       error.config.headers.Authorization = `Bearer ${newToken}`;
      //       return axiosClient(error.config);
      //     }
      //   } catch (err) {
      //     console.error("Token refresh failed:", err);
      //     localStorage.removeItem("token");
      //     window.location.href = "/login";
      //   }
      // }

      // Convert to consistent error format
      return Promise.reject({
        message: error.response.data?.message || "An error occurred",
        status: error.response.status,
        data: error.response.data,
      });
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
