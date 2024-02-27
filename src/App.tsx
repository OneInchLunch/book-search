import './App.css'
import './interfaces.ts'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Books } from './interfaces.ts';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Books | null>(null);
  const [userInput, setUserInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const fetchData = async (input: string) =>{
    setLoading(true);
    input = input.replace(/ /g, "+").toLowerCase();    
    try {
      const {data: response} = await axios.get<Books>(`https://openlibrary.org/search.json?q=${input}`);
      setData(response);
    } catch (error: unknown) {
      error instanceof Error &&
        console.error(error.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isVisible]);

  useEffect(() => { 
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      userInput &&
        fetchData(userInput)
    }, delay) 

    return () => {
      clearTimeout(timeoutId);
    };
  }, [userInput]);

  const handleCellClick = (data: any, item: string) => {
    navigator.clipboard.writeText((data.toString()))

    setMessage(`Copied ${item}!`);
    setIsVisible(true);
  }

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="mb-4 text-center">
          <input type='text' 
            id="input"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-96"
            placeholder='Your Book Here'
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
        </div>
      </div>
      <div className="p-8 overflow-x-auto">        
        <div className="mb-4 text-center">
          <p className="block font-medium text-gray-600">Click on a cell to copy it's full data!</p>   
        </div>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Author</th>
              <th className="py-2 px-4">First Publishing Year</th>
              <th className="py-2 px-4">ISBN(s)</th>
              <th className="py-2 px-4">Pages</th>
            </tr>
          </thead>
            <tbody className="text-gray-700">
              {loading && !userInput ? 
              <tr><td colSpan={5} className="border-b p-2 text-center">
                Start Typing!
              </td></tr> :
              loading ?
              <tr><td colSpan={5} className="border-b p-2 text-center">
                <div className="loading-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </td></tr> :
              data?.docs.map((doc) => (
                <tr className="hover:bg-gray-100" key={doc.key}>
                  <td onClick={() => handleCellClick(doc.title, 'title')} className="w-1/5 py-2 px-4">{doc.title}</td>
                  <td onClick={() => handleCellClick(doc.author_name, 'author name(s)')} className="w-1/5 py-2 px-4">{doc.author_name?.map((author, authorIndex) => (
                    <p key={authorIndex}>{author}</p>
                  ))}</td>
                  <td onClick={() => handleCellClick(doc.first_publish_year, 'first publishing year')} className="w-1/5 py-2 px-4">{doc.first_publish_year}</td>
                  <td onClick={() => handleCellClick(doc.isbn, 'ISBN(s)')} className="w-1/5 py-2 px-4">
                  {doc.isbn?.slice(0,3).map((isbn, isbnIndex) => (
                    <p key={isbnIndex}>{isbn}</p>
                  ))}
                  {doc.isbn?.length > 3 && <p>...</p>}
                  </td>
                  <td className="w-1/5 py-2 px-4" onClick={() => handleCellClick(doc.number_of_pages_median, 'median number of pages')}>{doc.number_of_pages_median}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-green-500 text-white text-center ${isVisible ? 'opacity-100 duration-500' : 'opacity-0 transition-opacity duration-500'}`}>
        {message}
      </div>
    </>
  )
}

export default App
