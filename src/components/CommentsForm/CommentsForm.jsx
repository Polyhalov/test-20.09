import css from './CommentsForm.module.css'
import Comment from 'components/Comment/Comment';
import PropTypes from 'prop-types';

function CommentsForm({activeTodo, addComment}) {
  const  handleSubmitForm = (e) => {
        e.preventDefault();
        addComment(e.target[0].value, e.target[1].value);
        e.target.reset();
    }
    return (
        <div>
            <h1 className={css.title}>Comments:#{activeTodo && activeTodo.id}</h1>
            {activeTodo && activeTodo.comments.map(item => <Comment key={item.id} todo={item} />)}
            <form className={css.form} onSubmit={handleSubmitForm}>
                <input type="color"  className={css.formControl} />
                    <textarea   className={css.formText} placeholder="Type comment here..." required />
                    <button  className={css.btn} type="submit">Add New</button>
                </form>
        </div>
    )
}


CommentsForm.propTypes = {
    activeTodo: PropTypes.object,
    addComment: PropTypes.func
}


export default CommentsForm;