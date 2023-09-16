import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';

const Card = ({ card, handleAddToBookmark }) => {
    const { course_name, credit, price, course_details, image } = card;
    return (
        <div className=' bg-white w-80 rounded-xl p-4'>
            <div className='flex justify-center'>
                <img src={image} alt="" />
            </div>
            <h3 className='text-lg font-semibold mt-4 mb-3'>{course_name}</h3>
            <p className='text-sm text-[#1c1b1b99] mb-4'>{course_details} </p>
            <div className='text-base font-medium text-[#1c1b1b99] mb-6 flex justify-between'>
                <span><BiDollar className='text-xl items-baseline inline-flex' /> price: {price}</span>
                <span> <BsBook className='text-xl items-baseline inline-flex' /> credit: {credit}hr</span>
            </div>
            <button className='w-full bg-[#2F80ED] py-2 text-white rounded-lg' onClick={() => handleAddToBookmark(card, credit, price)}>Select</button>

        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleCredit: PropTypes.func
}

export default Card;

