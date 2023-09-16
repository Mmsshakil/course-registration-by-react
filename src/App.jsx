import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddToBookmark = (card, newCredit, newPrice) => {
    const newBookmarks = [...bookmarks, card];
    setBookmarks(newBookmarks);
    handleCredit(newCredit);
    handlePrice(newPrice);
  }

  const handleCredit = (time) => {
    const newCredit = credit + time;
    setCredit(newCredit);
  }


  const handlePrice = taka => {
    const newPrice = price + taka;
    setPrice(newPrice);
  }

  return (
    <div className='md:max-w-7xl md:mx-auto my-4 md:my-12'>
      <h1 className='text-3xl font-bold text-center mb-4 md:mb-8'>Course Registration</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <Cards className="w-2/3" handleAddToBookmark={handleAddToBookmark} handleCredit={handleCredit} />
        <Bookmarks className="w-1/3" bookmarks={bookmarks} credit={credit} price={price} />
      </div>
    </div>
  )
}

export default App
