import { ThemeProvider } from "@emotion/react";
import { BorderColor } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { customers, cycle, datagraph, dots, earning, failarrow, growth, star, successarrow } from "../Assets/Images";
import Dropdown from "../Components/Dropdown";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Sticker from "../Components/Sticker";
import { dashTheme } from "../dashTheme";
import { myTheme } from "../myTheme";

function createData(
  name: string,
  date: string,
  price: string,
  quantity: number,
  amount: string,
) {
  return { name, date, price, quantity, amount };
}


const rows = [
  createData('Ice Lemon Tea', '21 Sep, 2020', '$8.99', 157, ' $3,372.00 '),
  createData('Banana Small', '22 Oct, 2020', '$11.70', 123, ' $5,737.00 '),
  createData('Fresh Lemon Fruit', '24 May, 2020', '$17.84', 9000, ' $3,966.00 '),
  createData('Banana Milkshake', '24 May, 2020', '$14.81', 247, ' $3,443.00 '),
  createData('Cheese Roll', '1 Feb, 2020', '$6.48', 3000, ' $3,284.00 '),
  createData('Macadamia Chocola', '8 Sep, 2020', '$8.99', 2190, ' $7,035.00 '),
  createData('Sardine Buns Type A', '17 Oct, 2020', '$5.22', 155, ' $1,892.00 '),
  createData('Essential Waitrose D', '21 Sep, 2020', '$11.70', 171, ' $5,402.00 '),
];


export default function Dashboard() {
  return (
    <>
    <ThemeProvider theme = {myTheme}>
      <div className="main-container">
        <div className="leftsection ">
          <Sidebar />
        </div>
        <div className="rightsection ">
          <Header />
          <div className="main-content">
            <Grid container>
              <Typography component="h2" variant="h3" className="page-title">Dashboard</Typography>
            </Grid>
            <Grid container spacing={4} className="sticker">
              <Grid item lg={6}  className="internal-card">
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}    >
                    <Sticker heading="Customers" num="45,320" arrow={successarrow} class="success" percentage="21.25%" cardimg={customers} />
                  </Grid>
                  <Grid item xs={12} sm={6}   >
                    <Sticker heading="Orders" num="1,245" arrow={failarrow} class="fail" percentage="5.25%" cardimg={star} />
                  </Grid>
                  <Grid item xs={12} sm={6}   >
                    <Sticker heading="Earning" num="$ 56,890" arrow={failarrow} class="fail" percentage="3.24%" cardimg={earning} />
                  </Grid>
                  <Grid item xs={12} sm={6}   >
                    <Sticker heading="Growth" num="+ 60.20%" arrow={successarrow} class="success" percentage="15.89%" cardimg={growth} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6} className="data-graph">
                <Card className="card">
                  <Box>
                    <div className="card-head" >
                      <Typography component="h5" variant="h6" className="card-head">Revenue</Typography>
                      <Dropdown img="" name="" arrow={dots} />
                    </div>
                    <img src={datagraph} alt="" className="img-fluid" />
                  </Box>
                </Card>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
                <Card className="card tsp">
                  <Box>
                    <div className="card-head" >
                      <Typography component="h5" variant="h6" className="card-head">Top Selling Product</Typography>
                      <Dropdown img="" name="" arrow={dots} />
                    </div>
                    <TableContainer >
                      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                        <TableHead >
                          <TableRow 
                              sx={{  'th, td':{paddingLeft:0, paddingRight:0}}}
                          
                          >
                            <TableCell >Product Name</TableCell>
                            <TableCell component="th" align="left">Date</TableCell>
                            <TableCell component="th" align="left">Price</TableCell>
                            <TableCell component="th" align="left">Quantity</TableCell>
                            <TableCell component="th" align="right">Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody >
                          {rows.map((row) => (
                            <TableRow 
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0} , 'th, td':{paddingLeft:0, paddingRight:0}}}
                            >
                              <TableCell  scope="row">{row.name}</TableCell>
                              <TableCell  align="left">{row.date}</TableCell>
                              <TableCell  align="left">{row.price}</TableCell>
                              <TableCell  align="left">{row.quantity}</TableCell>
                              <TableCell  align="right">{row.amount}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Card>
              </Grid>

              <Grid item  xs={12} md={4} lg={3} >
                <Card className="card">
                  <Box>
                    <div className="card-head" >
                      <Typography component="h5" variant="h6" className="card-head">Campaign</Typography>
                      <Dropdown img="" name="" arrow={dots} />
                    </div>
                    <div className="progress">
                      <div className="progress-content">
                        <img src={cycle} alt="" className="img-fluid" />
                        <div className="sixty">
                          <Typography component="h5" variant="h4" className="sixty-percentage">60%</Typography>
                          <Typography component="h6" variant="subtitle1" className="sixty-text">Progress</Typography>
                        </div>
                      </div>
                      <div className="progress-stat">
                        <Typography component="h5" variant="h6" className="pro-earn"> $53,000.00</Typography>
                        <Typography component="h6" variant="body1" className="pro-text">Used Balance this Billing Cycle</Typography>
                      </div>
                    </div>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>          
      </ThemeProvider>             
    </>
  );
}
