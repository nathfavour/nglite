import React, { useState } from "react";
import { 
  Container, 
  TextField, 
  Box, 
  Typography, 
  Paper 
} from "@mui/material";
import { motion } from "framer-motion";
import { PrimaryButton } from "../../components/Buttons";

export default function SignIn() {
  const [username, setUsername] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Signed in as: ${username}`);
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ width: '100%' }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                mb: 4,
                textAlign: 'center',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Sign In
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 3 }}
              />
              <PrimaryButton 
                label="Sign In"
                type="submit"
              />
            </form>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
}
