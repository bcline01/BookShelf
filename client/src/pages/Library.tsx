import { useState, useEffect } from "react";
import { Book } from "../utils/bookInterface.ts";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import './css/Library.css';
import { TiStarFullOutline } from "react-icons/ti";
import Header from '../components/Header.tsx';



const Library = () => {
  const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
      const savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
      setBooks(savedBooks);
    }, []);


  const removeBook = (index: number) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
  };

  const addFavorite = (book: Book) => {
    const savedFavorite = JSON.parse(localStorage.getItem("savedFavorite") || "[]");
    const updatedBooks = [...savedFavorite, book];
    localStorage.setItem("savedFavorite", JSON.stringify(updatedBooks));
  };

  const rows: JSX.Element[] = [];
  books.forEach((book, index) => {
    rows.push(
       <tr key={`${book.bookId}-${index} `}>
        <td className="center">{index + 1}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td className="center">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button 
            onClick={() => addFavorite(book)} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '8px', color: '#e2d1ba' }}
            aria-label="Save to Favorites"
            className="icon-button"
          >
            <TiStarFullOutline size={24} className="star-icon" /> 
          </button>
          <Button variant="danger" onClick={() => removeBook(index)}>
            Remove
          </Button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
    <Header />
    <div id="library" className="d-flex flex-column align-items-center">
      <h1 className="mb-5">Library</h1>
      <main>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th className="center">#</th>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </main>
    </div>
    </>
  );
};

export default Library;
