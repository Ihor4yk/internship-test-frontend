import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { getDeals } from "../../features/deals/dealsSlice";
import DealCard from "../DealCard/DealCard";
import css from "./DealsList.module.css";

export default function DealsList() {
  const dispatch = useDispatch<AppDispatch>();
  const { deals, loading, error } = useSelector((state: RootState) => state.deals);

  useEffect(() => {
    dispatch(getDeals());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Open Deals</h2>
      <div className={css.dealsGrid}>
        {deals.map(deal => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
}
