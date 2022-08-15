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

    導入
        npm install --save styled-components
        npm install --save-dev @types/styled-components




*/