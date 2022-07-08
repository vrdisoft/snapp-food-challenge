type ActinType = {
  type: string;
  payload?: any;
};

type VendorsListApiParam = {
  "page": number;
  "page-size": number;
  "lat": number;
  "long": number;
};

type PositionType = {
  lat: number;
  long: number;
}

type VendoreListStateType = {
  data: any[];
  page: number;
  count: number;
  open_count: number;
};

type VendoreItemType = {
  data: {
    title: string;
    vendorCode: string;
    voteCount: number;
    rate: number;
    logo: string;
    defLogo: string;
    coverPath: string;
    backgroundImage: string;
    backgroundImageCustom: string;
    menuUrl: string;
    best_coupon: string;
    description: string;
    deliveryFee: string;
  }
}