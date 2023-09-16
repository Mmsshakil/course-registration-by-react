import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {

    const { course_name } = bookmark;

    return (
        <div>
            <ol className="text-[#1c1b1b99] leading-7 ">
                <li>{course_name}</li>
            </ol>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;