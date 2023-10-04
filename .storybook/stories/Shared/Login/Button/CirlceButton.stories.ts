import { Meta } from "@storybook/react-native";
import CircleButton,{CircleButtonProps} from "./CircleButton";

const meta = {
    title:"Components/Shared/Login/CircleButton",
    component:CircleButton
} satisfies Meta<typeof CircleButton>

export default meta;
 
type Story ={
    args:CircleButtonProps
}

export const Primary: Story={
args:{
    onPress: () => { },
    type: 'primary',
}
}
export const Secondary: Story={
args:{
    onPress: () => { },
    type: 'secondary',
}
}