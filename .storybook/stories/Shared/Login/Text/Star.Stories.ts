import { Meta } from "@storybook/react-native";
import Star, { StarProps } from "../Text/Star";


const meta = {
    title: 'Components/Shared/Login/Text',
    component: Star,
  
  } satisfies Meta<typeof Star>;

  export default meta;
  type Story = {
    args:StarProps
  }

  export const RatingStar: Story = {
    args:{
        on:true
    }
  }