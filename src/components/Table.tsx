import { FormEvent, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import './Table.css'

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
    header: () => "№ выпуска",
    cell: (info) => info.getValue(),
  }),
]

const columns2 = [
  columnHelper.accessor("letka", {
    header: () => "Лётка",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("start", {
    header: () => "Начало",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("end", {
    header: () => "Конец",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("podach", {
    header: () => "Подач",
    cell: (info) => info.getValue(),
  }),
]

const columns3   = [
  columnHelper.accessor("teor_w", {
    header: () => "Теор. вес, т",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("kovshei", {
    header: () => "Ковшей",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("fact_w", {
    header: () => "Факт. вес, т",
    cell: (info) => info.getValue(),
  }),
]

const column4 = [
  columnHelper.accessor("teor_w2", {
    header: () => "Теор. вес, т",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("kovshi", {
    header: () => "Ковши",
    cell: (info) => info.getValue(),
  }),
]

const column5 = [
  columnHelper.accessor("t", {
    header: () => "Ср. t, °С",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("m", {
    header: () => "Длин, m",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("l", {
    header: () => "Дано глины, л",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("o", {
    header: () => "0, мм",
    cell: (info) => info.getValue(),
  }),
]

const allColumns = [...columns1, ...columns2, ...columns3, ...column4, ...column5];

const Table = () => {
  const [searchValue, setSearchValue] = useState("")

  const Id_vipusk = [
    {id: 603315},
    {id: 603315},
    {id: 603315},
    {id: 603315},
    {id: 603315},
    {id: 603315},
  ]

  // const users = [
  //   {letka: 4, start: 13.25, end: 13.25, podach:11},
  //   {letka: 4, start: 13.25, end: 13.25, podach:11},
  //   {letka: 4, start: 13.25, end: 13.25, podach:11},
  //   {letka: 4, start: 13.25, end: 13.25, podach:11},
  //   {letka: 4, start: 13.25, end: 13.25, podach:11},
  //   {letka: 4, start: 13.25, end: 13.25, podach:11},
  // ]

  const users = [
    {id: 603315, letka: 4, start: 13.25, end: 13.25, podach:11, teor_w: 206, kovshei:3, fact_w: 206, teor_w2: 206, kovshi: 3, t: 1453, 
      m: 3.4, l: 85, o: 85,
    },
    {id: 603315, letka: 4, start: 13.25, end: 13.25, podach:11, teor_w: 206, kovshei:3, fact_w: 206, teor_w2: 206, kovshi: 3, t: 1453, 
      m: 3.4, l: 85, o: 85,
    },
    {id: 603315, letka: 4, start: 13.25, end: 13.25, podach:11, teor_w: 206, kovshei:3, fact_w: 206, teor_w2: 206, kovshi: 3, t: 1453, 
      m: 3.4, l: 85, o: 85,
    },
    {id: 603315, letka: 4, start: 13.25, end: 13.25, podach:11, teor_w: 206, kovshei:3, fact_w: 206, teor_w2: 206, kovshi: 3, t: 1453, 
      m: 3.4, l: 85, o: 85,
    },
    {id: 603315, letka: 4, start: 13.25, end: 13.25, podach:11, teor_w: 206, kovshei:3, fact_w: 206, teor_w2: 206, kovshi: 3, t: 1453, 
      m: 3.4, l: 85, o: 85,
    },
    {id: 603315, letka: 4, start: 13.25, end: 13.25, podach:11, teor_w: 206, kovshei:3, fact_w: 206, teor_w2: 206, kovshi: 3, t: 1453, 
      m: 3.4, l: 85, o: 85,
    },
  ]

  // const allInfo = [...Id_vipusk, ...users];

  // const [inputSearchValue, setInputSearchValue] = useState("")
  // const submitSearchForm = (e: FormEvent) => {
  //   e.preventDefault();
  //   setSearchValue(inputSearchValue);
  // }

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
      header: () => "Время",
      cell: (info) => info.getValue(),
    }),
  ]

  const head3 = [
    columnHelper.accessor("v", {
      header: () => "Чугун",
      cell: (info) => info.getValue(),
    }),
  ]

  const head4 = [
    columnHelper.accessor("v", {
      header: () => "Шлак",
      cell: (info) => info.getValue(),
    }),
  ]

  const head5 = [
    columnHelper.accessor("v", {
      header: () => "Лётка",
      cell: (info) => info.getValue(),
    }),
  ]

  const allHead = [...head1, ...head2, ...head3, ...head4, ...head5]

  const table2 = useReactTable({
    data: users,
    columns: allHead,
    debugTable: true,
    getCoreRowModel: getCoreRowModel()
    });

  return (
  //  <div className="search-bar">
  //   <form onSubmit={submitSearchForm}>
  //     <input 
  //     type="text" 
  //     placeholder='Search...'
  //     value={inputSearchValue}
  //     onChange={(e) => setInputSearchValue(e.target.value)}
  //     />
  //   </form>
    <div>
      <table className='users-table'>
        <thead>
          {table2.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='users-table-header'>
                  <div className="header">
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
                <th key={header.id} className='users-table-header2'>
                  <div className="notheader">
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
                <td key={cell.id} className='users-table-cell2'>
                  <div className='korobka'>
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

export default Table
