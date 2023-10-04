import { type } from "os";
import Badges, { BadgesProps } from "./Badges";
import { Meta } from "@storybook/react-native";

const meta = {
    title: 'Components/Shared/EditProfile/Badge',
    component:Badges
} satisfies Meta<typeof  Badges>

export default meta;
type Story = {
    args: BadgesProps
}

export const SelectBadgeCardLarge: Story ={
    args:{
        text: "hello",
        height:24,
        width:90 
    }
}
export const SelectBadgeCardSmall: Story ={
    args:{
        text: "hello",
        height:24,
        width:73 
    }
}
export const LargeBadge: Story ={
    args:{
        text: "hello",
        height:24,
        width:68 
    }
}
export const MediumBadge: Story ={
    args:{
        text: "hello",
        height:24,
        width:59 ,
    }
}
export const SmallBadge: Story ={
    args:{
        text: "hello",
        height:24,
        width:51 
    }
}