import React,{useState,useRef} from "react";
const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve,ms))
const UPLOAD_DELAY = 5000
export const ImageUploader = () => {
    //inputにアクセスする
    const inputImageRef = useRef<HTMLInputElement|null>(null)
    //選択ファイルを保持する
    const fileRef = useRef<File|null>(null)
    const [message,setMessage] = useState<string|null>(null)

    //テキストクリック時の動き
    const onClickText = () => {
        if(inputImageRef.current !== null){
            inputImageRef.current.click()
        }
    }

    //ファイルが選択された後呼ばれるコールバック
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(files !== null && files.length > 0) {
            fileRef.current = files[0]
        }
    }

    //アップロードボタンがクリックされた時に呼ばれるコールバック
    const onClickUpload = async() => {
        if(fileRef.current !== null){
            await sleep(UPLOAD_DELAY)
            setMessage(`${fileRef.current.name} has been successfully uploaded`)
        }
    }

    return (
        <div>
            <p style={{textDecoration:'underline'}} onClick={onClickText}>
                画像をアップロード
            </p>
            <input
                ref = {inputImageRef}
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                style={{visibility:'hidden'}}
            />
            <br />
            <button onClick={onClickUpload}>アップロードする</button>
            {message !== null && <p>{message}</p>}
        </div>
    )
}