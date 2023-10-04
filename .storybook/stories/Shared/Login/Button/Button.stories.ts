import { Meta } from '@storybook/react-native';
import Button,{ButtonProps}  from './Button'


const meta = {
  title: 'Components/Shared/Login/Button',
  component: Button,

 
} satisfies Meta<typeof Button>;

export default meta;
 type Story = {
  args: ButtonProps
 }

 export const PrimaryButton: Story = {
  args:{
    label: 'Primary Small',
    type: 'primary',
    size: 'small',
    onPress: () => console.log('Primary Small Button Pressed'),
  }
 }
 export const SecondaryButton: Story = {
  args:{
    label: 'Secondary Medium',
    type: 'secondary',
    size: 'medium',
    onPress: () => console.log('Primary Medium Button Pressed'), 
  }
 }