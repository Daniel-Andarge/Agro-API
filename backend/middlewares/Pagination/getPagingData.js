
  
function getPagingData(data, page, limit)  {
    const { count: totalItems, rows: tutorials } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, tutorials, totalPages, currentPage };
  };

  module.exports ={

    getPagingData
  }