import { useState } from "react";
import Pagination from "./Pagination";

function Table({ data = [], columns = [], rowKey = "id", rowsPerPage = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center font-bold text-gray-700 p-6">
        No Data Found
      </div>
    );
  }

  
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const lastRowIndex = currentPage * rowsPerPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;
  const currentData = data.slice(firstRowIndex, lastRowIndex);

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currentData.map((row) => (
            <tr key={row[rowKey] || row.id}>
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 text-sm text-gray-700">
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Footer */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Table;