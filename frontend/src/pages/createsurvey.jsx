import React from "react";
import { TextField, Button, Select, MenuItem, IconButton, Avatar } from "@mui/material";
import { Settings, Notifications } from "@mui/icons-material";

const SurveyCreation = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fc", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Navbar */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 20px", backgroundColor: "white", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)", zIndex: 1000, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", flexGrow: 1, minWidth: "200px" }}>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#6a4bbc" }}>BIT SURVEY</span>
          <span style={{ marginLeft: "10px", fontSize: "14px", color: "#666" }}> &gt; survey creation</span>
        </div>
        <TextField placeholder="Search for something" size="small" variant="outlined" style={{ backgroundColor: "#f0f2f5", borderRadius: "8px", width: "250px", margin: "10px auto" }} />
        <div style={{ display: "flex", alignItems: "center", minWidth: "150px" }}>
          <IconButton>
            <Settings />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <Avatar style={{ marginLeft: "10px", width: "40px", height: "40px" }} src="https://via.placeholder.com/40" />
        </div>
      </div>

      {/* Background Box */}
      <div style={{ width: "100%", marginTop: "80px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "90%", maxWidth: "900px", backgroundColor: "white", padding: "30px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", textAlign: "left" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>Untitled</h2>
          
          <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px", textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Q1</span>
              <Select size="small" defaultValue="multiple" style={{ minWidth: "150px" }}>
                <MenuItem value="multiple">Multiple choice</MenuItem>
                <MenuItem value="text">Text</MenuItem>
              </Select>
            </div>
            <TextField placeholder="Enter the question" fullWidth variant="outlined" size="small" />
          </div>
          
          <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" style={{ backgroundColor: "#6a4bbc", color: "white", textTransform: "none" }}>+ Next question</Button>
            <Button variant="outlined" style={{ textTransform: "none" }}>Cancel</Button>
          </div>
          <div style={{ marginTop: "20px", textAlign: "center", color: "#999" }}>Copy and paste questions</div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCreation;
