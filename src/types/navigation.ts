import { Logistics, oderInfoProp, orderListProp } from ".";

export type AuthNavigatorParams = {
  Login: undefined;
};
export type MainNavigatorParams = {
  Home: undefined;
  Booking: undefined;
  History: undefined;
  BookingDetails: BookingDetailsProps;
  HistoryDetails: { item: orderListProp };
};

export type BookingDetailsProps = {
  logistics: Logistics;
  orderInfo: oderInfoProp;
};
