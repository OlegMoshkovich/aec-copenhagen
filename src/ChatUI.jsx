import React, { useState } from 'react';
import {
  TextField, Paper, List, ListItem, ListItemText,
  useTheme, InputAdornment, IconButton, Typography, Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';  // Import CloseIcon
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';


function ChatUI({closeWindow}) {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');


  const handleSend = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input.trim(), type: 'sent' },
        { text: '...', type: 'thinking' },
      ]);

      setTimeout(() => {
        setMessages((prevMessages) => {
          return [
            ...prevMessages.slice(0, prevMessages.length - 1),
            { text: generateResponse(input.trim()), type: 'received' },
          ];
        });
      }, 2000);
      setInput('');
    }
  };

  const generateResponse = (userMessage) => {
    if (userMessage.includes('hello')) {
      return 'Hi there!';
    } else if (userMessage.includes('how are you')) {
      return 'I\'m good, thank you!';
    } else {
      return 'Thank you for your message.';
    }
  };

  return (
    <Paper
    elevation={4}
      sx={{
        width: '300px',
        height: '400px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.secondary.main}`
        }}
      >
        <Typography variant="body1" sx={{marginLeft: '14px'}} >
          Chat
        </Typography>
        <IconButton size="small" onClick={closeWindow}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <List
        sx={{
          flex: 1,
          overflow: 'auto',
          backgroundColor: theme.palette.background.paper,
        }}
      >
        {messages.map((msg, idx) => (
          <ListItem
            key={idx}
            sx={{ justifyContent: msg.type === 'sent' ? 'flex-end' : 'flex-start' }}
            elevation={10}
          >
            <ListItemText
              primary={msg.text}
              sx={{
                padding: '6px 8px',
                borderRadius: '12px',
                maxWidth: '80%',
                wordWrap: 'break-word',
                border: `1px solid ${theme.palette.primary.main}`,
                backgroundColor: msg.type === 'sent'
                  ? theme.palette.primary.main
                  : msg.type === 'thinking'
                  ? 'transparent'
                  : theme.palette.secondary.main,
                color: msg.type === 'sent' ? '#fff' : theme.palette.text.primary,
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          padding: '10px 10px',  // Adjusted padding for top/bottom and left/right respectively
          // height: '60px',  // Adjusted to account for the added padding
          borderTop: `1px solid ${theme.palette.secondary.main}`,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          size='small'
          multiline
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSend}
                  edge="end"
                  size="small"
                  disabled={!input.trim()}
                >
                  <ArrowForwardOutlinedIcon color="default" fontSize='small' />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>
    </Paper>
  );
}

export default ChatUI;
