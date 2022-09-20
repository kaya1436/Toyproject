import { useEffect, useState } from "react";
import { useFilters, usePagination, useRowSelect, useTable } from "react-table";
import { Checkbox } from "./Checkbox";
import { PageFilter, RegionFilter } from "./TableFilter";
import {
  ColumnFilter,
  FilterDiv,
  Loading,
  Page,
  PageDiv,
  Table,
  TableTop,
  TbodyTr,
  Thead,
  TheadTr,
} from "./tableStyle";
import Pagination from "./Paginatioin";
import { Oval } from "react-loader-spinner";

function BasicTable({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    gotoPage,
    pageCount,
    setPageSize,
    setFilter,
    rows,
    selectedFlatRows,
  } = useTable(
    { columns, data, initialState: { pageSize: 10 } },
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

  const { regionFilter, pageSize } = state;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

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
            <RegionFilter filter={regionFilter} setFilter={setFilter} />
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
          {rows.length > 0 && !loading ? (
            page.map((row) => {
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
            })
          ) : (
            <tr>
              <td colSpan={8}>
                <Loading>
                  <Oval
                    height={70}
                    color="rgb(0,0,0)"
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="rgb(210,210,210)"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </Loading>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <PageDiv>
        <Pagination
          gotoPage={gotoPage}
          pageSize={pageSize}
          pageCount={pageCount}
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
