import { FormEvent, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import './Table2.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

// export type User = {
//   id: number;
//   name: number;
//   age: number;
//   podach: number;
// }

const columnHelper = createColumnHelper()

const columns1 = [
    columnHelper.accessor("id", {
    header: () => "",
    cell: (info) => info.getValue(),
  }),
]

const columns2 = [
  columnHelper.accessor("fact_w", {
    header: () => "Факт. вес",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("kovshei", {
    header: () => "Ковшей",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("av_w", {
    header: () => "Ср. вес",
    cell: (info) => info.getValue(),
  }),
]

const columns3   = [
  columnHelper.accessor("kovshei2", {
    header: () => "Ковшей",
    cell: (info) => info.getValue(),
  }),
]


const allColumns = [...columns1, ...columns2, ...columns3 ];

const Table2 = () => {

  const users = [
    {id: 'Левая сторона', fact_w: 114, kovshei: 9, av_w: 99, kovshei2: 1 },
    {id: 'Правая сторона', fact_w: 114, kovshei: 9, av_w: 99, kovshei2: 1 },
    {id: 'За смену', fact_w: 114, kovshei: 9, av_w: 99, kovshei2: 1 },
    {id: 'С начала суток', fact_w: 114, kovshei: 9, av_w: 99, kovshei2: 1 },
    {id: 'С начала месяца', av_w: 99, },
    {id: 'Прогноз на конец суток', fact_w: 6602 },
  ]

  const table = useReactTable({
  data: users,
  columns: allColumns,
  debugTable: true,
  getCoreRowModel: getCoreRowModel()
  });

  const head1 = [
    columnHelper.accessor("o", {
      header: () => "",
      cell: (info) => info.getValue(),
    }),
  ]

  const head2 = [
    columnHelper.accessor("d", {
      header: () => "Чугун",
      cell: (info) => info.getValue(),
    }),
  ]

  const head3 = [
    columnHelper.accessor("v", {
      header: () => "Шлак",
      cell: (info) => info.getValue(),
    }),
  ]


  const allHead = [...head1, ...head2, ...head3 ]

  const table2 = useReactTable({
    data: users,
    columns: allHead,
    debugTable: true,
    getCoreRowModel: getCoreRowModel()
    });

  return (
    <div>
      <table className='users-table2'>
        <thead>
          {table2.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='users-table-header1'>
                  <div className="header2">
                    {flexRender(
                      header.column.columnDef.header, 
                      header.getContext()
                      )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='users-table-header22'>
                  <div className="notheader2">
                    {flexRender(
                      header.column.columnDef.header, 
                      header.getContext()
                      )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='users-table-cell22'>
                  <div className='korobka2'>
                  {flexRender(cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table2
