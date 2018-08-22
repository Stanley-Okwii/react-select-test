import React, { Component } from "react";
import classNames from "classnames";

import Select from "react-select";
import { colourOptions } from "./docs/data";
import "./ui/custom.css";
import "./ui/lib.css";
import "./ui/react-select.css";

const Control = props => (
  <div className={classNames("widget-dropdown-type-ahead-control")}>
    {props.children}
  </div>
);

const Menu = props => (
  <div className="widget-dropdown-type-ahead-menu">{props.children}</div>
);

const MenuList = props => (
  <div className="widget-dropdown-type-ahead-menu-list">{props.children}</div>
);

const NoOptionsMessage = props => <div className="no-options">No options</div>;

const Placeholder = props => (
  <div className="widget-dropdown-type-ahead-placeholder" {...props} />
);
const Option = props => {
  const { innerProps, isDisabled, isFocused, isSelected } = props;

  // eslint-disable-next-line
  return !isDisabled ? (
    <div
      className={classNames(
        "widget-dropdown-type-ahead-options",
        isFocused ? "is-focused" : null,
        isSelected ? "is-selected" : null
      )}
      {...innerProps}
    >
      {" "}
      {props.children}
    </div>
  ) : null;
};

const ClearIndicator = props => {
  const {
    innerProps: { ref, ...restInnerProps }
  } = props;
  return React.createElement(
    "div",
    {
      className: "widget-dropdown-type-ahead-clear-container",
      ...restInnerProps,
      ref
    },
    React.createElement(
      "svg",
      {
        className: "widget-dropdown-type-ahead-clear",
        focusable: false,
        height: 20,
        viewBox: "0 0 20 20",
        width: 20
      },
      React.createElement("path", {
        // tslint:disable-next-line:max-line-length
        d:
          "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      })
    )
  );
};

const DropdownIndicator = props => {
  const {
    innerProps: { ref, ...restInnerProps }
  } = props;
  return React.createElement(
    "div",
    {
      className: "widget-dropdown-type-ahead-dropdown-container",
      ...restInnerProps,
      ref
    },
    React.createElement(
      "svg",
      {
        className: "widget-dropdown-type-ahead-dropdown",
        // focusable: false,
        height: 20,
        viewBox: "0 0 20 20",
        width: 20
      },
      React.createElement("path", {
        // tslint:disable-next-line:max-line-length
        d:
          "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
      })
    )
  );
};

const Input = props => {
  const { isDisabled } = props;
  // return (<components.Input className={classNames("mx-input", isDisabled? "disabled" : null )} {...props} />);
  return (
    <input
      className={classNames(
        "mx-input",
        "form-control",
        isDisabled ? "disabled" : null
      )}
      {...props}
    />
  );
};

const IndicatorsContainer = ({ props, children }) => (
  <div className="widget-dropdown-type-ahead-indicators-container" {...props}>
    {children}
  </div>
);

const ValueContainer = ({ children, props }) => (
  <div className="widget-dropdown-type-ahead-value-container" {...props}>
    {children}
  </div>
);

const SelectContainer = ({ props, children }) => {
  // const { isDisabled } = props; , !isDisabled? "disabled": null
  // const { onKeyDown} = props; TODO: create on keydown event

  return (
    <div
      className={classNames(
        "widget-dropdown-type-ahead-select-container",
        children[1].props.isDisabled ? "disabled" : null
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const SingleValue = ({ props, children }) => (
  <div className="widget-dropdown-type-ahead-single-value" {...props}>
    {children}
  </div>
);

export default class CustomControl extends Component {
  state = {};
  render() {
    return (
      <div style={{"width": "700px"}}>
        <Select
          defaultValue={colourOptions[0]}
          isClearable
          // isDisabled = {true}
          components={{
            Control,
            Menu,
            NoOptionsMessage,
            Input,
            ValueContainer,
            SelectContainer,
            SingleValue,
            Placeholder,
            ClearIndicator,
            DropdownIndicator,
            IndicatorsContainer,
            MenuList,
            Option,
            IndicatorSeparator: null
          }}
          isSearchable
          name="colors"
          options={colourOptions}
          onChange={this._onChange}
        />
      </div>
    );
  }

  _onChange = value => {
    console.log(value);
  };
}
