
// import { useQuery } from "@tanstack/react-query";
// import GetUser from "../utils/GetUser";

// const useOrders = () => {
//     const user = GetUser()
//     const email=user.email;
//   const { data, isLoading,refetch } = useQuery({
//     queryKey: ["orders"],
//     queryFn: async () => {
//       const data = await fetch(`https://seasons-server.vercel.app/orders/${email}`);
//       const orders = await data.json();
//       return orders;
//     },
//   });

//   return { data, isLoading,refetch };
// };

// export default useOrders;

 