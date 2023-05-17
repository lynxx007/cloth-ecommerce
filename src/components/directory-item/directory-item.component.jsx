import { Link } from "react-router-dom"
import "./directory-item.styles.scss"

const DirectoryItem = props => {
    const { category } = props
    return (
        <div className="directory-item-container">
            <div className="background-image" style={{
                backgroundImage: `url(${category.imageUrl})`
            }}></div>
            <div className="body"><Link to={`/shop/${category.title}`}>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </Link>
            </div>
        </div>
    )
}
export default DirectoryItem