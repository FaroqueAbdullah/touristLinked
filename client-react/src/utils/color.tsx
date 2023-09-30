export const commonColors = {
  primaryWhite: '#fbfbfb',
  secondaryWhite: '#ffffff',
  primaryDark: '#00060e',
  secondaryDark: '#010a0f',
  primaryBlue: '#007FFF',
  darkGray: '#3E4042',
  lightGray: '#7D7C7C',
};

export const lightThemeColors = {
  primary: {
    main: commonColors.primaryBlue,
  },
  secondary: {
    main: commonColors.secondaryWhite,
  },
  text: {
    primary: commonColors.primaryDark,
    secondary: commonColors.secondaryDark,
  },
  background: {
    default: commonColors.primaryWhite,
    paper: commonColors.secondaryWhite,
  },
  grey: {
    500: commonColors.darkGray,
  },
};

export const darkThemeColors = {
  primary: {
    main: commonColors.primaryBlue,
  },
  secondary: {
    main: commonColors.secondaryDark,
  },
  text: {
    primary: commonColors.primaryWhite,
    secondary: commonColors.secondaryWhite,
  },
  background: {
    default: commonColors.primaryDark,
    paper: commonColors.secondaryDark,
  },
  grey: {
    500: commonColors.lightGray,
  },
};
