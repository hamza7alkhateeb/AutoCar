function Pagination(props) {
    const { itemsPerPage, count, active, visitPage, previous, next } = props
    
    
    const getNumbers = () => {
        let numbers = [];
      let pageNumber = 1;

        for (let i = 0; i < count; i += itemsPerPage) {
          
        const page = pageNumber;
        let style = "pagination__number";
        let content = null;

        if (active === page) {
          style = "pagination__number pagination__number--active";
          content = (
            <div key={i} className={style}>
              {pageNumber}
            </div>
          );
        } else {
          content = (
            <div
              key={i}
              onClick={() => visitPage(page)}
              className={style}
            >
              {pageNumber}
            </div>
          );
        }

        numbers.push(content);
        pageNumber++;
      }

      return numbers;
    };


    return (
      <div className="pagination">
        <div onClick={() => previous()} className="pagination__number">
          Previous
        </div>
        {getNumbers()}
        <div onClick={() => next()} className="pagination__number">
          Next
        </div>
      </div>
    );
}
export default Pagination;