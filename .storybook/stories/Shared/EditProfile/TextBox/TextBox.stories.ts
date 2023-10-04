import { Meta } from "@storybook/react-native";
import TextBox, { TextCardProps } from "./TextBox";


const meta = {
    title:'Components/Shared/EditProfile/TextBox',
    component:TextBox
} satisfies Meta<typeof TextBox>

export default meta;
 type Story = {
    args:TextCardProps
 }

 export const TextCard: Story = {
    args:{
        heading:"",
        text:""
    }
 }