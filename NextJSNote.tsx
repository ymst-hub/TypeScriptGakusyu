/*
nextjsの立ち上げ方
--tsはタイプスクリプトのオプション
npx create-next-app@latest --ts ファイル名
cd ファイル名
npm run dev
開発サーバーが立ち上がる

ビルドして、サーバーを立ち上げる方法
npm run build //コンパイルして
npm run start //立ち上げる

構成
pages
    ページコンポーネントや、APIのコードなどを配置
    pages/index.tsxにブラウザで表示される内容をコンポーネントとして実装している
    １ファイルが１ページに対応する
    Reactコンポーネントを返す関数を定義し、関数名とファイル名は同じにする。
    pages/sample.tsxを作成すると、http://localhost:3000/sampleでアクセス可能
    ここに今回学習用のtsxが主にある

public
    画像など、静的なファイルを配置
styles
    cssファイル
    アプリ全体 global.css
    ページ専用 Home.module.css
    *.module.css　コンポーネントを定義するファイルから読み込まれ、
    衝突を防ぐために自動でクラス名、IDなどへ接頭辞や接尾辞が付けられる（ビルド時）

レンダリング手法（https://qiita.com/cheez921/items/245860c839f7e3a15a69）
CSR クライアントサイドレンダリング
    ブラウザからのリクエスト時にほぼ中身がないHTML
    全ページの情報を持ったJS,cssが返される
    Reactの流れに近い
    SSRやSSG、ISRと組み合わせて使用する
    メリット
        遷移がサクサク
        ホスティングが容易
    デメリット
        初期ロード時に、全体の処理を送るため初期ローディングに時間がかかる
        SEOサイトには向いていない(初動が遅いからね)
    データ
        取得関数
            useSWRなど任意の関数
        タイミング
            ユーザーのリクエスト時（ブラウザ）
        備考
            SSR/SSG/ISRと同時に利用可能

SSR サーバーサイドレンダリング
    ブラウザからのリクエスト時にサーバー側でAPIを叩き、レンダリングまでを行い、
    ブラウザ側に送信する
    常に最新情報を表示したいページに便利
    メリット
        表示までの時間が早い(SEOに有利)
        最新のデータをもとにしてページの初期描写ができる
    デメリット
        SSRを実行できる実行環境が必要
        重くなるケースもある(低レイテンシに陥る可能性)
        サーバ側かクライアント側か理解していないと重複する
    データ
        取得関数
            getServerSideProps
        タイミング
            ユーザーのリクエスト時（サーバー）
        備考
            getInitialPropsを使ってもSSR

SSG 静的サイトジェネレーター
    静的なサイトを事前にビルドしておく仕込み
    ビルド時にあらかじめデータを取得、埋め込んだ状態で生成し、
    そのHTMLをリクエストに応じて配信する
    初期描画で古いデータが表示される可能性
    Next.jsにおいてはSSRよりも推奨されている
    メリット
        パフォーマンスが良い
        ホスティングが容易
    デメリット
        ページが増えるとビルドに時間がかかる
        更新に向いていない
        リアルタイム性には優れていない
    データ
        取得関数
            getStaticProps
        タイミング
            ビルド時
        備考
            データ取得を一切行わない場合もSSG相当

ISR インクリメンタル静的再生成
    SSGを決まった間隔で再レンダリングする
    有効期限を設定でき、期限が切れていたら再生成する
    口コミサイトなどに使われる
    ある程度最新データをもとにしたページを初期描画で表示できる
    メリット
        SSGのメリットを持ちつつ更新も可能
    デメリット
        vercel依存
    データ
        取得関数
            revalidateを返すgetStaticProps
        タイミング
            ビルド時（ISR）
        備考
            ISRはデプロイ後もバックグラウンドでビルドが実行される

ページの確認、レンダリング手法の確認
    npm run build
    ページの構成やつながるCSS、レンダリング手法などの確認も行える

[].tsx
    複数ページのSSGを作成する時に使用する
    getStaticPropsとgetStaticPathsを利用する
    getStaticPathsはgetStaticPropsより前に呼ばれる
    pathsで設定しておく
    pages/post/1　といったようにアクセスする

useRouterとは
    ルーティング情報にアクセス、
    router.pushでページ遷移にも利用可能
    page.tsx
    tsr.tsx

リンク
    next/linkやnext/image
    Linkコンポーネント
        クライアントサイドで新しいページを描画する
        通常より早い動作をする
        ※通常は遷移先のページを配信する

        使い方
            import next/link
            <Link href = "/ssr">
            <a>Go to SSR</a>
            </Link>
        
            クエリパラメータを指定する場合
                <Link href="/ssg?keyword=next">
                    <a>Go to SSR</a>
                </Link>
                //hrefに文字を指定する代わりにオブジェクトを指定できる
                <Link href={{
                    pathname:'/ssg',
                    query:{keyword:'hello'},
                }}>
                    <a>Go to SSG</a>
                </Link>
            aタグの代わりにbuttonタグを使ったら、onClickが呼ばれたタイミングで遷移する

        routerオブジェクトのpush滅ソッドを呼ぶことでも遷移可能
            routerの豆知識 
                reload()　リロードできる
                back() ページを戻る

画像の表示
ビルトイン機能でパフォーマンスの最適化が可能
next/imageをインポートする
imgタグではなく、Imageコンポーネントを使用することでサーバーで最適化を行う
Imageではurlの他に、widthとheightを渡さなければいけない
imgタグとの違い
    ブラウザのg画面に応じてリサイズする
    画像の場所に近づいたら表示を行う
Imageコンポーネントのprops
    layout ビューポートの大きさによって画像をリサイズするか設定できる
           デフォルトはintrinsic
        intrinsic
            ビューポートが画像サイズより小さい時にリサイズした画像を表示
        responsive
            ビューポートに応じてリサイズした画像を表示
        fixed
            widthとheightに準拠し、ビューポートの大きさによらず同じサイズの画像
        fill
            親要素に合わせた画像を表示
    placeholder 画像の読み込み中に表示する内容を表示できる
        empty
            画像領域のみ確保して何もしない
        blur
            ぼかし画像を表示
            パスで指定した場合などはblurDataURLにぼかし画像のurlを指定する
    外部リソースの画像を表示する場合
        layoutがfill以外の場合はwidthとheightを与える必要がある
        最適化がした画像を表示できないため以下のどちらかを実施する
            next.config.jsにdomainsに最適化を許可する画像のドメインを指定する
            Imageコンポーネントのunoptimizedにtrueを渡して最適化を無効化する

APIルート
pages/api以下においたファイルではAPI (jsonベース)を定義する
ページで使うAPIの実装、プロキシとして利用できる。
ビルド時はAPIを使えないため、SSGのメソッド（getStaticPath、getStaticProps）からは
呼び出せない

環境変数
.envファイル
    ビルトイン環境変数のためのファイル
    .env,.env.local,.env.${設定名},env.${環境名}.local
    などで呼び出せる
    
*/
