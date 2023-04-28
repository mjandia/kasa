import '../styles/Gallery.css'


function Case({content}) {
    return (
        <div className="case">
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <p>Host: {content.host.name}</p>
            <img src={content.pictures[0]} alt={content.title} />
        </div>    
    )
}

export default Case