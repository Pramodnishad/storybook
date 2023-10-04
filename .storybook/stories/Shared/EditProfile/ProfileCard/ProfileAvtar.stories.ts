import { Meta } from "@storybook/react-native";
import ProfileCard, {ProfileAvatarProps} from './ProfileAvtar'
import ProfileAvtar from "./ProfileAvtar";
const meta = {
    title:'Components/Shared/EditProfile/ProfileCard',
    component:ProfileCard
} satisfies Meta<typeof ProfileAvtar>

export default meta;
 type Story = {
    args:ProfileAvatarProps
 }

 export const SmallAvtar: Story={
    args:{
       picture: "https://example.com/your-profile-image.jpg",
       type:'small' 
    }
 }
 export const LargeAvtar: Story={
    args:{
       picture: "https://example.com/your-profile-image.jpg",
       type:'large' 
    }
 }
