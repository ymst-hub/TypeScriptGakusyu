import { ComponentMeta,ComponentStory } from "@storybook/react";
import { StyledButton2 } from "../components/StyledButtpn";
export default {
    title: 'StyledButton2',
    component:StyledButton2,
    argTypes: {
        //propsに渡すvariantをここで変更できるようにする
        variant: {
            control:{type:'radio'},
            options:['primary','success','transparent']
        },
        //propsに渡すchildrenをここで変更できるように追加
        children:{
            //テキストボックスの入力
            control: {type: 'text'}
        },
    },
}as ComponentMeta<typeof StyledButton2>

//テンプレ
const Template: ComponentStory<typeof StyledButton2> = (args) => 
<StyledButton2{...args} />

//storyを作成
export const TemplateTest = Template.bind({})

TemplateTest.args = {
    variant:'transparent',
    children:'変更したよ',
}
