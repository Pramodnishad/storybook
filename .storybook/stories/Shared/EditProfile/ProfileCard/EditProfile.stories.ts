import { Meta } from "@storybook/react-native";
import PersonalProfileCard, { PersonalProfileCardProps } from "./EditProfile";

const meta = {
    title:'Components/Shared/EditProfile/EditProfile',
    component:PersonalProfileCard
} satisfies Meta<typeof PersonalProfileCard>

export default meta;
 type Story = {
    args:PersonalProfileCardProps
 }

 export const EditProfileCard : Story = {
    args:{
        avatarUrl:"",
        name:"",
        location:"",
        bio:"",
        foodsLike:"",
        foodsDislike:"",
        allergies:"",
    }
 }
