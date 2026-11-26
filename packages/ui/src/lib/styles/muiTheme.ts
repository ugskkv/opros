//@ts-nocheck
import { createTheme } from '@mui/material/styles';
import {
  YG_BRAND_BLUE,
  YG_ACCENT_BLUE,
  YG_LINK_BLUE,
  YG_BLUE_TINT,
  YG_WHITE,
  YG_PAGE_GRAY,
  YG_BORDER,
  YG_TEXT_DARK,
  YG_TEXT,
  YG_TEXT_MUTED,
  YG_TEXT_DISABLED,
  YG_ICON_MUTED,
  YG_ERROR,
  YG_SUCCESS,
  YG_WARNING,
  YG_TYPOGRAPHY,
} from './yugoriaTokens';

export const primaryDateStyle = 'dd.MM.yyyy';
export const primaryTimeStyle = 'H:mm';
export const timeStyleWithSeconds = 'H:mm:ss';

export const fieldMarginTop = '8px';
const tabHeight = '38px';
const tooltipColor = YG_BRAND_BLUE; //'#505050';
const tooltipOutline = '0px solid #707070';
const tooltipPadding = '4px 16px';

const mainColor = YG_BRAND_BLUE; //icons, button fills
const hoverMainColor = YG_ACCENT_BLUE; //button hover

export const lightTheme = createTheme({
    palette: {
    mode: 'light',
    primary: {
      main: mainColor,
      dark: YG_BRAND_BLUE,
      light: hoverMainColor,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: YG_LINK_BLUE,
      dark: YG_BRAND_BLUE,
      light: YG_LINK_BLUE,
      contrastText: '#FFFFFF',
    },
    error: { main: YG_ERROR },
    success: { main: YG_SUCCESS },
    warning: { main: YG_WARNING },
    text: {
      primary: YG_TEXT_DARK, //unusable
      secondary: YG_TEXT_MUTED,
      disabled: YG_TEXT_DISABLED,
      hint: YG_ICON_MUTED,
      interactable: YG_TEXT,
    },
    background: {
      paper: YG_WHITE,
      default: YG_PAGE_GRAY,
    },
  },
    accordion: {
    borderBottom: `1px solid ${YG_BORDER}`,
    backgroundColor: YG_PAGE_GRAY,
    borderColor: YG_BORDER,
    titleBackgroundColor: YG_PAGE_GRAY,
  },
  activity: { backgroundColor: YG_BRAND_BLUE },
  button: {
    disabledBackgroundColor: YG_ICON_MUTED,
    disabledColor: YG_TEXT_DISABLED,
    minorBackgroundColor: YG_BRAND_BLUE,
    indicatorColor: mainColor,
    iconColor: mainColor,
  },
  breadcrumbs: {
    default: YG_TEXT_DARK,
    underline: mainColor, //interactive
    hoverColor: YG_LINK_BLUE, //TODO
    hoverBackground: YG_BLUE_TINT,
  },
  card: {
    default: `linear-gradient(180deg, ${YG_ACCENT_BLUE} 0%, ${YG_BRAND_BLUE} 100%)`,
    defaultHover: `linear-gradient(180deg, ${YG_LINK_BLUE} 0%, ${YG_LINK_BLUE} 100%)`,
    borderColor: YG_BORDER,
    titleColor: '#FFFFFF',
    formInstructionsColor: '#E5F6FD',
  },
  form: {
    backgroundColor: YG_PAGE_GRAY,
  },
  gradients: {
    background: '#00499026',
    backgroundHover: '#0049902B',
    backgroundGradient: `linear-gradient(135deg, ${YG_PAGE_GRAY} 0%, ${YG_WHITE} 50%, ${YG_PAGE_GRAY}D9 100%)`,
    backgroundPanel: '#ffffffCC',
    backgroundRadial:
      'radial-gradient(circle at 20% 30%, #00499059 0%, transparent 70%), radial-gradient(circle at 80% 70%, #0049904D 0%, transparent 60%)',
  },
  header: {
    border: '#ffffffc3', //active se
    buttonColor: YG_TEXT_MUTED,
    selColor: YG_ACCENT_BLUE, //'#a4b8eb',
    default: YG_BRAND_BLUE,
    light: '#004990B2', // loading bar color
    dark: '#ffffff',
    hoverColor: '#ffffff',
    title: YG_BRAND_BLUE,
    underline: YG_BORDER, //divider OR parting line
  },
  input: {
    outlineColor: YG_BORDER,
    fill: YG_PAGE_GRAY,
    disabledFill: '#CBCBCB00',
    disabledOutlineColor: '#CBCBCB4D', //before making outline color match fill '#88888860',
  },
  nav: {
    fill: '',
    fillSelected: YG_BLUE_TINT,
    icon: YG_BRAND_BLUE, // overriden
    iconSelected: YG_BRAND_BLUE,
    border: YG_BRAND_BLUE,
    borderSelected: YG_BRAND_BLUE,
    currentTabIndicator: YG_ACCENT_BLUE, //'#D3D8E7', //90% '#3C86CB', //primary info main
    deselectedTab: YG_BRAND_BLUE, //primary 80%
    deselectedTabText: '#ffffff', //'#323232D9',
    deselectedTabBorder: YG_BRAND_BLUE, //60%
    selectedTab: YG_ACCENT_BLUE,
    selectedTabBorder: YG_LINK_BLUE,
    selectedTabText: '#ffffff',
    shouldColorTabIndicator: true,
    progressBar: YG_BORDER,
    progressBarFill: YG_ACCENT_BLUE,
    tabHover: YG_LINK_BLUE,
    tabPanel: YG_BRAND_BLUE,
  },
  scenarioDesigner: {
    toolIcon: mainColor,
    toolIconBorder: mainColor,
        toolIconBackground: YG_WHITE,
    mapBackground: YG_WHITE,
    mapPanel: YG_PAGE_GRAY,
    mapPanelOutline: 'LightGrey',
    mapPanelText: YG_TEXT_MUTED,
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
            backgroundColor: YG_BRAND_BLUE, //'#3C59A2',
            border: '2px solid #dd6fff00', //inset thumb on track background color
            minHeight: '48px',
          },
          '*::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: YG_ACCENT_BLUE, //'#5871AF',
              borderLeft: '4px solid #f8f8f8',
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
    MuiAlert: {
      styleOverrides: {
        root: {
          border: '1px solid',
        },
        standardInfo: {
          borderColor: '#03a9f480',
        },

        standardWarning: {
          borderColor: '#ff980080',
        },
        standardError: {
          borderColor: '#EF535080', //light with transparency
        },
        standardSuccess: {
          borderColor: '#4caf5080', //palette.success.dark
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
                    '& .MuiAutocomplete-popupIndicator': {
            //dropdown arrow
            color: YG_BRAND_BLUE, //primary.main
            bottom: '6px', //vertically centers
          },
          '& .MuiAutocomplete-clearIndicator': {
            //clear X icon
            color: YG_BRAND_BLUE, //primary.main
            bottom: '6px', //vertically centers
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperWidthSm: {
          minWidth: 480,
        },
        paperWidthMd: {
          overflow: 'hidden',
          padding: '0px',
          width: 'auto',
        },
      },
    },
        MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: YG_BRAND_BLUE, // text.interactable
          minWidth: 32,
          fontSize: 24,
          '&:hover': {
            color: YG_ACCENT_BLUE, // primary.light
            cursor: 'pointer',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: YG_TEXT_DARK, // unusable
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
        primary: {
          fontWeight: 'bold',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          '&&&:before': {
            borderBottom: '1px solid #CBCBCB30',
          },
          '&&:after': {
            borderBottom: '1px solid #CBCBCB30',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '1px solid #CBCBCB', //text input active border color
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
          color: YG_BRAND_BLUE, // text.interactable
          '&:hover': {
            backgroundColor: `${YG_ACCENT_BLUE}20`,
            cursor: 'pointer',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: YG_TEXT_DARK, //dropdown arrow color
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
          color: 'white',
          backgroundColor: YG_BRAND_BLUE,
          border: `1px solid ${YG_BLUE_TINT}25`,
          fontSize: '14px',
          '&.Mui-selected': {
            border: `0px solid ${YG_ACCENT_BLUE}90`,
            backgroundColor: YG_ACCENT_BLUE,
            color: 'white',
            '&:hover': {
              border: `0px solid ${YG_ACCENT_BLUE}90`,
              backgroundColor: YG_ACCENT_BLUE,
              color: 'white',
              cursor: 'default',
            },
          },
          '&:hover': {
            border: `1px solid ${YG_LINK_BLUE}`,
            backgroundColor: YG_LINK_BLUE,
            color: '#FFFFFF',
            cursor: 'pointer',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          '&:before': {
            color: tooltipOutline,
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
  },
});
