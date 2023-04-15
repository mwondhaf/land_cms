import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Collapse, Icon } from "@mui/material";
import TopBar from "./TopBar";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { sideBarMenu1 } from "../../data/menu";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import "../../index.css";
import GroupIcon from "@mui/icons-material/Group";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import AddHomeIcon from "@mui/icons-material/AddHome";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SegmentIcon from "@mui/icons-material/Segment";
import { shades } from "../../theme";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function LayoutWrapper() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = React.useState<number | undefined>();
  const [activeRoute, setActiveRoute] = React.useState<string | undefined>();

  console.log(activeRoute);

  const handleExpandClick = (index: number) => {
    setExpanded(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar {...{ open, setOpen }} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarMenu1.map((menu, index) => (
            <ListItem key={menu.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  handleExpandClick(index);
                  menu.subMenus.length < 1
                    ? navigate(menu.link?.toString()!)
                    : "";
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                {!open && (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {menu.name === "Dashboard" ? (
                      <DashboardIcon />
                    ) : menu.name === "Properties" ? (
                      <MapsHomeWorkIcon />
                    ) : menu.name === "Customers" ? (
                      <GroupIcon />
                    ) : null}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  // primary={menu.name}
                  sx={{ opacity: open ? 1 : 0 }}
                >
                  <Typography
                    sx={{ textDecoration: "none", fontWeight: "600" }}
                  >
                    {menu.name}
                  </Typography>
                </ListItemText>

                {menu.subMenus?.length > 0 ? (
                  expanded === index ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : (
                  ""
                )}
              </ListItemButton>

              {menu.subMenus?.map((item) => (
                <Collapse
                  key={item.name}
                  in={expanded === index}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) => {
                        if (isActive) {
                          setActiveRoute(item.link);
                        }
                        return "";
                      }}
                      style={() => ({
                        textDecoration: "none",
                      })}
                    >
                      <ListItemButton
                        sx={{
                          pl: 4,
                          py: 0.5,
                          bgcolor:
                            activeRoute === item.link
                              ? shades.primary.light
                              : "",
                        }}
                        onClick={() => navigate(item.link)}
                      >
                        <ListItemIcon>
                          <Icon
                            sx={{
                              fontSize: "18px",
                            }}
                          >
                            {/* <FiberManualRecordIcon fontSize="inherit" /> */}
                            {item.link === "/properties/add-property" ? (
                              <NoteAddIcon
                                fontSize="inherit"
                                color={
                                  activeRoute === item.link
                                    ? "primary"
                                    : "inherit"
                                }
                              />
                            ) : (
                              <SegmentIcon
                                fontSize="inherit"
                                color={
                                  activeRoute === item.link
                                    ? "primary"
                                    : "inherit"
                                }
                              />
                            )}
                          </Icon>
                        </ListItemIcon>
                        <ListItemText sx={{ p: 0, m: 0 }} disableTypography>
                          <Typography
                            variant="caption"
                            sx={{
                              fontWeight:
                                activeRoute === item.link ? "700" : "500",
                            }}
                            color={
                              activeRoute === item.link
                                ? "primary"
                                : "textSecondary"
                            }
                          >
                            {item.name}
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                </Collapse>
              ))}
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pb: 2,
          backgroundColor: shades.tone.bg,
        }}
      >
        <DrawerHeader />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
