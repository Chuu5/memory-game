import "./card.css"

function Card({image, onClick}) {
    return (
        <div className="card">
            <button className="card-btn"
            onClick={onClick}>
                <img src={image} />
            </button>
        </div>
    )
}

export default Card