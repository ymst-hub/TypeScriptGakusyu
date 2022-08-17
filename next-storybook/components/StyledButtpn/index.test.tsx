import {render,screen,RenderResult,fireEvent} from '@testing-library/react'
import {Input} from './index'//ディレクトリ指定

//descriveで処理をまとめる
describe('Input',() => {
    let renderResult :RenderResult
    //それぞれのテストケース前にコンポーネントを描画し、renderResultにセットする
    beforeEach(() => {
        renderResult = render(<Input id="username" label="Username"/>) 
    })
    //テストケース後にコンポーネントを解放する
    afterEach(() => {
        renderResult.unmount()
    })

    //inputが空であることをテスト
    it('should empty in input on initial render',() => {
        //labelがUsernameであるコンポーネントに対応するinputの要素を取得する
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement
        //inputの要素の表示が空か確認する
        expect(inputNode).toHaveValue
    })
    it('should show input text',() => {
        const inputText = 'Test Input text'
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement
        //fireEventを使って、input要素のonChangeイベントを発火する
        fireEvent.change(inputNode,{target: {value:inputText}})//入力する
        expect(inputNode).toHaveValue(inputText)
    })
    it('should reset when user clicks button',async() => {
        //最初にinputにテキストを入力する
        const inputText = 'Test Input text'
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement
        fireEvent.change(inputNode,{target:{value: inputText}})

        //ボタンを取得する
        const buttonNode = screen.getByRole('button',{
            name:'Reset',
        })as HTMLButtonElement
        fireEvent.click(buttonNode)
        //inputが空か見る
        expect(inputNode).toHaveValue('')
    })

})