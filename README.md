## nextjs-starter-kit
Next.jsのeslintやhuskyなど足回りを整備したプロジェクトテンプレート.  

## Usage
```
yarn install
```

### lint-staged + huskyの設定
プロジェクトルートに `.husky` ががなければ以下のコマンドでこれを作成します.
```
npx husky install
```
`.husky` は（たぶん上記コマンド実行でpath書き込みがあり依存発生しているようなので）プロジェクトごとに設定しなければ動きません.


scriptを追記しcommit時に正常動作するようにします.
```
npx husky add .husky/pre-commit "npx lint-staged"
```
