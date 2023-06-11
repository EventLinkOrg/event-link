
const NotFound = () => {
  return (
    <div className="404-component" style={{ textAlign: 'center', marginTop: '200px'}}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold'}}>No cards found</h1>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Please try a different search term.
      </p>
    </div>
  );
};

export { NotFound };
