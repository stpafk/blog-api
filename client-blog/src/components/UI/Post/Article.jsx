
export default function Article({post}) {

    return(
    <article>
        <h1>{post.header.title}</h1>
        <p>{post.header.time_stamp}</p>
        <section><p>{post.content}</p></section>
    </article>)
}