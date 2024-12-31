import React, { useState } from "react";
import { 
  Container, 
  TextField, 
  Box, 
  Typography, 
  Paper,
  InputAdornment
} from "@mui/material";
import { MessageCard } from "../components/Cards";
import { PrimaryButton } from "../components/Buttons";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

interface Message {
  id: string;
  content: string;
  price?: number;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState("");
  const [price, setPrice] = useState<number>(0);

  function createMessage() {
    const uniqueId = Math.random().toString(36).substring(2, 10);
    const newMessage = { id: uniqueId, content, price };
    setMessages([...messages, newMessage]);
    alert(`Message link: /messages/${uniqueId}`);
  }

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <Container maxWidth="md">
      <animated.div style={fadeIn}>
        <Box sx={{ 
          minHeight: '100vh', 
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h2" 
              component="h1"
              sx={{ 
                textAlign: 'center',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 4
              }}
            >
              Anonymous Messaging
            </Typography>
          </motion.div>

          <Paper 
            elevation={3}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                placeholder="Enter your secret message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                type="number"
                variant="outlined"
                placeholder="Set LTC Price"
                value={price || ""}
                onChange={(e) => setPrice(Number(e.target.value))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">LTC</InputAdornment>,
                }}
                sx={{ mb: 2 }}
              />
              <PrimaryButton 
                label="Create Message Link" 
                onClick={createMessage}
              />
            </Box>
          </Paper>

          <motion.div layout>
            {messages.map((msg) => (
              <MessageCard
                key={msg.id}
                message={msg.content}
                price={msg.price}
              />
            ))}
          </motion.div>
        </Box>
      </animated.div>
    </Container>
  );
}
