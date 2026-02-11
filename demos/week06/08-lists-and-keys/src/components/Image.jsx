export default function Image({imgUrl, title, author}) {
    return (
        <div>
            <img src={imgUrl} alt={title} />
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
    )
}