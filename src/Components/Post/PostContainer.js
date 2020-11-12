import React, { useState, useEffect } from "react";
import PostPresenter from "./PostPresenter";
import PostBack from "../PostBack.js";

export default ({
    id,
    files,
    createdAt,
    caption,
    hashTags,
    views,
    title
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);
    function handleHover(e){
        e.preventDefault();
        setIsFlipped(prev => !prev);
    }
    useEffect(()=>{
        const slide = () =>{
            const totalFiles = files.length;
            if(currentItem === totalFiles -1){
                setTimeout(() => setCurrentItem(0), 3000);
            } else {
                setTimeout(()=> setCurrentItem(currentItem +1), 3000);
            }
        };
        slide();
    }, [currentItem, files.length]);
    return (
        <div class="page-container">
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={"card-container" + (isFlipped ? " flipped" : "")}>
            <div className="front">
                <PostPresenter
                        files={files}
                        title={title}
                        caption={caption}
                        hashTags={hashTags}
                        createdAt={createdAt}
                        currentItem={currentItem}
                        views={views}
                    />
            </div>
            <div className="back">
                <PostBack
                        id={id}
                        files={files}
                        title={title}
                        caption={caption}
                        hashTags={hashTags}
                        views={views}
                    />
            </div>
        </div>
        </div>
        );
}
