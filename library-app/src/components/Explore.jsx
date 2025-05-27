import { FaSearch } from "react-icons/fa";

function Explore() {
    return (
        <section className="explore-section">
        <h2 >Explore the World of Stories</h2>
        <p>
            Every book opens a new door. Dive into Inkspire’s vast collection — curated for dreamers, thinkers, and explorers.
        </p>

        <div className="books-input">
            <input
                type="text"
                placeholder="Search by title, author, or genre..."
            />
            <FaSearch className="search-icon" />
        </div>

        <div className="explore-books-buttons">
            <button className="category-btn">Fiction</button>
            <button className="category-btn">Nonfiction</button>
            <button className="category-btn">Fantasy</button>
            <button className="category-btn">Mystery</button>
            <button className="category-btn">Historical</button>
            <button className="category-btn">Biography</button>
            <button className="category-btn">Science</button>
            <button className="category-btn">Children's</button>
            <button className="category-btn">Romance</button>
            <button className="category-btn">Poetry</button>
            <button className="category-btn">Religion</button>
            <button className="category-btn">Art</button>
            <button className="category-btn">Horror</button>
            <button className="category-btn">Young Adult</button>
            <button className="category-btn">Science Fiction</button>
            <button className="category-btn">Business & Economics</button>
            <button className="category-btn">Comics & Graphic Novels</button>
            <button className="category-btn">Computers</button>
            <button className="category-btn">Cooking</button>
            <button className="category-btn">Education</button>
            <button className="category-btn">Health & Fitness</button>
            <button className="category-btn">Medical</button>
            <button className="category-btn">Music</button>
            <button className="category-btn">Self-Help</button>
            <button className="category-btn">Sports</button>
            <button className="category-btn">Technology</button>
            <button className="category-btn">Travel</button>
        </div>


        <h3>Popular Books</h3>
        <p>Discover what readers everywhere are loving right now. From gripping bestsellers to timeless favorites, these books are capturing hearts and minds across the world.</p>
        <div className="popular-books-container">
            {/* Book Cards */}
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
        </div>
        <h3>Handpicked Just for You</h3>
        <p>Explore a world beyond the ordinary — carefully curated stories, timeless classics, and hidden treasures you’re bound to fall in love with.</p>
        <div className="popular-books-container">
            {/* Book Cards */}
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
            <div className="book-card">📚</div>
        </div>

        <div className="quotes">
            <h3>Quotes</h3>
            <div className="quotes-container">
                <div className="quotes-img-container">
                    <p>image</p>
                </div>
                <div className="quotes-content">
                    <p>quotes go here</p>
                </div>
                <div className="quotes-category">
                    <button className="category-btn">Inspiration</button>
                    <button className="category-btn">Love</button>
                    <button className="category-btn">Friendship</button>
                    <button className="category-btn">Life</button>
                    <button className="category-btn">Happiness</button>
                    <button className="category-btn">Success</button>
                    <button className="category-btn">Motivation</button>
                    <button className="category-btn">Wisdom</button>
                    <button className="category-btn">Courage</button>
                    <button className="category-btn">Hope</button>
                    <button className="category-btn">Dreams</button>
                    <button className="category-btn">Leadership</button>
                    <button className="category-btn">Spirituality</button>
                    <button className="category-btn">Humor</button>
                    <button className="category-btn">Knowledge</button>
                </div>
            </div>
         </div>
        
        </section>
    )
}


export default Explore