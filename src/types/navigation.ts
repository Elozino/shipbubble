import { Logistics } from ".";

export type AuthNavigatorParams = {
  Login: undefined;
};
export type MainNavigatorParams = {
  Home: undefined;
  Booking: undefined;
  History: undefined;
  BookingDetails: BookingDetailsProps;
};

export type BookingDetailsProps = {
  logistics: Logistics;
  orderInfo: Record<string, string>;
};
