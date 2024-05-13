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
