import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, IconButton, Avatar, Switch, Checkbox, FormControlLabel } from "@mui/material";
import { Settings, Notifications, AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

const SurveyCreation = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "",
      type: "multiple",
      options: ["Agree", "Disagree", "Strongly disagree"],
      scale: 3,
      expanded: false,
    },
  ]);

  const handleExpand = (index) => {
    setQuestions((prev) => prev.map((q, i) => (i === index ? { ...q, expanded: true } : q)));
  };

  const handleAddOption = (index) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === index ? { ...q, options: [...q.options, "New Option"] } : q))
    );
  };

  const handleRemoveOption = (qIndex, oIndex) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIndex ? { ...q, options: q.options.filter((_, j) => j !== oIndex) } : q
      )
    );
  };

  const handleAddQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: "",
        type: "multiple",
        options: ["Agree", "Disagree", "Strongly disagree"],
        scale: 3,
        expanded: false,
      },
    ]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <div style={{ width: "80rem", maxWidth: "112rem", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        {/* Navbar */}
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 40px", backgroundColor: "white", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)", zIndex: 1000 }}>
          <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <span style={{ fontSize: "18px", fontWeight: "bold", color: "#6a4bbc" }}>BIT SURVEY</span>
            <span style={{ marginLeft: "10px", fontSize: "14px", color: "#666" }}> &gt; survey creation</span>
          </div>
          <TextField placeholder="Search for something" size="small" variant="outlined" style={{ backgroundColor: "#f0f2f5", borderRadius: "8px", width: "250px", marginRight: "20px" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <IconButton><Settings /></IconButton>
            <IconButton><Notifications /></IconButton>
            <Avatar style={{ width: "40px", height: "40px" }} src="https://via.placeholder.com/40" />
          </div>
        </div>

        {/* Survey Box */}
        <div style={{ width: "90%", maxWidth: "800px", margin: "100px auto 0", textAlign: "left" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>Untitled</h2>
          {questions.map((question, qIndex) => (
            <div key={qIndex} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", backgroundColor: "#fff", marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>Q{question.id}</span>
                <Select size="small" value={question.type} style={{ minWidth: "180px" }}>
                  <MenuItem value="multiple">Multiple Choice</MenuItem>
                  <MenuItem value="text">Text</MenuItem>
                </Select>
              </div>
              <TextField placeholder="Enter the question" fullWidth variant="outlined" size="small" style={{ marginTop: "10px" }} onClick={() => handleExpand(qIndex)} />
              {question.expanded && (
                <div style={{ marginTop: "20px" }}>
                  <strong>Predefined Options</strong>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                    <span>Scale</span>
                    <Select size="small" value={question.scale}>
                      {[3, 5, 7].map((num) => (
                        <MenuItem key={num} value={num}>{num}</MenuItem>
                      ))}
                    </Select>
                    <Switch />
                  </div>
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                      <TextField value={option} size="small" fullWidth variant="outlined" style={{ flex: 1, marginRight: "10px" }} />
                      <IconButton onClick={() => handleRemoveOption(qIndex, oIndex)}><RemoveCircleOutline /></IconButton>
                      <IconButton onClick={() => handleAddOption(qIndex)}><AddCircleOutline /></IconButton>
                    </div>
                  ))}
                  <FormControlLabel control={<Checkbox />} label="Score this question (enable quiz mode)" />
                  <FormControlLabel control={<Checkbox />} label="Add an 'Other' Answer Option" />
                </div>
              )}
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <Button variant="contained" style={{ backgroundColor: "#6a4bbc", color: "white" }} onClick={handleAddQuestion}>+ Next Question</Button>
            <div>
              <Button variant="outlined" style={{ marginRight: "10px", borderColor: "#6a4bbc", color: "#6a4bbc" }}>Cancel</Button>
              <Button variant="contained" style={{ backgroundColor: "#6a4bbc", color: "white" }}>Finish Survey</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCreation;
