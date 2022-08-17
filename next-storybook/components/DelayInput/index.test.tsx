import {render,screen,RenderResult, fireEvent} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { DelayInput } from './index'

//DelayInputコンポーネントに関するテスト
describe('DelayInput',() => {
    let renderResult:RenderResult
    let handleChange: jest.Mock
    beforeEach(() => {
        //モックを作成する
        handleChange = jest.fn()
        //モック関数をDelayButtonに渡して描画
        renderResult = render(<DelayInput onChange={handleChange} />)
        jest.useFakeTimers()
    })
    afterEach(() => {
        renderResult.unmount()
        jest.useFakeTimers
    })
    //span要素が空のことをテスト
    it('should display empty in span on initial render',() => {
        const spanNode = screen.getByTestId('display-text')as HTMLSpanElement
        //初期表示は空
        expect(spanNode).toHaveTextContent('入力したテキスト')
    })

    //入力中と表示されるかテスト
    it('should display 「入力中」 immediately after onChange event occurs',() => {
        const inputText = 'Text Input Text'
        const inputNode = screen.getByTestId('input-text') as HTMLInputElement
        //inputのonChangeを呼び出す
        fireEvent.change(inputNode,{target: {value:inputText}})
        const spanNode = screen.getByTestId('display-text') as HTMLInputElement
        //入力中と表示するか確認
        expect(spanNode).toHaveTextContent('入力中...')
    })

    //入力1秒後にテキストが表示されるかテスト
    it('should display input text 1second after onChange event occures',async() => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByTestId('input-text') as HTMLInputElement
        //inputのonChangeイベントを呼び出す
        fireEvent.change(inputNode,{target:{value:inputText}})
        //act関数で実行してタイマーのコールバック状態
        await act(() => {
            jest.runAllTimers()
        })
        const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
        //入力したテキストが表示されるか確認
        expect(spanNode).toHaveTextContent(`入力したテキスト:${inputText}`)
    })

    //入力して1秒後にonChangeが呼ばれるかテスト
    it('should call onChange 1second after onChange event occurs',async() => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByTestId('input-text') as HTMLInputElement
        //inputのonChangeイベントを呼び出す
        fireEvent.change(inputNode,{target:{value:inputText}})
        //タイマーの実行
        await act(() => {
            jest.runAllTimers()
        })
        //モック関数を渡し呼ばれたか確認する
        expect(handleChange).toHaveBeenCalled()
    })
})