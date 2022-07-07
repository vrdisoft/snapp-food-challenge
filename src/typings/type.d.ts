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
