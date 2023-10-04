import { Meta } from "@storybook/react-native";
import TextType, { TextTypeProps } from "./TextType";

const meta = {
    title: 'Components/Shared/Login/Text',
    component: TextType,
  
  } satisfies Meta<typeof TextType>;

  export default meta;
  type Story = {
    args:TextTypeProps
  }

  export const Heading: Story ={
    args:{
        text: "Hello",
        size: 32,
        fontFamily: "",
        fontWeight: "500",
        color:"#232323"
    }
  }
  export const SubHeading: Story ={
    args:{
        text: "Hello",
        size: 16,
        fontFamily: "",
        fontWeight: "400",
        color:"#232323"
    }
  }
  export const text: Story ={
    args:{
        text: "Hello",
        size: 10,
        fontFamily: "",
        fontWeight: "400",
        color:"#232323"
    }
  }