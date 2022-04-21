import PropTypes from 'proptypes';
function Comment({ author, message, likes }) {
    return (
        <div>
            <div className='author'>{author}</div>
            <div className='message'>{message}</div>
            <div className='likes'>
                {likes > 0 ? likes : 'No'} likes
            </div>
        </div>
    );
}
Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number
}