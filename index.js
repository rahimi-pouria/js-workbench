const library = {
    name: 'کتابخانه مرکزی',
    sections: [
        {
            name: 'رمان',
            books: [
                { id: 1, title: 'صد سال تنهایی', price: 45, pages: 400, tags: ['classic', 'novel'] },
                { id: 2, title: 'جنایت و مکافات', price: 38, pages: 550, tags: ['classic', 'psychological'] }
            ]
        },
        {
            name: 'علمی',
            books: [
                { id: 3, title: 'تکامل گونه‌ها', price: 60, pages: 700, tags: ['science', 'biology'] },
                { id: 4, title: 'تاریخ زمان', price: 52, pages: 250, tags: ['science', 'physics'] }
            ]
        },
        {
            name: 'تاریخی',
            books: [
                { id: 5, title: 'ایران بین دو انقلاب', price: 70, pages: 650, tags: ['history', 'politics'] }
            ]
        }
    ],
    loans: [
        { id: 1001, bookId: 1, days: 14, status: 'returned' },
        { id: 1002, bookId: 3, days: 21, status: 'loaned' },
        { id: 1003, bookId: 2, days: 7, status: 'returned' },
        { id: 1004, bookId: 5, days: 30, status: 'loaned' },
        { id: 1005, bookId: 1, days: 10, status: 'loaned' }
    ]
}


const funcLibrery = (data) => {

  const filterBooks = data.loans.filter((item) => item.status === 'returned').map((i) => i.bookId)

  const setNoRepeat = [...new Set(filterBooks)]

  const allBooks = data.sections.flatMap((item) => item.books)

  const findNameBooks = setNoRepeat.map(id => allBooks.find(i => i.id === id).title)

  const sumDaysLoansBook = data.loans.filter((item) => item.status === 'loaned').reduce((sum, day) => sum + day.days, 0)

  const sumBooks = data.sections.reduce((max, book) => max.books.length > book.books.length ? max : book)

  const showName = data.sections.flatMap((item) => item.books).filter(i => i.tags.includes('science')).map(name => name.title)

  return {
      findNameBooks,
      sumDaysLoansBook,
      sumBooks,
      showName
  }
}


const result = funcLibrery(library)
console.log(result)