import React from 'react'
import { useState } from 'react';
import { IoMdStar } from "react-icons/io";

const Comment = ({ text, setText, setComment, comment}) => {
    const [rating, setRating] = useState(0)
    
    const handleComment = (e) =>{
        if(text.length < 2){
            return
        }
        const newComments = [...comment, {rating: rating, text: text}]
        localStorage.setItem("comment", JSON.stringify(newComments))
        e.preventDefault()
        setComment(newComments)
        setText("")
    }
  return (
    <div className="phone">
        <div className="wrapper">
            <h1>Give feedback</h1>
            <p>How did we do?</p>
            <div className="rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label className="star" htmlFor="star5" title="Awesome" aria-hidden="true">
                    <IoMdStar size={30} onClick={()=>setRating(5)}/>
                </label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label className="star" htmlFor="star4" title="Great" aria-hidden="true"> 
                    <IoMdStar size={30} onClick={()=>setRating(4)}/>
                </label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label className="star" htmlFor="star3" title="Very good" aria-hidden="true"> 
                    <IoMdStar size={30} onClick={()=>setRating(3)}/>
                </label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label className="star" htmlFor="star2" title="Good" aria-hidden="true"> 
                    <IoMdStar size={30} onClick={()=>setRating(2)}/>
                </label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label className="star" htmlFor="star1" title="Bad" aria-hidden="true">
                    <IoMdStar size={30} onClick={()=>setRating(1)}/>
                </label>
            </div>
            <p>Care to share more about it?</p>
        </div>

        <textarea required value={text} rows="10" cols="35" name="comment" htmlFor="usrhtmlFor"  onChange={(e) => setText(e.target.value)}></textarea>

        <button onClick={handleComment}>PUBLISH FEEDBACK</button>
    </div>
  )
}

export default Comment