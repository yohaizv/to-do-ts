import { Checkbox as AntdCheckbox } from "antd";
import * as React from "react";

const Checkbox: React.SFC<{ onChange: (e:any) => void }> = ({
  onChange,
  children
}) => {
  return <AntdCheckbox onChange={onChange}>{children}</AntdCheckbox>;
};

export default Checkbox;
