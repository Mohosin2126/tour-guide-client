const Gallery = ({ item }) => {
    console.log(item);
    return (
      <div>
        <div style={{
          WebkitColumnCount: 3,
          MozColumnCount: 3,
          WebkitColumnWidth: '33%',
          MozColumnWidth: '33%',
          ColumnWidth: '33%',
          padding: '0 12px'
        }}>
          <img src={item.url} className="w-100%" alt="" />
        </div>
      </div>
    );
  };
  
  export default Gallery;
  