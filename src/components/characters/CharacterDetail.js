import React from 'react';
import '../../stylesheets/characters/CharacterDetail.scss';
import {Link} from 'react-router-dom';
import image from '../../images/pickle.png';

const CharacterDetail = props => {
  if (props.character === undefined) {
    return (
      <div className="detail__error">
        <header className="detail__error--link">
          <Link to="/">
            <span className="detail__error--notfound">Take me back home</span>
          </Link>
        </header>

        <div className="detail__error--img">
          <img
            className="detail__error--img-src"
            src={image}
            alt="Error, not found"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="detail">
        
          <div className="detail__info">

          <div detail__link>
           <Link to="/">
            <p className="detail__link--close">Got it, take me back</p>
          </Link>
        </div>

            <img
              className="detail__info--img"
              src={props.character.image}
              alt={props.character.name}
            />
            <h4 className="detail__info--name">
              {props.character.name}
            </h4>
            <p className="detail__info--parragraph">
              <span className="detail__info--span">Gender:</span>
              <span className="detail__info--span">{props.character.gender}</span>
            </p>
            <p className="detail__info--parragraph">
              <span className="detail__info--span">Species:</span>
              {' '}
              <span className="detail__info--span">{props.character.species}</span>
            </p>
            <p className="detail__info--parragraph">
              <span className="detail__info--span">Status:</span>
              {' '}
              <span className="detail__info--span">{props.character.status}</span>
            </p>
            <p className="detail__info--parragraph">
              <span className="detail__info--span">Origin:</span> {props.character.origin}
            </p>
            <p className="detail__info--parragraph">
              <span className="detail__info--span">Location:</span> {props.character.location}
            </p>
            <p className="detail__info--parragraph">
              <span className="detail__info--span">Episodes:</span> {props.character.episode}
            </p>
          </div>
      </div>
    );
  }
};
export default CharacterDetail;
