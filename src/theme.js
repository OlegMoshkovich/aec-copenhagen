import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import {colors} from './colors'


export const themeComponent = {
  spacing: 8,
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: { variant: 'background' },
          style: ({ ownerState, theme }) => ({
            boxShadow: theme.shadows[ownerState.elevation],
            padding:'1em',
            overflow:'scroll',
            backgroundColor:theme.palette.background.default,
          })
        },
      ]
    },
    MuiIconButton: {
      styleOverrides: {
        root:({ theme }) => ({
          backgroundColor: theme.palette.background.default, // use palette color here
          color: '#fff', // Icon color
          border: '1px solid #231E14',
          '&:hover': {
            backgroundColor: 'blue', // Background color on hover
          },
        })
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          border:'none'
        }),
      }
    },
    MuiList: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default, // use palette color here
          padding:'0px',
        }),
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default, // use palette color here
          // borderBottom:`1px solid ${theme.palette.background.paper}`,
          borderTop:`1px solid ${theme.palette.background.paper}`,
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default, // use palette color here
          // borderBottom:`1px solid ${theme.palette.secondary.main}`
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main, // use palette color here
          // border:`1px solid ${theme.palette.background.paper}`,
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          paddingTop: '30px',
        }
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
          marginBottom:'10px'
        }
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        content: {
          width: '93%',
        }
      },
    },
  },
}
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    default: {
      main: 'black',
    },
    primary: {
      main: colors[0].primary,
    },
    secondary: {
      main: grey[300],
    },
    background: {
      paper: grey[300],  // Change to your desired color
      default: '#6F9ABF',  // Change to your desired color
    },
  },
  ...themeComponent,
})
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    default: {
      main: 'white',
    },
    primary: {
      main: colors[0].primary,
    },
    secondary: {
      main: grey[800]
    },
    background: {
      paper: '#434D58',  // Change to your desired color
      default: '#0D0D0D',  // Change to your desired color
    },
  },
  ...themeComponent,
})
