import type { Deal } from "../../features/deals/dealTypes";
import css from "./DealCard.module.css";

interface Props {
  deal: Deal;
}

export default function DealCard({ deal }: Props) {
  return (
    <div className={css.dealCard}>
      <img src={deal.image} alt={deal.title} />

      <div className={css.dealOverlay}>
        <h3>{deal.title}</h3>

        <div className={css.dealStats}>
          <p>Price {Number(deal.price).toLocaleString("uk-UA")} Dhs</p>
          <p>Ticket - {Number(deal.ticket).toLocaleString("uk-UA")} Dhs</p>
          <p>Yield {deal.yield_percent}%</p>
          <p>Days left {deal.days_left}</p>
          <div className={css.sold}>Sold {deal.sold_percent}%</div>
        </div>
      </div>
    </div>
  );
}
