import { NextPage } from "next";
import Image from "next/image";
import BibleImage from '../public/image/bible.png'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示</p>
            <img src="image/bible.png" />
            <p>Imageコンポーネントを使用して表示</p>
            <Image src={BibleImage} />
            <p>Imageで表示した場合は事前に描画エリアが確保される</p>
        </div>
    )
}
export default ImageSample