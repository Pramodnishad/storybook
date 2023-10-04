import { Meta } from '@storybook/react-native';
import InputBox, { InputBoxType } from './InputBox';
import { Keyboard } from 'react-native';

const meta = {
    title: 'Components/Shared/Login/InputBox',
    component: InputBox,
    parameters: {
      layout: 'centered',
    },
  
  } satisfies Meta<typeof InputBox>;
  
  export default meta;
type Story = {
  args: InputBoxType,
};

export const IconInput: Story = {
    args: {
        icon: "",
        label: '',
        placeholder:"placeholder",
        value: "string",
        keyboardType:'default'
    }
}

export const PlaneInput: Story = {
    args: {
        value: 'input box',
        icon:undefined,
        label: '',
        placeholder:"placeholder"
    }
}