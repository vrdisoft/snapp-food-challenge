import * as React from "react";
import { ColumnsType } from "./index";
interface ListItemProps<T> {
  columns: ColumnsType[];
  data: T;
}

function ListItem<T>({ columns, data }: ListItemProps<T>) {
  return (
    <div className="list-continer-body-row">
      {columns.map((item) => {
        /* @ts-ignore: Unreachable code error*/
        const dataItem = data[item.dataField];
        return (
          <>
            {!item.formatter && (
              <div
                className="list-continer-body-row-column"
                key={`${item.dataField}-${dataItem}`}
                style={{
                  flex: `0 1 ${item.widthPercent}%`,
                }}
              >
                {dataItem}
              </div>
            )}
            {!!item.formatter && (
              <div
                className="list-continer-body-row-column"
                key={`${item.dataField}--${dataItem}`}
                style={{
                  flex: `0 1 ${item.widthPercent}%`,
                }}
              >
                {React.createElement(item.formatter, {
                  item: data,
                  key: `${item.dataField}-formatter-${dataItem}`,
                })}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default ListItem;
