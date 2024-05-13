export interface IUserCredential {
  username: string;
  password: string;
}

export interface AppContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserCredentials: React.Dispatch<React.SetStateAction<IUserCredential>>;
  userCredentials: IUserCredential;
}

export type orderStatus = "all" | "completed" | "ongoing";

export type HistoryCardProps = {
  item: orderProps;
};

export type orderProps = {
  deliveryId: string;
  pickup: string;
  deliverTo: string;
  status: orderStatus;
  userId: string;
  username: string;
  sender: string;
  receiver: string;
  timeStamp: string;
  price: string;
  placeId: string;
  dispatcher: {
    name: string;
    logo: string;
    location: string;
  };
};

export type LogisticsArray = Logistics[];

export interface Logistics {
  courier_id: string;
  courier_name: string;
  courier_image: string;
  service_code: string;
  insurance: Insurance;
  discount: Discount;
  service_type: string;
  waybill: boolean;
  is_cod_available: boolean;
  tracking_level: number;
  ratings: number;
  votes: number;
  connected_account: boolean;
  rate_card_amount: number;
  rate_card_currency: string;
  pickup_eta: string;
  pickup_eta_time: string;
  dropoff_station?: DropoffStation;
  pickup_station?: PickupStation;
  delivery_eta: string;
  delivery_eta_time: string;
  info?: unknown | null;
  currency: string;
  vat: number;
  total: number;
  tracking: Tracking;
}

export interface Insurance {
  code: string;
  fee: number;
}

export interface Discount {
  percentage: number;
  symbol: string;
  discounted?: number | null;
}

export interface DropoffStation {
  name: string;
  phone: string;
  address: string;
}

export interface PickupStation {
  name: string;
  phone?: string;
  address: string;
}

export interface Tracking {
  bars: number;
  label: string;
}
