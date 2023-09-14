export const commonColors = {
  primaryWhite: "#fbfbfb",
  secondaryWhite: "#ffffff",
  primaryDark: "#00060e",
  secondaryDark: "#010a0f",
  primaryBlue: "#75C2F6",
  primaryGray: "#3E4042"
}

export const lightThemeColors = {
  primary: {
    main: commonColors.primaryWhite
  },
  secondary: {
    main: commonColors.secondaryWhite
  },
  text: {
    primary: commonColors.primaryDark,
    secondary: commonColors.secondaryDark
  },
  background: {
    default: commonColors.primaryWhite
  }
}

export const darkThemeColors = {
  primary: {
    main: commonColors.primaryDark
  },
  secondary: {
    main: commonColors.secondaryDark
  },
  text: {
    primary: commonColors.primaryWhite,
    secondary: commonColors.secondaryWhite
  },
  background: {
    default: commonColors.primaryDark
  }
}