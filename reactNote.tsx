/*
Reactの立ち上げ方
npx create-react-app 名前

構成
Readme.md
package.json
public
    favicon.ico
    index.html
src
    index.tsx
    index.css
    App.css
    App.tsx

流れ
public/index.htmlが初めに表示→src/index.tsxが実行される
render()で来たAppをrootオブジェクト作成時に与えられたrootのID以下に表示


JSXとは
HTMLをそのまま書き込んで実行できるもの

基本キーワード
TSX
.tsxを使用する
let MyReactComponent = <div id='myreact'></div>
<span>Hello</span>として書ける
{}を使うとJSの値を埋め込むことができる
const name = 'You'
<span>こんにちは{name}さん</span>

index,tsxに記載のコード
components
    Hello.tsx
    Name.tsx
    Message.tsx
    ContainerSample.tsx
    ContainerSampleContext.tsx
    Counter.tsx
    FizzBuzz,tsx
    Saibyouga.tsx
    UseMemoSample.tsx
    Click.tsx
    UseContext.tsx
    UseRef.tsx
    UseImperativeHandle.tsx
    CustomHook.tsx

表示する
const root = ReactDOM.createRoot(コンテナ);
root.render(要素);

要素
reactコンポーネントを構成する部品のこと
const root = ReactDOM.createRoot(
    document.getElementById('root) as HTMLElement
);
root.render(
    <h1>見出し</h1>
)

コンポーネントとは
見た目と動きをセットにしたUI部品のこと
関数コンポーネント、クラスコンポーネントがあるが、関数コンポーネントのが普通
コンポーネントはパスカルケース（大文字から始まる必要がある）

型
関数コンポーネント
    任意のオブジェクトをpropsとして引数に
    JSX.Element型を戻り値にとる関数
    propsへ型注釈を入れると親コンポーネントから与えられる値を制限できる
    childrenをとる場合はchildrenの型はReact.ReactNodeを指定する

prop
親から子へのデータ移転
Context
直接親から渡さなくてもOk
ProviderとConsumerの２つを使う
providerにデータを渡し、Consumerで受け取る
入れ子にもでき、一番近いデータを取得する
useContextを使うとconsumerがなくてもOk

React Hooks
関数コンポーネントの中で、状態やライフサイクルを扱う
    Reactの再描画するタイミング
    propsなど内部状態が更新された時
    コンポーネント内で参照しているContextの値が更新された時
    親コンポーネントが再描画された時

クリックしたらなど
    useState
    状態を扱う
    useState()で新しい状態を作成、第一引数の値が初期状態
    戻り値は配列
    const [状態,更新関数] = useState(初期状態)

    useReducer
    useStateより複雑な状態を扱う
    配列やオブジェクトなどをまとめたものを状態として扱う場合に用いる
    useReducerは現在の状態とactionを渡す。
    次の状態を返すreducer関数を用いる
    reducer(現在の状態,action){
        return 次の状態
    }
    const [現在の状態,dispatch] = useReducer(reducer,reducerに渡される初期状態)

    useCallback、useMemo
    値や関数を保持して必要のない子要素のレンダリングや計算を抑制する
    親コンポーネントが再描画されてても、
    propsやcontextの値が変化しない場合再描画が発生しなくなる
    関数コンポーネントをmemo関数でラップするとできる

    useCallback
    関数をメモ化するために使用する（同じ時は呼び出さない）

    useMemo
    値をメモ化する
    第一引数には値を戻す関数、第二引数には依存配列を渡す

    useEffect
    副作用を実行する
    再描画が終わった後に処理が実行される。
    第二引数に[]を渡すと再描画後１度しか実行されない

    useLauoutEffect
    DOM更新後、再描画前に行われる。

    useContext
    Contextから値を参照する。
    useContext(context)とすることで値を取り出せる

    useRef,useImperativeHandle
    データ保持、DOM参照を行う
    refのオブジェクトは再描画を行わない

    useRef
    再描画せずに保持できる

    useImperativeHandle
    親のrefに代入する値を設定するのに使う
    親子にまたがるときに使用する
    コンポーネントの関数を好きなタイミングで明示的に呼び出せる
    多くの場合propsで代用できる。

    カスタムフック
    自分でフックを作れる。
    use~~~の名前にする



*/
