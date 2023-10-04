import ProfileCardList, { ProfileListProps } from "./ProfileList";
import { Meta } from "@storybook/react-native";


const meta = {
    title:'Components/Shared/EditProfile/ProfileCard',
    component:ProfileCardList
} satisfies Meta<typeof ProfileCardList>


export default meta;
type Story = {
    args:ProfileListProps
}

export const Profilelist : Story = {
    args:{
        text:"hello",
         picture:"",
          icon:""
    }
}