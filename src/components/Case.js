import '../styles/Gallery.css'


function Case({content, className }) {
    return (
        <div className={`case ${className}`}>
            <h3>{content.title}</h3>
            {content.pictures && content.pictures[0] &&
            <img src={content.pictures[0]} alt={content.title} />
            }
        </div>    
    )
}

export default Case