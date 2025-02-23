import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const NewSurveyModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="new-survey-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 40, color: "green" }} />
        <Typography variant="h6" id="new-survey-modal" sx={{ mt: 2, mb: 3 }}>
          Choose your choice
        </Typography>
        <Button variant="contained" sx={{ mx: 1, bgcolor: "purple" }} onClick={() => alert("Templates Clicked!")}>
          Templates
        </Button>
        <Button variant="contained" sx={{ mx: 1, bgcolor: "purple" }} onClick={() => alert("Create New Clicked!")}>
          Create New
        </Button>
      </Box>
    </Modal>
  );
};

export default NewSurveyModal;
