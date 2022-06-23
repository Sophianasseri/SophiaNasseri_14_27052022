// Custom theme for react-select
export const selectCustomTheme = (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#5a6f07',
      primary25: '#CDD2B8',
    },
  };
};
