import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

interface MessageCardProps {
  message: string;
  price?: number;
}

export function MessageCard({ message, price }: MessageCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card 
        sx={{ 
          m: 2, 
          borderRadius: 2,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <CardContent>
          <Typography variant="body1" component="p">
            {message}
          </Typography>
          {price && (
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="subtitle2" color="primary">
                Price to reveal: {price} LTC
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
