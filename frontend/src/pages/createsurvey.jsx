import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, IconButton, Avatar, Switch, Checkbox, FormControlLabel, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Settings, Notifications, AddCircleOutline, RemoveCircleOutline, ContentCopy, Edit, Delete, PlaylistAdd } from "@mui/icons-material";

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
  
  const [openDialog, setOpenDialog] = useState(false);

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

  const handleDeleteQuestion = (index) => {
    setQuestions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCopyQuestion = (index) => {
    setQuestions((prev) => {
      const newQuestion = { ...prev[index], id: prev.length + 1 };
      return [...prev, newQuestion];
    });
  };

  const handleFinishSurvey = () => {
    setOpenDialog(true);
  };
  
  

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <div style={{ width: "80rem", maxWidth: "112rem", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
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
                <div>
                  <IconButton onClick={() => handleCopyQuestion(qIndex)} style={{ color: "#6a4bbc" }}><ContentCopy /></IconButton>
                  <IconButton style={{ color: "#6a4bbc" }}><Edit /></IconButton>
                  <IconButton onClick={() => handleDeleteQuestion(qIndex)} style={{ color: "#6a4bbc" }}><Delete /></IconButton>
                </div>
              </div>
              <TextField placeholder="Enter the question" fullWidth variant="outlined" size="small" style={{ marginTop: "10px" }} onClick={() => handleExpand(qIndex)} />
              {question.expanded && (
                <div style={{ marginTop: "20px" }}>
                  <strong>Predefined Options</strong>
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
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "10px" }}>
                <IconButton style={{ color: "#6a4bbc" }}><PlaylistAdd /></IconButton>
                <span style={{ fontSize: "14px", color: "#6a4bbc", marginLeft: "5px" }}>+ Bulk Answers</span>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <Button variant="contained" style={{ backgroundColor: "#6a4bbc", color: "white" }} onClick={handleAddQuestion}>+ Next Question</Button>
            <div>
              <Button variant="outlined" style={{ marginRight: "10px", borderColor: "#6a4bbc", color: "#6a4bbc" }}>Cancel</Button>
              <Button variant="contained" style={{ backgroundColor: "#6a4bbc", color: "white" }} onClick={handleFinishSurvey}>Finish Survey</Button>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
  <DialogTitle style={{ fontWeight: "bold" }}>Permissions</DialogTitle>
  <DialogContent style={{ display: "flex", flexDirection: "column", width: "50rem", height: "35rem" }}>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Date, Start and end time allocation" />
    <div style={{ display: "flex", gap: "20px", marginLeft: "20px" }}>
      <TextField label="Start date & Time" variant="outlined" fullWidth placeholder="Placeholder" />
      <TextField label="End date & Time (optional)" variant="outlined" fullWidth placeholder="Placeholder" />
    </div>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Scheduling frequencies" style={{ marginTop: "20px" }} />
    <div style={{ display: "flex", gap: "10px", marginLeft: "20px", flexWrap: "wrap" }}>
      <FormControlLabel control={<Checkbox />} label="Daily" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Weekly" />
      <FormControlLabel control={<Checkbox />} label="Monthly" />
    </div>
    <div style={{ display: "flex", gap: "10px", marginLeft: "20px", flexWrap: "wrap" }}>
      <FormControlLabel control={<Checkbox />} label="Sunday" />
      <FormControlLabel control={<Checkbox />} label="Monday" />
      <FormControlLabel control={<Checkbox />} label="Tuesday" />
      <FormControlLabel control={<Checkbox />} label="Wednesday" />
      <FormControlLabel control={<Checkbox />} label="Thursday" />
      <FormControlLabel control={<Checkbox />} label="Friday" />
      <FormControlLabel control={<Checkbox />} label="Saturday" />
    </div>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Populate in random timing in a specific duration of time" />
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "20px" }}>
      <TextField label="Time difference (optional)" variant="outlined" fullWidth defaultValue="5 minutes" />
    </div>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Send reminders to the respondents" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Assign to roles" />
    <div style={{ marginLeft: "20px", width: "200px" }}>
      <Select fullWidth defaultValue="Placeholder">
        <MenuItem value="Placeholder">Placeholder</MenuItem>
        <MenuItem value="Year">Year</MenuItem>
      </Select>
    </div>
    <FormControlLabel control={<Checkbox />} label="Set response limit" />
    <div style={{ marginLeft: "20px", width: "200px" }}>
      <Select fullWidth defaultValue="Placeholder">
        <MenuItem value="number">1</MenuItem>
        <MenuItem value="number">2</MenuItem>
        <MenuItem value="number">3</MenuItem>
      </Select>
    </div>
    <FormControlLabel control={<Checkbox />} label="Set edit response count" />
    <div style={{ marginLeft: "20px", width: "200px" }}>
      <Select fullWidth defaultValue="Placeholder">
        <MenuItem value="number">1</MenuItem>
        <MenuItem value="number">2</MenuItem>
        <MenuItem value="number">3</MenuItem>
      </Select>
    </div>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenDialog(false)} style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px" }}>Save</Button>
  </DialogActions>
</Dialog>



    </div>
  );
};

export default SurveyCreation;
