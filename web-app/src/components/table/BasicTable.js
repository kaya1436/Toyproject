import { useMemo } from "react";
import { useFilters, usePagination, useRowSelect, useTable } from "react-table";
import { Checkbox } from "./Checkbox";
import { COLUMNS } from "./columns";
import { GlobalFilter, PageFilter } from "./TableFilter";
import {
  ColumnFilter,
  FilterDiv,
  Page,
  PageDiv,
  Table,
  TableTop,
  TbodyTr,
  Thead,
  TheadTr,
} from "./tableStyle";
import Pagination from "./Paginatioin";

function BasicTable(props) {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => props.data, [props.data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    gotoPage,
    setPageSize,
    setFilter,
    rows,
    selectedFlatRows,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useFilters,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const { globalFilter, pageSize } = state;

  return (
    <>
      <TableTop>
        <div>
          <span style={{ color: "rgb(137,137,137)", marginRight: "2px" }}>
            Total
          </span>
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {rows.length}
          </span>
        </div>
        <FilterDiv>
          <Page>
            <PageFilter filter={pageSize} setPageSize={setPageSize} />
          </Page>
          <ColumnFilter>
            <GlobalFilter filter={globalFilter} setFilter={setFilter} />
          </ColumnFilter>
        </FilterDiv>
      </TableTop>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <TheadTr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </TheadTr>
          ))}
        </Thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TbodyTr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </TbodyTr>
            );
          })}
        </tbody>
      </Table>
      <PageDiv>
        <Pagination
          gotoPage={gotoPage}
          length={rows.length}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </PageDiv>

      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map(
                (row) => row.original.name
              ),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
}

export default BasicTable;
