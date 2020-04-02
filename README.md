
# 音楽再生するやつ

## 使い方

1. mp3 ファイル (複数) と tsv ファイル (一つ) を、一つの zip ファイルにまとめておく。
1. __upload zip file__ ボタンから zip ファイルを上げる
1. 上下キーやタップで曲移動 (プレビュー範囲のみ再生)
1. 現在の曲タップや左右キーで選択 (フル再生)


## プレビュー範囲の指定用 tsv ファイル

```tsv
ファイル名1	開始位置	終了位置
ファイル名2	開始位置	終了位置
ファイル名3	開始位置	終了位置
ファイル名4	開始位置	終了位置
 ...
```

#### 具体例

```tsv:data.tsv
More More More.mp3	1:05	2:04
Love At First Sight.mp3	11:5	13:9.82
Can't Get You Out Of My Head.mp3	3:5	05:04
```

`m:n` で `m分n秒` の意味になる。
秒は小数が書ける。



## update

2020/04/03: 曲のソートをファイル名で行うようにしました。
