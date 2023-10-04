import { Meta } from "@storybook/react-native";
import StarRating, {StarRatingProps} from "./StarRating";

const meta = {
  title: 'Components/Shared/Login/StarRating',
  component: StarRating,
  argTypes: {
    rating: {
      control: {
        type: 'range', 
        min: 0, 
        max: 5, 
        step: 1,
      },
    },
  },

} satisfies Meta<typeof StarRating>;

export default meta;
 type Story = {
  args: StarRatingProps
 }

 export const Red: Story ={
  args:{
    rating:2,
    totalStars:5,
    starSize: 15,
    starColor: "#ffff",
  }
}