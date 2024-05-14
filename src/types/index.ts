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

const dat = {
  logistics: {
    connected_account: false,
    courier_id: "fez-delivery_safelocker",
    courier_image:
      "https://res.cloudinary.com/delivry/image/upload/v1694592734/courier_images/fez_logo_njmlnz.png",
    courier_name: "Fez Safe Locker (Pick Up)",
    currency: "NGN",
    delivery_eta: "Dropoff in 24 Hours",
    delivery_eta_time: "2024-05-15 20:44:17",
    discount: { discounted: 12, percentage: 20, symbol: "%" },
    dropoff_station: null,
    info: null,
    insurance: { code: "not available", fee: 0 },
    is_cod_available: false,
    pickup_eta: "Within 48 Hours",
    pickup_eta_time: "2024-05-15 20:44:17",
    pickup_station: {
      address:
        "Ap Filling Station, 39 Oba Akran Ave, Ikeja, Lagos 101233, Lagos, Lagos, Nigeria",
      name: "Fez Safe Locker",
      phone: null,
    },
    rate_card_amount: 1416.96,
    rate_card_currency: "NGN",
    ratings: 4.6,
    service_code: "fez-delivery",
    service_type: "dropoff",
    total: 1416.96,
    tracking: { bars: 3, label: "Average" },
    tracking_level: 6,
    vat: 75,
    votes: 91,
    waybill: false,
  },
  orderInfo: {
    category: "Medical Supplies",
    delivery: "ChIJTVYf6fPROxAR4eMdwPZMNRU",
    item_details: "Sdf",
    parcel: "8",
    pickup: "ChIJTVYf6fPROxAR4eMdwPZMNRU",
    receiver: "Cf",
    sender: "Re",
  },
};
