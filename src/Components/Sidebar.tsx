import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  brandlogo,
  dashboard,
  dashboardnew,
  docs,
  docsnew,
  help,
  helpnew,
  setting,
  settingnew,
  timeline,
  timelinenew,
  user,
  usernew,
} from "../Assets/Images";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar">
          <img src={brandlogo} alt="" className="brand"/>
          <NavLink to="/dashboard" className="sidelinks" title="Dashboard">
            <img src={dashboard} alt="" className="default" />
            <img src={dashboardnew} alt="" className="active-img" />
            <Typography className="text-default">Dashboard</Typography>
          </NavLink>
          <NavLink to="/innerpage" className="sidelinks" title="Innerpage">
            <img src={user} alt="" className="default" />
            <img src={usernew} alt="" className="active-img" />
            <Typography className="text-default">Users</Typography>
          </NavLink>
          <NavLink to="/docs" className="sidelinks" title="Docs">
            <img src={docs} alt="" className="default" />
            <img src={docsnew} alt="" className="active-img" />
            <Typography className="text-default">Docs</Typography>
          </NavLink>
          <NavLink to="/timeline" className="sidelinks" title="Timeline">
            <img src={timeline} alt="" className="default" />
            <img src={timelinenew} alt="" className="active-img" />
            <Typography className="text-default">Timeline</Typography>
          </NavLink>
          <NavLink to="/help" className="sidelinks" title="Help">
            <img src={help} alt="" className="default" />
            <img src={helpnew} alt="" className="active-img" />
            <Typography className="text-default">Help</Typography>
          </NavLink>
          <NavLink to="/setting" className="sidelinks" title="Settings">
            <img src={setting} alt="" className="default" />
            <img src={settingnew} alt="" className="active-img" />
            <Typography className="text-default">Settings</Typography>
          </NavLink>
      </div>
    </>
  );
}
