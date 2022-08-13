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
components
    Hello.tsx
    name.tsx


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

*/