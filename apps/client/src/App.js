import React, { createContext } from "react";
import { theme, ThemeProvider } from "@ctrlup/rainbow-react";
import { createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { io } from "socket.io-client";

const queryClient = new QueryClient();
const muiTheme = createTheme(theme);

export const SocketContext = createContext();
const socket = io(process.env.API_URI);

export default function App() {
  return (
    <SocketContext.Provider value={socket}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={muiTheme}>
        </ThemeProvider>
      </QueryClientProvider>
    </SocketContext.Provider>
  );
}
