// import { useGetDealsQuery } from "../../features/deals/dealsAPI";
// import DealCard from "../DealCard/DealCard";
// import css from "./DealsList.module.css";

// export default function DealsList() {
//   const { data: items, isLoading: loading } = useGetDealsQuery();

//   if (loading) return <p>Loading...</p>;

//   return (
//     <section className={css.section}>
//       <h2>Open Deals</h2>

//       <div className={css.grid}>
//         {items?.map((deal: any) => (
//           <DealCard key={deal.id} deal={deal} />
//         ))}
//       </div>
//     </section>
//   );
// }
