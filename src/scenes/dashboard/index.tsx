import DoughnutGraph from "../../components/dashboard/DoughnutGraph";
import {
  Avatar,
  AvatarGroup,
  Box,
  Grid,
  Icon,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { shades } from "../../theme";
import { TrendingDown, TrendingUp } from "@mui/icons-material";
import DailySalesBarGraph from "../../components/dashboard/DailySalesBarGraph";
import MonthlySalesLineChart from "../../components/dashboard/MonthlySalesLineChart";
import SalesDataTable from "../../components/sales/SalesDataTable";
import PageWrapper from "../global/PageWrapper";

const Dashboard = () => {
  return (
    <Box p={3}>
      <Grid container justifyContent={"space-between"}>
        <Grid item md={6}>
          <Grid container gap={0.5} justifyContent={"space-between"}>
            <Grid p={2} md={6} item component={Paper} elevation={0}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack>
                  <Typography variant="h6" fontWeight={"700"}>
                    69M/-
                  </Typography>
                  <Typography
                    fontWeight={"500"}
                    variant="body2"
                    color="textSecondary"
                  >
                    Plot Sales
                  </Typography>
                </Stack>
                <Icon>
                  <TrendingUp color="success" />
                </Icon>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Box width={150}>
                  <DoughnutGraph />
                </Box>
                <Stack>
                  <Typography
                    sx={{ color: shades.green.main }}
                    variant="caption"
                  >
                    50 * 100
                  </Typography>
                  <Typography sx={{ color: shades.tone.red }} variant="caption">
                    100 * 100{" "}
                  </Typography>
                  <Typography
                    sx={{ color: shades.primary.main }}
                    variant="caption"
                  >
                    Other{" "}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid p={2} md={5.5} item component={Paper} elevation={0}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack>
                  <Typography variant="h6" fontWeight={"700"}>
                    UGX 7,500,000
                  </Typography>
                  <Typography
                    fontWeight={"500"}
                    variant="body2"
                    color="textSecondary"
                  >
                    Average Daily Sales
                  </Typography>
                </Stack>
                <Icon>
                  <TrendingDown color="error" />
                </Icon>
              </Stack>
              <Stack justifyContent={"flex-end"} height={"70%"}>
                <DailySalesBarGraph />
              </Stack>
            </Grid>
            <Grid my={2} p={2} md={6} item component={Paper} elevation={0}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack>
                  <Typography variant="h6" fontWeight={"700"}>
                    16 Plots
                  </Typography>
                  <Typography
                    fontWeight={"500"}
                    variant="body2"
                    color="textSecondary"
                  >
                    Sold this month
                  </Typography>
                </Stack>
                <Icon>
                  <TrendingUp color="success" />
                </Icon>
              </Stack>
              <Stack
                justifyContent={"flex-end"}
                width={"100%"}
                height={"150px"}
              >
                <Box>
                  <Stack
                    my={1}
                    direction={"row"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      fontWeight={"500"}
                      variant="body2"
                      color="textSecondary"
                    >
                      18 Plots left
                    </Typography>
                    <Typography
                      fontWeight={"500"}
                      variant="body2"
                      color="textSecondary"
                    >
                      62% Sold
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    color="success"
                    sx={{ height: 10, borderRadius: 2 }}
                    value={62}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid my={2} p={2} md={5.5} item component={Paper} elevation={0}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack>
                  <Typography variant="h6" fontWeight={"700"}>
                    14 New Customers
                  </Typography>
                  <Typography
                    fontWeight={"500"}
                    variant="body2"
                    color="textSecondary"
                  >
                    Gained this month
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                justifyContent={"flex-end"}
                width={"100%"}
                height={"150px"}
                alignItems={"start"}
              >
                {/* <DoughnutGraph /> */}
                <Box>
                  <AvatarGroup total={14}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.pexels.com/photos/8374345/pexels-photo-8374345.jpeg?auto=compress&cs=tinysrgb&w=800"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="https://images.pexels.com/photos/3848184/pexels-photo-3848184.jpeg?auto=compress&cs=tinysrgb&w=800"
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="https://images.pexels.com/photos/11191614/pexels-photo-11191614.jpeg?auto=compress&cs=tinysrgb&w=800"
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src="https://images.pexels.com/photos/7562187/pexels-photo-7562187.jpeg?auto=compress&cs=tinysrgb&w=800"
                    />
                  </AvatarGroup>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5.7} p={2} component={Paper} elevation={0}>
          <Stack height={"100%"} justifyContent={"space-between"}>
            <Stack>
              <Typography variant="h6" fontWeight={"700"}>
                Sales this year
              </Typography>
              <Typography
                fontWeight={"500"}
                variant="body2"
                color="textSecondary"
              >
                Customers from all channels
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" fontWeight={"700"}>
                UGX 147,000,000
              </Typography>
              <Typography
                fontWeight={"500"}
                variant="body2"
                color="textSecondary"
              >
                Needed to reach target
              </Typography>
            </Stack>
            <MonthlySalesLineChart />
          </Stack>
        </Grid>
      </Grid>
      <Paper elevation={0} sx={{ p: 2, my: 2 }}>
        <Typography my={2} variant="body1" fontWeight={"700"}>
          Latest Sales
        </Typography>
        <SalesDataTable />
      </Paper>
    </Box>
  );
};

export default Dashboard;
