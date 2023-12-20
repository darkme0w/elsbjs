import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import FuseLoadingBar from './FuseLoadingBar';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


function Layout() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <SnackbarProvider autoHideDuration={1000} preventDuplicate maxSnack={3}>
                <FuseLoadingBar/>
                <Outlet/>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default Layout;