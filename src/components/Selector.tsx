import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select, { MultiValue, StylesConfig } from "react-select";
import { useFetchAllCountriesQuery } from "../api/countries.api";
import { useAppSelector } from "../hooks/redux";
import { TypeTheme } from "../styles/theme";

interface IOption {
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
  const [regions, setRegions] = useState<string[]>([]);
  const [regionsOptions, setRegionsOptions] = useState<IOption[]>([]);
  const theme = useAppSelector((state) => state.themeBody.themeStyled);
  const { data: countries } = useFetchAllCountriesQuery();

  const getValue = () => {
    return regionsOptions.filter((item) => regions.includes(item.label));
  };

  const onChangeValue = (value: MultiValue<IOption>) => {
    const valueLabel = value.map((item) => item.label);
    setRegions(valueLabel);
  };

  // useEffect(() => {
  //   if (allRegion.length > 0) {
  //     const regOptions = allRegion.map((item) => ({
  //       label: item,
  //       value: item,
  //     }));
  //     setRegionsOptions(regOptions);
  //   }
  // }, [allRegion]);

  // useEffect(() => {
  //   dispatch(setRegionControlsOptions(regions));
  // }, [dispatch, regions]);

  return (
    <Select
      styles={styles(theme)}
      value={getValue()}
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
