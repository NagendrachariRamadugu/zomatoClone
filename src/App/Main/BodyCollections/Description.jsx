import './Description.css';
import { FaCaretRight } from "react-icons/fa6";

const Description = () => {
    return (
        <div className="description">
             Explore curated lists of top restaurants,
            cafes, pubs, and bars in Chennai,
            based on trends
            <div class = "collections-info">
                <span>
                    collections in Chennai
                </span>
                <FaCaretRight />
            </div>
        </div>
    )
}

export default  Description;