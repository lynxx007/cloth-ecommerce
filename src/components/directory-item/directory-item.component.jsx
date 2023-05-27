import { Link } from "react-router-dom"
import "./directory-item.styles.jsx"
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.jsx"

const DirectoryItem = props => {
    const { category } = props
    return (
        <DirectoryItemContainer>
            <BackgroundImage
                imageUrl={category.imageUrl}>
            </BackgroundImage>
            <Body>
                <Link to={`/shop/${category.title}`}>
                    <h2>{category.title}</h2>
                    <p>Shop Now</p>
                </Link>
            </Body>
        </DirectoryItemContainer>
    )
}
export default DirectoryItem