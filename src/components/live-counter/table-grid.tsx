import { TableCard } from "./table-card"
import { TableData } from "./types"

interface TableGridProps {
  tables: TableData[]
  isGridView: boolean
}

export function TableGrid({ tables, isGridView }: TableGridProps) {
  return (
    <div
      className={`${
        isGridView
          ? "grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          : "flex flex-wrap gap-2"
      }`}
    >
      {tables.map((table) => (
        <TableCard key={table.id} table={table} isGridView={isGridView} />
      ))}
    </div>
  )
}
