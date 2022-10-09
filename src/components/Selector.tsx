import { FC } from "react";
import Select, { MultiValue, StylesConfig } from "react-select";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useGetAllCountriesOptions } from "../hooks/useGetAllCountriesOptions";
import { setRegionControls } from "../store/controls/controlsSlice";
import { TypeTheme } from "../styles/theme";

export interface IOption {
  label: string;
  value: string;
}

type IsMulti = true;

const styles = (theme: TypeTheme) => {
  const selectStyle: StylesConfig<IOption, IsMulti> = {
    multiValueRemove: (styles, state) => ({
      ...styles,
      borderTopRightRadius: theme.variables.radius,
      borderBottomRightRadius: theme.variables.radius,
    }),

    clearIndicator: (styles, state) => ({
      ...styles,
      ":hover": {
        color: "#DE350B",
      },
    }),

    dropdownIndicator: (styles, state) => {
      return {
        ...styles,
        transition: "all .3s",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "",
        ":hover": {},
      };
    },

    multiValueLabel: (styles, state) => ({
      ...styles,
      color: theme.text,
    }),

    option: (styles, state) => {
      return {
        ...styles,
        borderRadius: theme.variables.radius,
        cursor: "pointer",
        backgroundColor: state.isFocused ? theme.bg : "none",
        ":active": {},
      };
    },

    input: (styles, state) => ({
      ...styles,
      color: theme.text,
    }),

    menu: (styles, state) => ({
      ...styles,
      background: theme["ui-base"],
      boxShadow: theme.shadow,
      borderRadius: theme.variables.radius,
    }),

    menuList: (styles, state) => ({
      ...styles,
      padding: 0,
      "::-webkit-scrollbar": {
        display: "none",
      },
    }),

    valueContainer: (styles, state) => ({
      ...styles,
      minHeight: "50px",
      maxWidth: "100%",
      display: "flex",
    }),

    multiValue: (styles, state) => ({
      ...styles,
      color: theme.text,
      background: theme.bg,
      borderRadius: theme.variables.radius,
    }),

    control: (styles, state) => ({
      ...styles,
      cursor: "pointer",
      backgroundColor: theme["ui-base"],
      border: "none",
      boxShadow: theme.shadow,
      minWidth: "300px",
    }),
  };

  return selectStyle;
};

const Selector: FC = () => {
  const regionsOptions = useGetAllCountriesOptions();
  const theme = useAppSelector((state) => state.themeBody.themeStyled);
  const values = useAppSelector((state) => state.controls.region);
  const dispatch = useAppDispatch();

  const onChangeValue = (value: MultiValue<IOption>) => {
    dispatch(setRegionControls(value as IOption[]));
  };

  return (
    <Select
      styles={styles(theme)}
      value={values}
      onChange={onChangeValue}
      placeholder="Filter by Region"
      isMulti
      options={regionsOptions}
      isLoading={!(regionsOptions.length > 0)}
      isDisabled={!(regionsOptions.length > 0)}
    />
  );
};

export { Selector };
