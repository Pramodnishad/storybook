import { Meta } from "@storybook/react-native";
import CheckBox,{CheckBoxProps} from "./CheckBox"

const meta = {
  title: 'Components/Shared/Login/CheckBox',
  component: CheckBox,

} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = {
  args: CheckBoxProps,
};
export const Checked: Story = {
  args: {
   label:"checked",
   checkedColor:"",
  }
}
