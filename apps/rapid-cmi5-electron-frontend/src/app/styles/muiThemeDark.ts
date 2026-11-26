//@ts-nocheck
import { createTheme } from '@mui/material/styles';
import {
  YG_BRAND_BLUE,
  YG_ACCENT_BLUE,
  YG_LINK_BLUE,
  YG_BORDER,
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

export const dividerColor = YG_DARK_BORDER;

const tabHeight = '38px';
const tooltipColor = YG_DARK_SURFACE; //'#303030';
const tooltipOutline = `0px solid ${YG_DARK_BORDER}`; //'2px solid #505050';
const tooltipPadding = '4px 16px';

const colorPop = true;
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
  accordion: {
    borderBottom: `1px solid ${YG_DARK_BORDER}`,
    backgroundColor: YG_DARK_BG,
    borderColor: YG_DARK_BORDER,
    titleBackgroundColor: YG_DARK_BG,
  },
  activity: { backgroundColor: YG_BRAND_BLUE },
  breadcrumbs: {
    default: '#C8C8C8', //disabled breadcrumb text
    underline: mainColor,
    hoverColor: '#a8a7a7',
    hoverBackground: `${YG_ACCENT_BLUE}20`,
  },
  button: {
    disabledBackgroundColor: YG_DARK_SURFACE, //'#07128580',
    disabledColor: '#C1C9DB99',
    gradient: `linear-gradient(180deg, ${YG_ACCENT_BLUE} 0%, ${YG_BRAND_BLUE} 100%)`,
    minorBackgroundColor: YG_BRAND_BLUE, //'#333333',
    indicatorColor: mainColor, //leading action row icon, should match override in MUIListItem
    iconColor: mainColor, //action row icon color, should match override MUIIconButton
  },
  card: {
    default: `linear-gradient(180deg, ${YG_BRAND_BLUE}BF 0%, ${YG_BRAND_BLUE}BF 100%)`,
    borderColor: YG_BORDER,
    defaultHover: `linear-gradient(180deg, ${YG_LINK_BLUE} 0%, ${YG_LINK_BLUE} 100%)`,

    titleColor: '#FFFFFF', // white
    instructionsColor: colorPop ? '#edb445' : '#edb445', //unused
    formInstructionsColor: YG_DARK_PAPER,
  },
  form: {
    backgroundColor: YG_DARK_BG,
  },
  gradients: {
    background: '#0049904c',
    backgroundHover: '#0049902B',
    backgroundGradient:
      `linear-gradient(135deg, ${YG_DARK_BG} 0%, ${YG_DARK_PAPER} 50%, ${YG_DARK_BG}D9 100%)`,
    backgroundPanel: '#3a3e4480',
    backgroundRadial:
      'radial-gradient(circle at 20% 30%, #00499059 0%, transparent 70%), radial-gradient(circle at 80% 70%, #0049904D 0%, transparent 60%)',
  },
  header: {
    border: '#ffffffb0',
    buttonColor: '#C5C5C5',
    selColor: YG_ACCENT_BLUE,
    default: YG_DARK_BG,
    hoverColor: '#FFFFFF',
    light: YG_DARK_PRIMARY, //loading bar color
    dark: '#333',
    title: '#ffffffc0', // white @ 80% opacity
    underline: YG_DARK_BORDER, //'DarkGray', //divider OR parting line
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
    fillSelected: `${YG_ACCENT_BLUE}18`, // Package Menu
    icon: '#ffffffc0',
    iconSelected: YG_ACCENT_BLUE, //unused
    border: YG_DARK_BORDER, // Package Menu
    borderSelected: YG_ACCENT_BLUE, //unused
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
  scenarioDesigner: {
    toolIcon: mainColor,
    toolIconBorder: mainColor,
    toolIconBackground: YG_DARK_PAPER,
    mapBackground: YG_DARK_PAPER,
    mapPanel: YG_DARK_BG,
    mapPanelOutline: YG_DARK_BORDER,
    mapPanelText: 'rgba(255, 255, 255, 0.6)',
  },
  typography: YG_TYPOGRAPHY,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar-track': {
            backgroundColor: '#212124',
          },
          '*::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: '8px',
            backgroundColor: '#808080b0',
            border: '2px solid #212124',
            minHeight: '48px',
            maxHeight: '120px',
          },
          '*::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: `${YG_DARK_PRIMARY}80`,
              cursor: 'pointer',
            },
          '*::-webkit-scrollbar': {
            width: '12px',
            height: '8px',
          },
          '*::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#transparent',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          border: '1px solid',
          backgroundColor: '#383838',
          '& .MuiAlert-action': {
            '& .MuiIconButton-root': {
              color: '#b0b0b0', //close button
              '&:hover': { color: '#fff', background: '#ffffff1a' },
            },
          },
        },
        standardInfo: {
          backgroundColor: '#22282F',
          color: 'white',
          borderColor: '#03a9f4BF', //25%

          '& .MuiAlert-icon': { color: '#03a9f4BF' },
          '& .MuiAlert-action': {
            color: 'white',
            '& .MuiIconButton-root': {
              color: 'white', //close button
              '&:hover': { background: '#0288d1' }, //10% opacity
            },
          },
        }, //palette.info.main
        standardWarning: {
          backgroundColor: '#372E27',
          color: 'white',
          borderColor: '#ff9800BF',
          '& .MuiAlert-icon': { color: '#ff9800BF' },
          '& .MuiAlert-action': {
            color: 'white',
            '& .MuiIconButton-root': {
              color: 'white', //close button
              '&:hover': { background: '#ed6c02' }, //10% opacity
            },
          },
        }, //palette.warning.main
        standardError: {
          backgroundColor: '#35282A',
          color: 'white',
          borderColor: '#ef5350BF',
          '& .MuiAlert-icon': { color: '#ef5350BF' },
          '& .MuiAlert-action': {
            color: 'white',
            '& .MuiIconButton-root': {
              color: 'white', //close button
              '&:hover': { background: '#d32f2f' },
            },
          },
        }, //palette.error.main
        standardSuccess: {
          backgroundColor: '#2B362D',
          color: 'white',
          borderColor: '#4caf50BF',
          '& .MuiAlert-icon': { color: '#4caf50BF' },
          '& .MuiAlert-action': {
            color: 'white',
            '& .MuiIconButton-root': {
              color: 'white', //close button
              '&:hover': { background: '#2e7d32' }, //10% opacity
            },
          },
        }, //palette.success.main},
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-popupIndicator': {
            //dropdown arrow
            color: YG_DARK_PRIMARY, //primary.main
            bottom: '6px', //vertically centers
          },
          '& .MuiAutocomplete-clearIndicator': {
            //clear X button
            color: YG_DARK_PRIMARY, //primary.main
            bottom: '6px', //vertically centers
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperWidthSm: {
          borderStyle: 'solid',
          borderColor: YG_DARK_BORDER,
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
    MuiFormHelperText: {
      defaultProps: {
        component: 'div', //forces form helper text to render as a div to avoid jest Warning: validateDOMNesting
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
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationColor: YG_ACCENT_BLUE,
          '&:hover': {
            color: YG_LINK_BLUE,
            textDecorationColor: YG_LINK_BLUE,
          },
          '&:visited': {
            color: YG_LINK_BLUE,
            textDecorationColor: YG_LINK_BLUE,
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: mainColor,
          minWidth: 32,
          fontSize: 24,
          '&:hover': {
            color: YG_DARK_PRIMARY, // primary.main
            cursor: 'pointer',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
        primary: {
          fontWeight: 'bold',
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '4px',
          color: mainColor,
          '&:hover': {
            color: YG_DARK_PRIMARY,
            backgroundColor: `${YG_DARK_PRIMARY}20`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: `1px solid ${YG_DARK_BORDER}`, // input fill borderColor
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: YG_DARK_PRIMARY, //primary.main - dropdown arrow color
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: tabHeight,
          minHeight: tabHeight,
          minWidth: 144,
          borderRadius: 4,
          border: `1px solid ${YG_DARK_PRIMARY}`,
          color: 'common.white',
          backgroundColor: YG_BRAND_BLUE,
          fontSize: '14px',
          '&.Mui-selected': {
            border: `2px solid ${YG_ACCENT_BLUE}`,
            backgroundColor: YG_ACCENT_BLUE,
            color: '#FFFFFFCC',
            '&:hover': {
              border: `2px solid ${YG_ACCENT_BLUE}`,
              backgroundColor: YG_ACCENT_BLUE,
              color: '#FFFFFFCC',
              cursor: 'default',
            },
          },
          '&:hover': {
            border: `1px solid ${YG_LINK_BLUE}`,
            borderColor: YG_LINK_BLUE,
            backgroundColor: YG_LINK_BLUE,
            color: '#FFFFFF',
            cursor: 'pointer',
          },
        },
      },
    },
  },
});
