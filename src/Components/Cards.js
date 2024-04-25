
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faMessage, faShareNodes } from '@fortawesome/free-solid-svg-icons'


const Cards = (props)=>{
    return(
        <div className="main">
            <div className="outerBox" >
        <div className="divLeft">
            <div className="leftTop">
            <div className="imageDIv">
                <img className="logoImg" src={props.thumbnail} alt="poster" />
            </div>
            <div className="titleDiv">
                <h3>{props.title}</h3>
                <span style={{color:"rgb(73, 133, 181)"}}> <span>{props.year}</span>,  <span>{props.director}</span></span>
                <div className="genre">
                    <span className="duration">{props.duration}</span>
                    <span className="categs">{props.genre}</span>
                </div>
            </div>
            </div>

            <div className="leftBottom">
                <p>{props.synopsis}</p>
                <div className="icons">
                    <ul>
                        <li><FontAwesomeIcon icon={faShareNodes} /></li>
                        <li><FontAwesomeIcon icon={faHeart} /></li>
                        <li><FontAwesomeIcon icon={faMessage} /></li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="divRight">
            <img className="wall" src={props.wallpaper} alt="shawshank" />
            <div class="overlay"></div>
        </div>

        </div>
        </div>
    );
}

export default Cards;