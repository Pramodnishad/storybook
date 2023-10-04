import react from "react";
import FeedCard, { FeedCardProps } from "./FeedCard";
import { Meta } from "@storybook/react-native";


const meta = {
title:'Components/Shared/Dishes/FeedCard',
component:FeedCard
} satisfies Meta<typeof FeedCard>

export default meta;
 
type Story = {
    args: FeedCardProps 
}

export const Card : Story ={
args:{
    backgroundImage:"",
    cardImage: "",
    cardText: "",
}
}