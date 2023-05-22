import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Fab from '@mui/material/Fab';

const columns = [
  { id: "Order", label: "Order(details)", minWidth: 170 },
  { id: "code", label: "Order-\u00a0Code", minWidth: 100 },
  {
    id: "pickup_location",
    label: "Pickup-\u00a0Location",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Destination_Location",
    label: "Destination\u00a0Location",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Price",
    label: "Price(fixed)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(Order, code, pickup_location, Destination_Location, Price) {
  return { Order, code, pickup_location, Destination_Location, Price };
}

const rows = [
  createData("20 Tonne(s) Almera", "IN-001", "Indore(MP)", "Karera(MP)" , "₹ 19,000"),
  createData("5 Tonne(s) Wood","IN-002", "Indore(MP)", "Mandleshwar(MP)", "₹ 3,000"),
  createData("1.3 Tonne(s) Vehicles or car", "IN-003", "Indore(MP)", "Patna(BR)", "₹ 1,000"),
  createData("6 Tonne(s) Milk products", "IN-004", "Indore(MP)", "Bhiwandi(MH)","₹ 9,600"),
  createData("6 Tonne(s) Chocolate", "IN-005", "Indore(MP)", "Bhiwandi(MH)", "₹ 1,600"),
  createData("11 Tonne(s) Iron sheets or bars or scraps", "IN-006", "Indore(MP)", "Sasaram(BR)", "₹ 50,000"),
  createData("3.5 Tonne(s) Machinery new or old", "IN-007", "Indore(MP)", "Jaipur(RJ)", "₹ 15,000"),
  createData("1.3 Tonne(s) Vehicles or car", "IN-008", "Indore(MP)", "Patna(BR)", "₹ 1,000"),
  createData("6 Tonne(s) Milk products", "IN-009", "Indore(MP)", "Bhiwandi(MH)","₹ 9,600"),
  createData("6 Tonne(s) Chocolate", "IN-010", "Indore(MP)", "Bhiwandi(MH)", "₹ 1,600"),
  createData("20 Tonne(s) Almera", "IN-011", "Indore(MP)", "Karera(MP)" , "₹ 19,000"),
  createData("5 Tonne(s) Wood","IN-012", "Indore(MP)", "Mandleshwar(MP)", "₹ 3,000"),
  createData("1.3 Tonne(s) Vehicles or car", "IN-013", "Indore(MP)", "Patna(BR)", "₹ 1,000"),
  createData("6 Tonne(s) Milk products", "IN-014", "Indore(MP)", "Bhiwandi(MH)","₹ 9,600"),
  createData("20 Tonne(s) Soya churi", "IN-015", "Indore(MP)", "Amritsar(PB)", "₹ 3,700"),
];

export default function MyLoads() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <h1>My Loads</h1>
      <br />
      <Fab variant="extended">
        Listing
      </Fab> &nbsp;
      <Fab variant="extended" disable>
        MY Bids
      </Fab>
      <br />
      <div>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            {columns.map((column) => (
                <TableCell
                key={column.id}
                align={column.align}
                style={{ top: 57, minWidth: column.minWidth }}
                >
                {column.label}
              </TableCell>
            ))}
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                      <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      >
                      {columns.map((column) => {
                          const value = row[column.id];
                          return (
                              <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                    })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Paper>
          </div>
    </div>
  );
}
