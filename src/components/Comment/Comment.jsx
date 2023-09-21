import css from './Comment.module.css'
import PropTypes from 'prop-types';

function Comment({ todo }) {
    return (
        <div className={css.comment}>
            <div className={css.card} style={{ background: todo.color }} ></div>
            <span className={css.text}>{todo.text}</span>
        </div>
    )
}


Comment.propTypes = {
    todo:PropTypes.object,
}
export default Comment;