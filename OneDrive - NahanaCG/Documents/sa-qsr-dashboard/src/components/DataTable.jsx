export default function DataTable({ columns, rows, keyField = 'id' }) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-sm min-w-[560px]">
        <thead>
          <tr className="border-b border-base-border">
            {columns.map(col => (
              <th
                key={col.key}
                className="text-left text-xs font-medium uppercase tracking-wide text-text-muted px-3 py-2 whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row[keyField] ?? i}
              className="border-b border-base-border/60 hover:bg-base-elevated/50 transition-colors"
            >
              {columns.map(col => (
                <td key={col.key} className="px-3 py-2.5 text-text-secondary whitespace-nowrap">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-3 py-8 text-center text-text-muted text-sm">
                No results match the current filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
