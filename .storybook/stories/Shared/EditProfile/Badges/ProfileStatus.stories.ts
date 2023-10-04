import { type } from "os";
import ProfileStatus, { ProfileStatusProps } from "./ProfileStatus";
import {Meta} from "@storybook/react-native"

const meta = {
    title:'Components/Shared/EditProfile/ProfileStatus',
    component:ProfileStatus
} satisfies Meta<typeof ProfileStatus>

export default meta;
type Story = {
    args:ProfileStatusProps
}

export const StatusProfile: Story = {
    args:{
        onPress:()=>{},
        text:"Complete Profile now"
    }
}