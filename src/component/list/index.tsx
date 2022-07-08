import { FixedSizeList as VirtualizedList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

import "./style/index.scss";
import ListItem from "./listItem";
export type ColumnsType = {
  dataField: string;
  text: string;
  widthPercent: number;
  formatter?: any;
};

interface ListProps<T> {
  columns: ColumnsType[];
  data: T[];
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  loadNextPage: () => void;
  showHeader?: boolean;
}

function List<T>({
  columns,
  data,
  hasNextPage,
  isNextPageLoading,
  loadNextPage,
  showHeader,
}: ListProps<T>) {
  const itemCount = hasNextPage ? data.length + 1 : data.length;
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
  const isItemLoaded = (index: number) => !hasNextPage || index < data.length;
  console.log("isNextPageLoading", isNextPageLoading, hasNextPage);
  /* @ts-ignore: Unreachable code error*/
  function rowRenderer({ index, style }) {
    let content;
    if (!isItemLoaded(index)) {
      content = "Loading...";
    } else {
      content = <ListItem key={index} columns={columns} data={data[index]} />;
    }
    return (
      <div key={index} style={style}>
        {content}
      </div>
    );
  }

  return (
    <div className="list-continer">
      {showHeader && (
        <div className="list-continer-header">
          {columns.map((item) => (
            <div
              className="list-continer-header-column"
              key={item.dataField}
              style={{
                flex: `0 1 ${item.widthPercent}%`,
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
      <div className="list-continer-body">
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadMoreItems}
            >
              {({ onItemsRendered, ref }) => (
                <VirtualizedList
                  width={width}
                  height={height}
                  itemCount={itemCount}
                  itemSize={260}
                  onItemsRendered={onItemsRendered}
                  ref={ref}
                >
                  {rowRenderer}
                </VirtualizedList>
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default List;
