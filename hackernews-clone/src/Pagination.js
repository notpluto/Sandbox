import React from "react";

import Loading from "./Loading";

class Pagination extends React.Component {
  state = {
    itemsPerPage: 30,
    showPagination: false
  };

  handlePagination = e => {
    this.props.updatePage(e.target.id);
  };

  render() {
    const { itemsPerPage, loading } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(500 / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        {pageNumbers.map((number, i) => {
          return (
            <button
              style={{
                marginRight: "1.4rem",
                marginTop: "2rem",
                display: "inline-block"
              }}
              id={i + 1}
              key={i}
              onClick={this.handlePagination}
            >
              {number}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Pagination;
