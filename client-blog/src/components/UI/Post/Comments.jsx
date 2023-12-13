

export default function Comments({messages}) {
    return(
        <>
        <section>
            <ul>
            {messages.map((message) => {
                return <li key={message._id}>
                    <p>{message.username.username}</p>
                    <p>{message.time_stamp}</p>
                    <p>{message.content}</p>
                </li>
            })}
            </ul>
            </section>
        </>
    )
} 