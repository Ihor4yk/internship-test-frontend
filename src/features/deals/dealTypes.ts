export interface Deal {
  id: number;
  title: string;
  image: string;
  price: number;
  ticket: number;
  yield_percent: number;
  days_left: number;
  sold_percent: number;
}

export interface DealsState {
  deals: Deal[];
  loading: boolean;
  error: string | null;
}
