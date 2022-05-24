import React from 'react';
import './featuredMovie.css';

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return (
        <div className="movieRow">
            <section className="featured" style={{
                backgroundSize: 'over',
                backgroundposition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                <div className="fatured--vertical">
                    <div className="fatured--horizontal">
                        <div className="fatured--name">{item.original_name}</div>
                        <div className="fatured--info">
                            <div className="fatured--points">{item.vote_avarege} pontos</div>
                            <div className="fatured--year">{firstDate.getFullYear()}</div>
                            <div className="fatured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>
                        <div className="fatured--description">{item.overview}</div>
                        <div className="fatured--buttons">
                            <a href="">► Assistir</a>
                            <a href="">+ Minha Lista</a>
                        </div>
                        <div className="fatured--genres"><strong>Gêneros: </strong>{genres.join(',')}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}