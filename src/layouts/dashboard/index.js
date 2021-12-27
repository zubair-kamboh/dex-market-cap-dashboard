// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

import "./dashboard.css";
// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import MDTypography from "components/MDTypography";

import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

// card images
import sundaeswap from "../../assets/images/images/sundae.svg";
import livenewspairs from "../../assets/images/images/livenewpairs.svg";
import pairexplorer from "../../assets/images/images/pairexplorer.svg";
import bigswapexplorer from "../../assets/images/images/bigswapexplorer.svg";
import switcvertical from "../../assets/images/images/switch-vertical.svg";
import bolt from "../../assets/images/images/lightning-bolt.svg";
import cd from "../../assets/images/images/currency-dollar.svg";
import ergo from "../../assets/images/images/ergo.svg";
import mineswap from "../../assets/images/images/mineswap.png";
import redarr from "../../assets/images/images/green-arrow-up.svg";
import greenarr from "../../assets/images/images/red-arrow-down.svg";

function Dashboard() {
  // const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <SimpleBlogCard
                image={sundaeswap}
                title="SundaeSwap"
                b1img={livenewspairs}
                b1text="Live New Pairs"
                b2img={pairexplorer}
                b2text="Pair Explorer"
                b3img={bigswapexplorer}
                b3text="Big Swap Explorer"
                b4img={switcvertical}
                b4text="Multiswap"
                b5img={bolt}
                b5text="New Pairs Bot"
                b6img={cd}
                b6text="Price Bot"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <SimpleBlogCard
                image={ergo}
                title="Ergo"
                b1img={livenewspairs}
                b1text="Live New Pairs"
                b2img={pairexplorer}
                b2text="Pair Explorer"
                b3img={bigswapexplorer}
                b3text="Big Swap Explorer"
                b4img={switcvertical}
                b4text="Multiswap"
                b5img={bolt}
                b5text="New Pairs Bot"
                b6img={cd}
                b6text="Price Bot"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <SimpleBlogCard
                image={mineswap}
                title="Minswap"
                b1img={livenewspairs}
                b1text="Live New Pairs"
                b2img={pairexplorer}
                b2text="Pair Explorer"
                b3img={bigswapexplorer}
                b3text="Big Swap Explorer"
                b4img={switcvertical}
                b4text="Multiswap"
                b5img={bolt}
                b5text="New Pairs Bot"
                b6img={cd}
                b6text="Price Bot"
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <MDBox>
              <MDTypography style={{ marginBottom: ".6rem" }}>🔥 Hot Pairs</MDTypography>
              <DataTable
                table={{
                  columns: [
                    { Header: "#", accessor: "id", width: "10%" },
                    { Header: "Name", accessor: "name", width: "15%" },
                    { Header: "Movement", accessor: "movement", width: "15%" },
                    { Header: "Price USD", accessor: "price", width: "15%" },
                    { Header: "Total Locked ADA", accessor: "ada", width: "15%" },
                    { Header: "Volume (24H)", accessor: "volume", width: "15%" },
                    { Header: "Action", accessor: "action", width: "15%" },
                  ],
                  rows: [
                    {
                      id: "1",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={redarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "2",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={redarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "3",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={redarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "4",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={redarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "5",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={greenarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "6",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={greenarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "7",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={greenarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "8",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={greenarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "9",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={greenarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "10",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={greenarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "11",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={greenarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "12",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={greenarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                    {
                      id: "1",
                      name: (
                        <MDTypography variant="body1">
                          tDRIP <img src={sundaeswap} width={40} alt="sundaeswap" />
                        </MDTypography>
                      ),
                      movement: (
                        <MDTypography variant="body1">
                          <img src={greenarr} width={20} alt="sundaeswap" /> 1
                        </MDTypography>
                      ),
                      price: (
                        <MDTypography
                          variant="body1"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#5BC08E",
                          }}
                        >
                          $0.00000034566
                        </MDTypography>
                      ),
                      ada: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          1,490,870.08
                        </MDTypography>
                      ),
                      volume: (
                        <MDTypography variant="h3" style={{ fontSize: "1rem" }}>
                          $0.0000003444
                        </MDTypography>
                      ),
                      action: (
                        <MDButton variant="text" color="info">
                          Live data
                        </MDButton>
                      ),
                    },
                  ],
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
