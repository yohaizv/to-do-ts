import { Checkbox as AntdCheckbox } from "antd";
import * as React from "react";

const Checkbox: React.SFC<{ checked:boolean,onChange: (e:any) => void }> = ({
  onChange,
  checked,
  children
}) => {
  return <AntdCheckbox checked={checked} onChange={onChange}>{children}</AntdCheckbox>;
};

export default Checkbox;
