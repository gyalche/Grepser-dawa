import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Loading from "./Loading";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#DCE2F0",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F5FB",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  phone: string,
  email: string,
  website: string,
  address: string
) {
  return { name, phone, email, website, address };
}

interface tableTypes {
  heading: Array<string>;
  headIcon?: any;
  data: any;
  loading?: boolean;
}
export default function MyTable({
  heading,
  headIcon,
  data,
  loading,
}: tableTypes) {
  const rows = data?.map((data: any) =>
    createData(
      data?.name,
      data?.phone,
      data?.email,
      data?.website,
      data?.address.street
    )
  );
  return (
    <TableContainer sx={{ overflow: "auto" }} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {heading?.map((data) => (
              <StyledTableCell align="right" key={data}>
                <Box className="table_head">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src={headIcon[0]} />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: "19.12px",
                      }}
                    >
                      {data}
                    </Typography>
                  </Box>
                  <img src={headIcon[1]} />
                </Box>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody sx={{ width: "100%" }}>
          {loading ? (
            <Loading totalLoading={[1, 2, 3, 4]} />
          ) : (
            <>
              {rows?.map((row: any) => (
                <StyledTableRow className="table_body" key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.phone}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.website}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.address}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
