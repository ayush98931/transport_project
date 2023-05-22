import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import HelpIcon from "@mui/icons-material/Help";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export default function ClientDashboard() {
  return (
    <div>
      <React.Fragment>
        <AppBar color="primary" position="sticky" elevation={0}>
          <Toolbar>
            <Grid container spacing={1} alignItems="center">
              <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs />
              <Grid item>
                <Link
                  href="/"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      color: "common.white",
                    },
                  }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Add Another Account
                </Link>
              </Grid>
              <Grid item>
                <Tooltip title="Alerts • No alerts">
                  <IconButton color="inherit">
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <IconButton color="inherit" sx={{ p: 0.5 }}></IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component="div"
          color="primary"
          position="static"
          elevation={0}
          sx={{ zIndex: 0 }}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs>
                <Typography color="inherit" variant="h5" component="h1">
                  Client Dashboard
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="inherit" size="small">
                  More About
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="Help">
                  <IconButton color="inherit">
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component="div"
          position="static"
          elevation={0}
          sx={{ zIndex: 0 }}
        >
          <Tabs value={0} textColor="inherit">
            <Tab label="Users" />
            <Tab label="Search by email" />
            <Tab label="Search by UserId" />
            <Tab label="Search by Phone number" />
          </Tabs>
        </AppBar>
      </React.Fragment>

      <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchIcon color="inherit" sx={{ display: "block" }} />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Search by email address, phone number, or user UID"
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "default" },
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <Button variant="contained" sx={{ mr: 1 }}>
                  Search
                </Button>
                <Tooltip title="Reload">
                  <IconButton>
                    <RefreshIcon color="inherit" sx={{ display: "block" }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="left">
          <strong>
            • Vrajanadan Rangaswamy. <br />
            • Umed Maudgalya. <br />
            • Hrishikesh Sumila. <br />
            • Kirit Subhuja. <br />
            • Nakul Hemalatha. <br />
            • Waman Padmanabh. <br />
            • Viresh Arivarasu Subramanyan. <br />
            • Mitul Meyappan. <br />
            • Pranay Palanirajan. <br />
            • Krishnamurari Himanshu. <br />
            • Ved Mahadev Salim. <br />
            • Pushkar Japesh Narsi. <br />
            • Partha Mavalvala. <br />
          </strong>
        </Typography>
      </Paper>
    </div>
  );
}
