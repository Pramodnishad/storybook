import { Meta } from "@storybook/react-native";

import ProfileLogin, { ProfileLoginProps } from "./ProfileLogin";

const meta = {
    title: 'Components/Shared/Login/ProfileLogin',
    component: ProfileLogin,
  
  } satisfies Meta<typeof ProfileLogin>;
  
  export default meta;
  type Story = {
    args: ProfileLoginProps,
  };

  export const PlainTextBox: Story = {
    args:{
      type: "Google",
      onPress: () => {},
      textColor: "black",
    }
  }