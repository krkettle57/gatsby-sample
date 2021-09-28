import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage: React.VFC<PageProps> = () => (
  <Layout>
    <Seo title="Home" description="hogehoge" />
    <h1>桃太郎を読んでみた</h1>
    <p>
      最近桃太郎が話題になっていたので、読んでみました。※この記事はネタバレを含みます
    </p>
    <h2>あらすじ</h2>
    <p>桃太郎の全体ストーリーをざっくりと振り返ってみます</p>
    <h3>誕生</h3>
    <p>
      おばあさんは川へ洗濯に行くと、桃に流れてきたため家に持ち帰る。
      切ろうとすると桃の中から男の子が生まれたため、桃太郎と名付ける
    </p>
    <h3>旅立ち</h3>
    <p>
      桃太郎が育つと鬼退治のため、鬼ヶ島へ向かう。出発時、おばあさんから『きびだんご』をもらう
    </p>
    <h3>出会い</h3>
    <p>
      鬼ヶ島への道中、いぬ、さる、きじに出会う。3匹はきびだんごをもらう代わりに家来になる
    </p>
    <h3>決戦</h3>
    <p>鬼ヶ島で鬼退治を完遂する。鬼の財宝を故郷に持ち帰る</p>
    <h2>読んでみた感想</h2>
    <p>いぬ、さる、きじは『きびだんご』ごときで命を賭してよかったのか</p>

    <StaticImage
      className="mb-6"
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
    />
  </Layout>
);

export default IndexPage;
