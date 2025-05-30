import {useState, useEffect} from 'react'

export default function Main() {
   

    const [meme, setMeme]= useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes]= useState([])

    function getRandomMemeImg(){
        const randomIdx= Math.floor(Math.random()* allMemes.length)
        const newMemeUrl= allMemes[randomIdx].url
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                imageUrl: newMemeUrl
            }
        })
    }

    useEffect(()=>{
        async function getMemes(){
            const res= await fetch("https://api.imgflip.com/get_memes")
            const memes= await res.json()
            console.log(memes.data.memes)
            setAllMemes(memes.data.memes)
        }
        getMemes()
    },[])

    console.log("i run first")

    function handleChange(e){
        const {value, name} = e.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange= {handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange= {handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button
                    onClick={getRandomMemeImg}
                >Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}