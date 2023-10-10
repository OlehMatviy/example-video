import { TouchableOpacity } from "react-native";
import { FC } from "react";
import { checkbox } from "@app/components/forms/checkbox/checkbox.style";
import { SvgIcon } from "@app/components";

type Props = {
  checked: boolean;
  onChange: () => void;
};
const Checkbox: FC<Props> = ({ checked, onChange }) => {
  return (
    <TouchableOpacity
      style={[checkbox.box, checked ? checkbox.active : {}]}
      onPress={onChange}
      activeOpacity={0.9}
    >
      {checked ? <SvgIcon icon="checkbox" /> : null}
    </TouchableOpacity>
  );
};

export default Checkbox;
