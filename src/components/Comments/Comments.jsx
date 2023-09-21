import css from './Comments.module.css'
function Comments() {
    return (
        <div>
            <h1 className={css.title}>Comments</h1>
            <form className={css.form}>
                <input type="color" className={css.formControl} />
                    <textarea  className={css.formText} placeholder="Type comment here..." required />
                    <button className={css.btn} type="submit">Add New</button>
                </form>
        </div>
    )
}
export default Comments;