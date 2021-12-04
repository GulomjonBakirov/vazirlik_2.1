import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Loading from "../components/Loading";
import TabContent from "../components/TabContent";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideos, clearErrors } from "../store/actions/videoActions";
import { getAllTests } from "../store/actions/testActions";
import { logout, loadUser } from "../store/actions/userActions";
import {
  UPDATE_USER_LESSON_RESET,
  UPDATE_USER_GRADE_RESET,
} from "../store/constants/userConstants";
import Start from "../components/Test/Start";
import Quiz from "../components/Test/Quiz";
import LastTest from "../components/takeCertificateTest/LastTest";
import TakeCertificate from "./TakeCertificate";
import "../components/Test/over.css";

import { message } from "antd";
import "antd/dist/antd.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTab } from "../Context/TabProvider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const drawerWidth = 240;

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function ResponsiveDrawer(props) {
  const [value, setValue] = useTab();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [testGrade, setTestGrade] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = useLocation();

  const { loading, error, videos } = useSelector((state) => state.videos);
  const { isUpdated } = useSelector((state) => state.lessons);
  const { isUpdated: gradeIsUpdated, grade } = useSelector(
    (state) => state.grade
  );

  const {
    loading: testLoading,
    error: testError,
    tests,
  } = useSelector((state) => state.tests);
  const {
    loading: userLoading,
    error: userError,
    user,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllVideos());
    dispatch(getAllTests());

    if (JSON.stringify(user) === "{}") {
    } else {
      if (
        user?.user.Dars === sortedVideos[0]?.length - 1 &&
        user.user?.Dars < value
      ) {
        setValue(sortedVideos[0]?.length);
      } else if (
        user?.user.Dars ===
          allVideos[0]?.length + sortedVideos[0]?.length - 1 &&
        user.user?.Dars < value
      ) {
        setValue(allVideos[0]?.length + sortedVideos[0]?.length);
      } else {
        setValue(user?.user.Dars);
      }
    }
    if (error) {
      message.error(error);
      dispatch(clearErrors());
    }
    if (testError) {
      message.error(testError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      message.success("Next Lesson");
      dispatch(loadUser());
      dispatch({ type: UPDATE_USER_LESSON_RESET });
    }

    if (gradeIsUpdated) {
      message.success("Next Lesson");
      dispatch(loadUser());
      dispatch({ type: UPDATE_USER_GRADE_RESET });
    }

    if (user && user.user?.Ball[0].ball + user.user?.Ball[1].ball > 60) {
      setFinish(true);
    }
  }, [dispatch, error, testError, isUpdated, user, gradeIsUpdated]);

  let sortedVideos = [];
  let allVideos = [];
  const categoryPath = url.pathname.split("/")[2];

  if (Array.isArray(videos)) {
  } else {
    for (const key in videos) {
      if (key.toLowerCase() === "word") {
        sortedVideos.push(videos[key]);
      } else if (key.toLowerCase() === "excel") {
        allVideos.push(videos[key]);
      }
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    message.success("Muvafaqqiyatli Tizimdan Chiqildi");
  };
  const drawer = (
    <div>
      <Toolbar className="text-center">
        {userLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Link to="/profile">
            {user && `${user.user?.name} ${user.user?.Surname}`}
          </Link>
        )}
      </Toolbar>
      <Divider style={{ height: "0px" }} />
      <List style={{ paddingTop: "0px" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          // sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {sortedVideos &&
            sortedVideos[0]?.map((video, i) => (
              <Tab
                label={`${i + 1} - dars`}
                {...a11yProps(i)}
                disabled={i <= (user && user.user?.Dars) ? false : true}
              />
            ))}
          <Tab
            label={`Oraliq Test`}
            {...a11yProps(sortedVideos[0]?.length + 1)}
            disabled={
              sortedVideos[0]?.length - 1 === (user && user.user?.Dars) ||
              sortedVideos[0]?.length - 1 < (user && user.user?.Dars)
                ? false
                : true
            }
          />
          {allVideos &&
            allVideos[0]?.map((video, i) => (
              <Tab
                label={`${sortedVideos[0]?.length + i + 1} - dars`}
                {...a11yProps(sortedVideos[0]?.length + i)}
                disabled={
                  user &&
                  user.user?.Ball[0]?.ball > 60 &&
                  (user && user.user?.Dars + 2) > sortedVideos[0]?.length &&
                  sortedVideos[0]?.length + i <= (user && user.user?.Dars)
                    ? false
                    : true
                }
              />
            ))}
          <Tab
            label={`Sertifikat Olish`}
            {...a11yProps(allVideos[0]?.length + 1)}
            disabled={
              sortedVideos[0]?.length + allVideos[0]?.length - 1 ===
              (user && user.user?.Dars)
                ? false
                : true
            }
          />
        </Tabs>
      </List>

      <div
        style={{
          position: "absolute",
          display: "inline",
          bottom: "10px",
          // left: "60px",
          width: "100%",
          borderTop: "1px solid #f1f1f1 ",
          paddingTop: "10px",
        }}
      >
        <Button
          onClick={logoutHandler}
          color="error"
          variant="text"
          style={{ marginLeft: "50px" }}
        >
          Tizimdan Chiqish
        </Button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return loading || testLoading ? (
    <Loading />
  ) : (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link style={{ color: "#fff" }} to="/">
            Home
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {sortedVideos &&
          sortedVideos[0]?.map((video, i) => {
            return (
              <TabContent
                key={i}
                value={value}
                indexof={i}
                video={video}
                test={
                  tests &&
                  tests?.filter((test) => test.subject === video.Subject)
                }
                setValue={setValue}
                allVideoEachCategory={sortedVideos[0]}
                allVideoAnotherCategory={allVideos[0]}
              />
            );
          })}
        <TabPanel value={value} index={sortedVideos[0]?.length}>
          <div className="quiz">
            {finish ? (
              <TakeCertificate />
            ) : start ? (
              <Quiz props={setFinish} category={"word"} />
            ) : (
              <Start props={setStart} />
            )}
          </div>
        </TabPanel>
        {allVideos &&
          allVideos[0]?.map((video, i) => {
            return (
              <TabContent
                key={i}
                value={value}
                indexof={i + sortedVideos[0]?.length + 1}
                video={video}
                test={
                  tests &&
                  tests?.filter((test) => test.subject === video.Subject)
                }
                setValue={setValue}
                allVideoEachCategory={sortedVideos[0]}
                allVideoAnotherCategory={allVideos[0]}
              />
            );
          })}
        <TabPanel
          value={value}
          index={allVideos[0]?.length + sortedVideos[0]?.length + 1}
        >
          <div className="quiz">
            {finish ? (
              <TakeCertificate />
            ) : start ? (
              <LastTest props={setFinish} category={"excel"} />
            ) : (
              <Start props={setStart} />
            )}
          </div>
        </TabPanel>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
