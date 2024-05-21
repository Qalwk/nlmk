import { FormEvent, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import './Table3.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Checkbox } from '@nlmk/ds-2.0'

// export type User = {
//   id: number;
//   name: number;
//   age: number;
//   podach: number;
// }

const columnHelper = createColumnHelper()

const columns0 = [
    columnHelper.accessor("id", {
    header: () => "",
    cell: <Checkbox/>,
  }),
]

const columns1 = [
    columnHelper.accessor("id", {
    header: () => "№ ковша",
    cell: (info) => info.getValue(),
  }),
]

const columns2 = [
  columnHelper.accessor("letka", {
    header: () => "Тара",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("start", {
    header: () => "Произ.",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("end", {
    header: () => "Перед.",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("podach", {
    header: () => "Назн.",
    cell: (info) => info.getValue(),
  }),
]

const columns3   = [
  columnHelper.accessor("teor_w", {
    header: () => "Долив",
    cell: <Checkbox/>,
  }),
  columnHelper.accessor("kovshei", {
    header: () => "Si",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("fact_w", {
    header: () => "Mn",
    cell: (info) => info.getValue(),
  }),
]

const column4 = [
  columnHelper.accessor("teor_w2", {
    header: () => "S",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("kovshi", {
    header: () => "P",
    cell: (info) => info.getValue(),
  }),
]

const column5 = [
  columnHelper.accessor("t", {
    header: () => "Ti",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("m", {
    header: () => "V",
    cell: (info) => info.getValue(),
  })
]

const allColumns = [ ...columns0, ...columns1, ...columns2, ...columns3, ...column4, ...column5];

const Table3 = () => {
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
    {id: 116, letka: 43.43, start: 116, end: 120, podach: "PM", teor_w: 0, kovshei:1.43, fact_w: 0.28, teor_w2: 0.018, kovshi: 0.06, t: 0.026, 
      m: 0.016, l: 85, o: 85,
    },
    {id: 116, letka: 43.43, start: 116, end: 120, podach: "PM", teor_w: 0, kovshei:1.43, fact_w: 0.28, teor_w2: 0.018, kovshi: 0.06, t: 0.026, 
    m: 0.016, l: 85, o: 85,
    },
    {id: 116, letka: 43.43, start: 116, end: 120, podach: "PM", teor_w: 0, kovshei:1.43, fact_w: 0.28, teor_w2: 0.018, kovshi: 0.06, t: 0.026, 
    m: 0.016, l: 85, o: 85,
    },
    {id: 116, letka: 43.43, start: 116, end: 120, podach: "PM", teor_w: 0, kovshei:1.43, fact_w: 0.28, teor_w2: 0.018, kovshi: 0.06, t: 0.026, 
    m: 0.016, l: 85, o: 85,
    },
    {id: 116, letka: 43.43, start: 116, end: 120, podach: "PM", teor_w: 0, kovshei:1.43, fact_w: 0.28, teor_w2: 0.018, kovshi: 0.06, t: 0.026, 
    m: 0.016, l: 85, o: 85,
    },
    {id: 116, letka: 43.43, start: 116, end: 120, podach: "PM", teor_w: 0, kovshei:1.43, fact_w: 0.28, teor_w2: 0.018, kovshi: 0.06, t: 0.026, 
    m: 0.016, l: 85, o: 85,
    },
    {kovshei:1.43, fact_w: 0.28, teor_w2: 0.018, kovshi: 0.06, t: 0.026, 
    m: 0.016, l: 85, o: 85,
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

 const head0 = [
    columnHelper.accessor("o", {
        header: () => "",
        cell: (info) => info.getValue(),
      }),
 ]

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

  const allHead = [ ...head0, ...head1, ...head2, ...head3, ...head4, ...head5]

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
      <table className='users-table3'>
        <thead>
          {/* {table2.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='users-table-header3'>
                  <div className="header3">
                    {flexRender(
                      header.column.columnDef.header, 
                      header.getContext()
                      )}
                  </div>
                </th>
              ))}
            </tr>
          ))} */}
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='users-table-header23'>
                  <div className="notheader3">
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
                <td key={cell.id} className='users-table-cell23'>
                  <div className='korobka3'>
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

export default Table3
