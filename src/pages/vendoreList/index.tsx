import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { getVendoreList } from "../../stateManager/action/vendoreList/actionCreator";
import { getCurrentPosition } from "../../helper/getCurrentPosition";

function VendoreList() {
  const dispatch: Dispatch<any> = useDispatch();
  const vendoreListState = useSelector(
    (state: { vendoreList: VendoreListStateType }) => state.vendoreList
  );

  const getData = async () => {
    try {
      const position = await getCurrentPosition();
      const query: VendorsListApiParam = {
        page: 0,
        "page-size": 10,
        lat: position.lat,
        long: position.long,
      };
      dispatch(getVendoreList(query));
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    console.log(vendoreListState);
  }, [vendoreListState]);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default VendoreList;
