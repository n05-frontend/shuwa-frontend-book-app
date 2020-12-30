package main

import (
	"math/rand"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.CORS())
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/books", list)
	e.POST("/reviews", review)

	e.Logger.Fatal(e.Start(":1323"))
}

type Review struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Comment  string `json:"comment"`
	Like     int    `json:"like"`
}

type Book struct {
	ID       int      `json:"id"`
	Title    string   `json:"title"`
	Author   string   `json:"author"`
	Overview string   `json:"overview"`
	Image    string   `json:"image"`
	Reviews  []Review `json:"reviews"`
}

func list(c echo.Context) error {
	books := []Book{
		{
			ID:       1,
			Title:    "はじめてのフロントエンド",
			Author:   "執筆太郎",
			Overview: "webフロントエンド開発初心者向けの一冊。JavaScriptの基礎から実際にアプリケーションを実装して動かすまでを完全サポート！",
			Image:    "https://placehold.jp/148x210.png",
			Reviews: []Review{
				{
					ID:       1,
					Username: "開発初心者",
					Comment:  "はじめてフロントエンド関連の書籍を買ったのですが、とても分かりやすく入門書として最高の一冊でした。最近プログラミングを始めた友達がいるのでこの本をオススメしておこうと思います。",
					Like:     3,
				},
				{
					ID:       2,
					Username: "開発大好き",
					Comment:  "会社のプログラミング研修用として購入しました。受講したメンバーからは分かりやすいととても好評でした。",
					Like:     1,
				},
			},
		},
		{
			ID:       2,
			Title:    "現場で使えるフロントエンド",
			Author:   "書籍花子",
			Overview: "アプリケーションの実装だけではなく、テストやCI/CDといった現場の開発で必要になる知識を網羅！手元に置いておきたい一冊。",
			Image:    "https://placehold.jp/148x210.png",
			Reviews:  []Review{},
		},
	}
	return c.JSON(http.StatusOK, books)
}

func review(c echo.Context) error {
	review := new(Review)
	if err := c.Bind(review); err != nil {
		return err
	}

	rand.Seed(time.Now().UnixNano())
	review.ID = rand.Intn(100000)
	review.Username = "フロントエンド勉強中"
	review.Like = 0
	return c.JSON(http.StatusCreated, review)
}
