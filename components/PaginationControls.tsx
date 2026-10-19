import PaginationButton from '@/components/PaginationButton'

export default function PaginationControls({totalPages, currentPage}:{
  totalPages:number,
  currentPage:number
}){
   const startPage = Math.max(1, currentPage - 1)
  const endPage = Math.min(totalPages, currentPage + 1)
  const pages = []

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page)
  }

  return (
    <div className="flex items-center gap-2">
      {startPage > 1 && (
        <PaginationButton
          page={1}
          label="<<"
          isActive={false}
        />
      )}

      {pages.map((page) => (
        <PaginationButton
          key={page}
          page={page}
          isActive={page === currentPage}
        />
      ))}

      {endPage < totalPages && (
        <PaginationButton
          page={totalPages}
          label=">>"
          isActive={false}
        />
      )}
    </div>
  )
}