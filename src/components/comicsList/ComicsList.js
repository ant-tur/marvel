import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './comicsList.scss';

const ComicsList = () => {
	const [comicsList, setComicsList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(20);
	const [comicsEnded, setComicsEnded] = useState(false);

	const { loading, error, getAllComics, clearError } = useMarvelService();

	useEffect(() => {
		clearError();
		onRequest(offset, true);
	}, []);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllComics(offset).then(onComicsListLoaded);
	};

	const onComicsListLoaded = (newComicsList) => {
		let ended = false;
		if (newComicsList.length < 8) {
			ended = true;
		}

		setComicsList([...comicsList, ...newComicsList]);
		setNewItemLoading(false);
		setOffset(offset + 8);
		setComicsEnded(ended);
	};

	const renderComics = (arr) => {
		const items = arr.map((item, i) => (
			<li className='comics__item' key={i}>
				<Link to={`/comics/${item.id}`}>
					<img
						src={item.thumbnail}
						alt={item.title}
						className='comics__item-img'
					/>
					<div className='comics__item-name'>{item.title}</div>
					<div className='comics__item-price'>{item.price}</div>
				</Link>
			</li>
		));

		return <ul className='comics__grid'>{items}</ul>;
	};

	const comics = renderComics(comicsList);

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;

	return (
		<div className='comics__list'>
			{comics}
			{errorMessage}
			{spinner}

			<button
				className='button button__main button__long'
				disabled={newItemLoading}
				style={{ display: comicsEnded ? 'none' : 'block' }}
				onClick={() => onRequest(offset)}
			>
				<div className='inner'>load more</div>
			</button>
		</div>
	);
};

export default ComicsList;
