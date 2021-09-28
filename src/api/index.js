// import axios from "axios";

// const apiEndpoints = (() => {
//   const prodEndpoints = {
//     apiEndpoint:
//       "http://ec2-35-178-197-89.eu-west-2.compute.amazonaws.com/api/",
//   };
//   const devEndpoints = {
//     apiEndpoint: "http://localhost:5000/api/",
//   };
//   const env = process.env.NODE_ENV;
//   console.log(env, "-- env --");
//   if (["dev", "development"].includes(env)) {
//     return devEndpoints;
//   }
//   return prodEndpoints;
// })();

// export default axios.create({
//   baseURL: apiEndpoints.apiEndpoint,
// });
