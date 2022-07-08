import * as React from "react";
import { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { getVendoreList } from "../../stateManager/action/vendoreList/actionCreator";
import { getCurrentPosition } from "../../helper/getCurrentPosition";
import VendoreItem from "./component/vendoreItem";
import List from "../../component/list";

function VendoreList() {
  const dispatch: Dispatch<any> = useDispatch();
  const vendoreListState = useSelector(
    (state: { vendoreList: VendoreListStateType }) => state.vendoreList
  );
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);

  const getData = async (page: number) => {
    try {
      const position = await getCurrentPosition();
      const query: VendorsListApiParam = {
        page: page,
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
    getData(0);
  }, []);

  React.useEffect(() => {
    console.log(vendoreListState);
    setHasNextPage(vendoreListState.data.length < vendoreListState.count);
  }, [vendoreListState.data.length]);

  const columns = React.useRef([
    {
      dataField: "vendore",
      text: "",
      widthPercent: 100,
      formatter: VendoreItem,
    },
  ]).current;

  const loadNextPage = () => {
    setIsNextPageLoading(true);
    getData(vendoreListState.page + 1).then(() => {
      setIsNextPageLoading(false);
    });
  };

  return (
    <>
      <List
        columns={columns}
        data={vendoreListState.data}
        hasNextPage={hasNextPage}
        isNextPageLoading={isNextPageLoading}
        loadNextPage={loadNextPage}
      />
    </>
  );
}

export default VendoreList;
