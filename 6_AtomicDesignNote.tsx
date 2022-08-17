/*
見た目と振る舞いを分離するためのコンポーネントのルール

Presentational Component 以下PC
    propsで渡されたデータをもとに適切なUIパーツを表示することのみを行う
    内部に状態を持たず、API呼び出しなども行わない
    propsにのみ依存することでデザインにデバッグが容易になる

Container Compornent　以下　CC
    デザインは一切実装せず、ロジックのみを行う
    Hookを持たせて、状態に応じて表示内容を切り替える
    APIなども呼び出す
    Contextを参照して、Presentational Componentへ表示に必要なデータを渡す

親子関係
    CC=親　→ props　→ PC=子

Atomic Design
    階層にすることで一貫性を保ち管理しやすくする
    Reactコンポーネントと相性が良い→Rとして記載する
    最小
    Atoms
        最小の要素、これ以上分割不可能
        例）button,text
        R） 基本的に状態や振る舞いを持たず、親から渡す。propsを使ったり、CSSで親要素の大きさに依存させたりする。
        　  汎用的に利用することが多いため、画像URLを含むオブジェクトを渡すのではなく
        　  画像のURLのみを渡す
    Molecules
        複数のAtomsを組み合わせて構築
        例）ラベル付きのテキストボックス
        R） 基本的に状態や振る舞いを持たず、親から渡す。
        　  複数のAtomsを配置して位置関係をCSSで指定する
        　  一つの役割を持ったUIのみを実装する。
    Organisms
        Moleculesより具体的な要素
        例）入力フォーム
        R） サインインフォームやヘッダーなどのUIコンポーネントを実装する。
        　  ドメイン知識に依存したデータを受け取ったりContextを参照したり、
        　  独自の振る舞いをもつ。状態を持たせるなど副作用を実装する場合は、見た目をPCに
        　  ロジックをCCに実装する。
        　  一つの階層でも複数ファイルに実装することがある。
    Templates
        ページ全体のレイアウト
        例）ページのレイアウト
        R） ページ全体のレイアウトを実装する。
         　 Organisms以下のコンポーネントを配置し、それぞれをCSSでレイアウトするといった役割
    Pages
        ページそのもの
        例）そのまま
        R） Pagesページ単位のUIコンポーネントを実装する
         　 router関係の処理、APIコールなどの副作用の実行
        　  Contextに値を渡すなどのロジックに関する動きを行う
    最大

styled-components
    CSS in JSと呼ばれるライブラリの１つ。
    コンポーネントにスタイルを適用するために使う
    コンポーネントと同じファイルでスタイルを実装できる。
    ユニークなクラス名が設定され、対象コンポーネントのみにスタイルが適用される
    JS,TS、HTML、CSSを１つにまとめられる
    propsでCSSを制御することもできる

    導入
        npm install --save styled-components
        npm install --save-dev @types/styled-components
        
        next.config.jsに以下の設定
            // @type {import ('next').NextConfig}
            const nextConfig = {
                reactStrictMode: true,
                compiler: {
                    styledComponents: true,
                },
            } 
            module.exports = nextConfig
    
    使い方
        import styled from 'styled-components'
        const 代入元 = styled.要素名`スタイル(
            ${(props) => props.指定するもの}
        )`

        mixin
        一度定義したCSSを使いまわせる
        スタイルの箇所に${要素名}とする
    
        継承
        要素名部分を代入元にするとそこから継承できる
        現状のものを少し変化させるだけなら継承で作ったほうが良い

        as
        <代入元 as="タグなど">と宣言すると他の要素として表示できる

        コンポーネントにスタイルを適用する
        propsでclassNameを渡すこともできる
        
        Theme
        使用する文字、スペースの大きさをあらかじめ別の場所で定義しておき、
        propsでスタイルを設定する時に、ここから参照できる
            使い方
                theme.tsに設定する
                ThemeProviderに渡す
                    pages/_app.tsxにThemeProviderを設定する
                    Contextで参照

StoryBook
    コンポーネントのカタログを構築できる
    独立した環境でUIを確認できるようになるため、
    デザイン上の問題による手戻りを減らすことができる
        コマンド
            npx sb init 組み込み
            npm run storybook　起動
        
        使い方
        components/StyledButton/index.tsxを作成し、記述する。
            StyledButtonはvarientによって色を制御できる
        stories/StyledButton.stories.tsxを作成する。
            argTypesを指定すると、ボタンの振る舞いを決められる
                onClickを設定すると、storyboard上でクリックされた時に表示ができる
        actions
            action(コンソールでの呼び出し名)
            onClick内に処理を記述し、
            タグの任意のところで呼び出す
        controls
            テキスト上などで、画面を変化させられる
            argtypeを利用して、propsを制御したりする。
        アドオン
            機能を拡張できる
            controlsやactionはaddon-essentialsに含まれる（最初からある）
            追加する方法
                ./storybook/main.jsのaddonにアドオンを指定する

ユニットテスト
    必要なパッケージ
        npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
    
    使い方
        jest.setup.jsを作成し、記述 import nextJest from "@testing-library/jest-dom/extend-expect";
        jest.config.jsを作成し、記述
            const nextJest = require('next/jest')
            const createJestConfig = nextJest({dir: './'})
            const customJestConfig = {
            testPathIgnorePatterns: ['<rootDir>/.next/','<rootDir>/node_modules/'],
            setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
            testEnvironment: 'jsdom',
            }
            module.exports = createJestConfig(customJestConfig)
        package.jsonに記述
            "scripts"内に"test": "jest",を記述
        npm run test






*/