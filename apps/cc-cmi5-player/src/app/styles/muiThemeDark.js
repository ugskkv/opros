import { createTheme } from '@mui/material/styles';
import {
  YG_BRAND_BLUE,
  YG_ACCENT_BLUE,
  YG_LINK_BLUE,
  YG_BLUE_TINT,
  YG_DARK_BG,
  YG_DARK_PAPER,
  YG_DARK_SURFACE,
  YG_DARK_BORDER,
  YG_DARK_PRIMARY,
  YG_ERROR,
  YG_SUCCESS,
  YG_WARNING,
  YG_TYPOGRAPHY,
} from '@rapid-cmi5/ui';

export const primaryDateStyle = 'dd.MM.yyyy';
export const primaryTimeStyle = 'H:mm';
export const timeStyleWithSeconds = 'H:mm:ss';

const tabHeight = '38px';
const tooltipColor = YG_DARK_SURFACE;
const tooltipOutline = `1px solid ${YG_DARK_BORDER}`; //'2px solid #505050';
const tooltipPadding = '4px 16px';

const mainColor = YG_DARK_PRIMARY; //icons, button fills
const hoverMainColor = YG_ACCENT_BLUE; //button hover

export const darkTheme = createTheme({
  palette: {
    error: {
      main: YG_ERROR, // textfield error and helper text
    },
    success: { main: YG_SUCCESS },
    warning: { main: YG_WARNING },
    mode: 'dark',
    primary: {
      main: mainColor,
      dark: YG_BRAND_BLUE,
      light: hoverMainColor,
      contrastText: '#fff',
    },
    secondary: {
      main: YG_LINK_BLUE,
      dark: YG_DARK_PRIMARY,
      light: YG_DARK_PRIMARY,
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.85)',
      disabled: 'rgba(255, 255, 255, 0.6)',
      hint: 'rgba(255, 255, 255, 0.6)',
      interactable: '#ffffffe8', // white @ 90% opacity
    },
    background: {
      paper: YG_DARK_PAPER,
      default: YG_DARK_BG,
    },
  },
  activity: { backgroundColor: YG_BRAND_BLUE },
  breadcrumbs: {
    default: '#C8C8C8', //disabled breadcrumb text
    underline: mainColor,
    hoverColor: '#a8a7a7',
    hoverBackground: '#FFC84020',
  },
    button: {
    disabledBackgroundColor: YG_DARK_SURFACE,
    disabledColor: '#C1C9DB99',
    gradient: `linear-gradient(180deg, ${YG_ACCENT_BLUE} 0%, ${YG_BRAND_BLUE} 100%)`,
    minorBackgroundColor: YG_BRAND_BLUE,
    indicatorColor: mainColor,
    iconColor: mainColor,
  },

  form: {
    backgroundColor: YG_DARK_BG,
  },
  gradients: {
    background: '#00499026',
    backgroundHover: '#0049902B',
    backgroundGradient: `linear-gradient(135deg, ${YG_DARK_BG} 0%, ${YG_DARK_PAPER} 50%, ${YG_DARK_BG}D9 100%)`,
    backgroundPanel: '#3a3e4480',
    backgroundRadial:
      'radial-gradient(circle at 20% 30%, #00499059 0%, transparent 70%), radial-gradient(circle at 80% 70%, #0049904D 0%, transparent 60%)',
  },
  header: {
    title: '#ffffffc0', // white @ 80% opacity
  },
  input: {
    outlineColor: YG_DARK_BORDER, //see overrides below MuiFilledInput, MuiFilledInput+MuiOutlinedInput
    fill: YG_DARK_PAPER,
    disabledFill: YG_DARK_PAPER,
    disabledOutline: YG_DARK_PAPER,
    disabledOutlineColor: YG_DARK_PAPER, //before making outline color match fill  '#36393E',
  },
    nav: {
    fill: '',
    fillSelected: YG_DARK_SURFACE,
    icon: '#ffffffc0',
    iconSelected: YG_ACCENT_BLUE,
    border: `${YG_ACCENT_BLUE}d0`,
    borderSelected: YG_ACCENT_BLUE,
    currentTabIndicator: YG_DARK_PRIMARY,
    currentTabIndicatorText: YG_BRAND_BLUE,
    deselectedTab: YG_BRAND_BLUE, //primary 80%
    deselectedTabText: '#ffffff', //'#323232D9',
    deselectedTabBorder: YG_BRAND_BLUE, //60%
    selectedTab: YG_ACCENT_BLUE,
    selectedTabBorder: YG_LINK_BLUE,
    selectedTabText: '#ffffff',
    shouldColorTabIndicator: true,
    progressBar: YG_DARK_BORDER,
    progressBarFill: YG_DARK_PRIMARY,
    tabHover: YG_LINK_BLUE,
    tabPanel: YG_BRAND_BLUE,
  },
  typography: YG_TYPOGRAPHY,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '*::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: '4px',
            backgroundColor: '#808080b0',
            border: '2px solid #dd6fff00', //inset thumb on track background color
            minHeight: '48px',
          },
          '*::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#808080d0',
              borderLeft: '4px solid #2d2d2d',
              cursor: 'pointer',
            },
          '*::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '16px',
          },
          '*::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#transparent',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperWidthSm: {
          borderStyle: 'solid',
          borderColor: '#333',
          minWidth: 480,
        },
        paperWidthMd: {
          overflow: 'hidden',
          width: 'auto',
        },


                paper: {
          backgroundColor: YG_DARK_BG,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          '&:before': {
            color: tooltipColor,
            border: tooltipOutline,
          },
        },
        tooltip: {
          fontSize: 13,
          fontWeight: 'bold',
          backgroundColor: tooltipColor,
          border: tooltipOutline,

          padding: tooltipPadding,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          '&&&:before': {
            borderBottom: '1px solid #59595930', // input border color with some transparency
          },
          '&&:after': {
            borderBottom: '1px solid #59595930',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        endIcon: {
          marginLeft: '2px',
          marginRight: '2px',
          marginTop: '-2px',
        },
        startIcon: {
          marginLeft: '2px',
          marginRight: '2px',
          marginTop: '-2px',
        },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '1px solid #42464D', // input fill borderColor
        },
      },
    },
    // careful, settings here can trigger scrollbar
    MuiTab: {
      styleOverrides: {
        root: {
          height: tabHeight,
          minHeight: tabHeight,
          minWidth: 144,
        },
      },
