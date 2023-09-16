import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    console.log(bookmark);

    const { course_name } = bookmark;

    return (
        <div>
            
                <li>{course_name}</li>
           
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;