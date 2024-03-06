import React, { useState } from 'react';
import {
  TextField, Paper, List, ListItem, ListItemText,
  useTheme, InputAdornment, IconButton, Typography, Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

// Header component
const Header = ({ closeWindow, theme }) => {
  return (
    <Paper
    elevation={0}
    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: theme.palette.background.default}}>
      <Typography variant="body1">Chat GPT</Typography>
      <IconButton size="small" onClick={closeWindow}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
};

// MessageList component
const MessageList = ({ messages, theme }) => {
  return (
    <List sx={{ flex: 1, overflow: 'auto', backgroundColor: theme.palette.background.default }}>
      {messages.map((msg, idx) => (
        <ListItem key={idx} sx={{ justifyContent: msg.type === 'sent' ? 'flex-end' : 'flex-start' }}>
          <ListItemText
            primary={msg.text}
            sx={{
              padding: '6px 8px',
              borderRadius: '12px',
              maxWidth: '80%',
              wordWrap: 'break-word',
              border: `1px solid ${theme.palette.primary.main}`,
              backgroundColor: msg.type === 'sent' ? theme.palette.primary.main : theme.palette.secondary.main,
              color: msg.type === 'sent' ? '#fff' : theme.palette.text.primary,
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

// InputFooter component
const InputFooter = ({ input, setInput, handleSend, theme }) => {
  return (
    <Paper
    elevation={0}
    sx={{ padding: '10px' ,backgroundColor: theme.palette.background.default}}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        multiline
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSend} edge="end" size="small" disabled={!input.trim()}>
                <ArrowForwardOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
};

// ChatUI main component
function ChatUI({ closeWindow }) {
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
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, prevMessages.length - 1),
          { text: generateResponse(input.trim()), type: 'received' },
        ]);
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
    <Paper elevation={4}
      sx={{
        backgroundColor: theme.palette.background.default,
        width: '300px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column' }}
      >
      <Header closeWindow={closeWindow}  theme={theme}/>
      <MessageList messages={messages} theme={theme} />
      <InputFooter input={input} setInput={setInput} handleSend={handleSend}  theme={theme} />
    </Paper>
  );
}

export default ChatUI;
