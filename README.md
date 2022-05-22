![introduce](https://user-images.githubusercontent.com/75941362/169685574-489e3314-c2ac-4fa2-99b6-5485ab28f72b.gif)

<br/>
<h1 align="center">🐶 <a href="https://wonder-clothes.vercel.app/about">わんだーくろーす</a></h1><br/>

<p align="center">
  <a href="https://wonder-clothes.vercel.app/about"><img src="https://wonder-clothes.vercel.app/logo.png" height="100px;" /></a>
</p>

<h3 align="center">犬のファッションを自慢しよう</h3><br/>
<p align="center">「わんだーくろーす」は犬のファッションの共有サイトです。服を着たかわいいワンちゃんを自由に投稿してみよう。</p><br/>

## URL

[App](https://wonder-clothes.vercel.app/about)

- こちらのページよりテストログインが可能です。
- 犬のファッションの共有サイトとありますが、テストアカウントでは犬のファッションに限らず自由に機能をお試しください。

[GitHub](https://github.com/Mimu-salon/wonder-clothes)

<br/>

## Technologies

<p align="left">
  <a href="https://www.typescriptlang.org/"><img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" height="50px;" /></a>
  <a href="https://nextjs.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" height="50px;" /></a>
  <a href="https://ja.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" height="50px;" /></a>
  <a href="https://firebase.google.com/?hl=ja"><img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" height="50px;" /></a>
  <a href="https://graphql.org/"><img src="https://cdn.worldvectorlogo.com/logos/graphql.svg" height="50px;" /></a>
  <a href="https://hasura.io/"><img src="https://seeklogo.com/images/H/hasura-logo-B718105639-seeklogo.com.png" height="50px;" /></a>
  <a href="https://www.apollographql.com/"><img src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg" height="50px;" /></a>
</p>
<p align="left">

<a href="https://vercel.com/"><img src="https://user-images.githubusercontent.com/65433193/118944114-3b393980-b98f-11eb-84a5-fc9a1db8ea6b.png" height="50px;" /></a>
<a href="https://eslint.org/"><img src="https://cdn.worldvectorlogo.com/logos/eslint-1.svg" height="50px;" /></a>
<a href="https://prettier.io/"><img src="https://cdn.worldvectorlogo.com/logos/prettier-2.svg" height="50px;" /></a>
<a href="https://chakra-ui.com/"><img src="https://bestofjs.org/logos/chakra-ui.svg" height="50px;"></a>

</p><br />

| 領域                    | 技術やツール                |
| ----------------------- | --------------------------- |
| デザイン/設計           | 紙/draw.io                  |
| フロントエンド          | Next.js(React)/TypeScript/  |
| バックエンド            | Firebase/Hasura(PostgreSQL) |
| 状態管理/データフェッチ | Apollo                      |
| スタイル                | ChakraUI                    |
| Hosting                 | Vercel/Heroku               |
| API Server              | Firebase Functions          |
| 認証                    | Firebase Authentication     |
| ストレージ              | Firebase Storage            |
| Linter/Formatter        | ESLint/Prettier             |

### その他ライブラリ等

- graphql-codegen(Hasura エンドポイントからの自動型生成)
- react-hook-form,yup(フォームバリデーション)
- browser-image-compression(画像圧縮)
- react-image-crop(画像トリミング)
- framer-motion(CSS アニメーション)
  <br/>

## Concept

### わんだーくろーす

愛犬のファッションを共有する SNS を作りたいと思い、『わんだーくろーす』と名付けました。お気づきかもしれませんが、"わんだー"は英語の"Wonder"と犬の鳴き声の"ワン！"をかけています。<br />

私自身が犬（チワワ）を飼っており、似合う服を選ぶことの難しさを感じていました。<br />
試着できるお店は限られており、デパート内などペット同伴不可のお店も多く存在します。<br />
そのような中で、着せてみて、”しくじった！？（あまり似合ってない）”という経験を多くしてきました。

既存のペットコミュニティの SNS を使って感じた課題は「**敷居が高い**」ことです。<br />
高画質、似合っている服、完璧なカメラ目線の犬というような写真ばかりでは、<br />
幅広いユーザー獲得に繋がらないのではと感じました。<br />
なにより、犬は人間ほどいうことをきかず、狙った写真をとることは案外難しいのです...

わんだーくろーす ではそういった課題を解決するために幅広いユーザーをターゲットとしています。<br />
おすすめのファッションの写真はもちろん、似合っていないと思う場合や、スマホのフォルダの奥底に眠っている写真など、失敗例を共有することを歓迎しています。<br />
気楽に投稿することで参入障壁を低くし、より多くの人に楽しんでもらう機会を与えたいと考えて制作しました。<br />

<br/>

## Functions

### 使い方 ページ

使い方 ページからサイトの全体像と使用方法を知ることができる。<br  />

### サインイン/サインアップ

ユーザーは**Email**、**Google**、**Twitter**での３種類の方法でアカウント作成が可能。<br />
FirebaseAuth での認証を行う。
それぞれの入力フォームには react-hook-form を採用しており、再レンダリングやバリデーションを考慮して実装。

### 投稿

1 枚の画像付きの短めの文章(140 文字以内)で投稿が可能なコンテンツ。<br />
投稿した画像は FirebaseStorage にアップロードされる。<br />
また、投稿前に browser-image-compression を使い圧縮してから格納している。

### タグ

投稿作成の際には、"ペットの大きさ"（小型犬、中型犬、大型犬）と"それっておすすめ"（おすすめしたい！、しくじった！？）の選択式のタグを付与できる。

### コメント

投稿したポストにはログイン済みユーザーがコメントを付けられる。<br />
GraphQL の Subscriptions を用いて実装。

### いいね

投稿したポストにはログイン済みユーザーがいいねをできる。<br />
いいね時の CSS アニメーションには framer-motion を使用。

### ユーザプロフィール

ユーザー個人のプロフィール画面からは自分の投稿、自分がいいねした投稿、<br />
フォロー中ユーザーとフォロワーが閲覧可能。<br />
また、自分自身のプロフィール編集が可能で、サムネイル画像の変更では任意の画像を任意のサイズで登録できる。<br />
この際の画像トリミング処理には react-image-crop を使用。

### ユーザフォロー

他のユーザーに対してフォローをすることが可能。<br />

検索バーへ文字を入力し、虫眼鏡マークを押すことでコンテンツの以下の検索が可能。

- 投稿の内容
- ユーザー名

<br/>

## Impressions

### 設計の進め方

① コンセプトやターゲットを簡単に考える(紙やメモで作成)<br />
② 機能の一覧を考える(紙やメモで作成)<br />
③ 機能から考えられる UI のモデルと画面遷移を考える(紙やメモで作成)<br />
④ 作った UI モデルから必要なデータを考え ER 図を作成(draw.io を使用)<br />

### ER 図
![ER](https://user-images.githubusercontent.com/75941362/169686609-40609bfd-af3c-43bc-9eea-42e789adb752.png)

### 苦労した点、悩んだ点

- 各ページのレスポンシブ対応
- Atomic デザインの運用について
- コンポーネント分割の粒度について
- TypeScript を React で使う際の型定義
- API に GraphQL を採用したこと
- FirebaseAuth と Hasura 連携時の jwt 認証
- Hasura の Permissions 設定
- Apollo によるステート管理
- SSG/ISR ページのデータ更新時の挙動
- 再レンダリングの抑制について(useMemo,React.memo,useCallback 等)
- 非同期処理
- 設計のやり方
