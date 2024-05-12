import React from 'react';
import './PdfSection.css';

import { dummyData } from './DummyData';

const PdfSection = () => {
  return (
    <section className="pdf-section">
      <h2>PDF Books</h2>
      <div className="pdf-list">
        {dummyData.map(book => (
          <div key={book.id} className="pdf-item">
            <img src={book.cover} alt={book.name} />
            <div className="pdf-details">
              <h3>{book.name}</h3>
              <p>{book.post}</p>
              <p>{book.desc}</p>
              <a href={book.pdfUrl} download>Download</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PdfSection;

