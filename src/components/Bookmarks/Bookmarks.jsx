import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, credit, price }) => {


    return (
        <div >
            <div className='bg-white rounded-xl w-72 p-4 mx-auto'>
                <h2 className='text-lg font-bold text-[#2F80ED] leading-7 my-6 '>Credit Hour Remaining {20} hr </h2>
                <div className='border-y-2 py-4'>
                    <h2 className='text-xl font-bold mb-5'>Course Name</h2>
                    
                    <ol className=' list-decimal list-inside'>
                        {
                            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} />)
                        }
                    </ol>

                </div>
                <h2 className='font-medium py-4 border-b-2 text-[#1c1b1bcc]'>Total Credit Hour: {credit}</h2>
                <h4 className='font-medium py-4  text-[#1c1b1bcc]'>Total Price : {price} USD</h4>
            </div>
        </div>
    );
};

Bookmarks.proTypes = {
    bookmarks: PropTypes.array,
    credit: PropTypes.number,
    price: PropTypes.number,
}

export default Bookmarks;