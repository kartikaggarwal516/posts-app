import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../redux/actions';
import './home.css';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getPost(page));
    }, [page]);

    const loadMore = () => {
        setPage(page + 1);
    };

    return (
        <div className='home-container'>
            <div className='home-body'>
                <ul>
                    {posts && posts.length > 0 && posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
                <button onClick={loadMore}>
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Home;
