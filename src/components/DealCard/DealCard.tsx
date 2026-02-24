import type { Deal } from "../../features/deals/dealTypes";

interface Props {
  deal: Deal;
}

export default function DealCard({ deal }: Props) {
  return (
    <div className="deal-card">
      <img src={deal.image} alt={deal.title} />

      <div className="deal-overlay">
        <h3>{deal.title}</h3>

        <div className="deal-stats">
          <span>${deal.price.toLocaleString()}</span>
          <span>Yield {deal.yield_percent}%</span>
          <span>Days left {deal.days_left}</span>
          <span>Sold {deal.sold_percent}%</span>
        </div>
      </div>
    </div>
  );
}
