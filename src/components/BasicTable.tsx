import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import mData from "../MOCK_DATA.json"
import { useMemo } from 'react'
import "./BasicTable.css"

const BasicTable = () => {

//   {
  // "id": 603315,
  // "let": 4,
  // "start": "13:25",
  // "end": "13:25",
  // "pod":11,
  // "teor_w":206,
  // "kovsh":3,
  // "fact_w":206,
  // "teor_w2":206,
  // "kovsh2":3,
  // "t":1453,
  // "length":3.4,
  // "glina":85,
  // "mm":85
// }

const data = useMemo(() => mData, [])

const columns = [
  {
    header: '№ выпуска',
    accessorKey: 'id',
    footer: 'ID',
  },
  {
    header: "Время",
    columns: [
      {
        header: 'Лётка',
        accessorKey: 'let',
        footer: 'Лётка',
      },
      {
        header: 'Начало',
        accessorKey: 'start',
        footer: 'Начало',
      },
      {
        header: 'Конец',
        accessorKey: 'end',
        footer: 'Конец',
      },
      {
        header: 'Подач',
        accessorKey: 'pod',
        footer: 'Подач',
      },
    ]
  },
  {
    header:"Чугун",
    columns: [
      {
        header: 'Теор. вес, т',
        accessorKey: 'teor_w',
        footer: 'Теор. вес, т',
      },
      {
        header: 'Ковшей',
        accessorKey: 'kovsh',
        footer: 'Ковшей',
      },
      {
        header: 'Факт. вес, т',
        accessorKey: 'fact_w',
        footer: 'Факт. вес, т',
      },
    ]
  },
  {
    header:"Шлак",
    columns: [
      {
        header: 'Теор. вес, т',
        accessorKey: 'teor_w2',
        footer: 'Теор. вес, т',
      },
      {
        header: 'Ковши',
        accessorKey: 'kovsh2',
        footer: 'Ковши',
      },
    ]
  },
  {
    header:"Лётка",
    columns:[
    {
      header: 'Ср. t, °C',
      accessorKey: 't',
      footer: 'Ср. t, °C',
    },
    {
      header: 'Длин, м',
      accessorKey: 'length',
      footer: 'Длин, м',
    },
    {
      header: 'Дано глины, л',
      accessorKey: 'glina',
      footer: 'Дано глины, л',
    },
    {
      header: '0, мм',
      accessorKey: 'mm',
      footer: '0, мм',
    },
  ]
  }
  // {
  //   header: 'Лётка',
  //   accessorKey: 'let',
  //   footer: 'Лётка',
  // },
  // {
  //   header: 'Начало',
  //   accessorKey: 'start',
  //   footer: 'Начало',
  // },
  // {
  //   header: 'Конец',
  //   accessorKey: 'end',
  //   footer: 'Конец',
  // },
  // {
  //   header: 'Подач',
  //   accessorKey: 'pod',
  //   footer: 'Подач',
  // },
  // {
  //   header: 'Теор. вес, т',
  //   accessorKey: 'teor_w',
  //   footer: 'Теор. вес, т',
  // },
  // {
  //   header: 'Ковшей',
  //   accessorKey: 'kovsh',
  //   footer: 'Ковшей',
  // },
  // {
  //   header: 'Факт. вес, т',
  //   accessorKey: 'fact_w',
  //   footer: 'Факт. вес, т',
  // },
  // {
  //   header: 'Теор. вес, т',
  //   accessorKey: 'teor_w2',
  //   footer: 'Теор. вес, т',
  // },
  // {
  //   header: 'Ковши',
  //   accessorKey: 'kovsh2',
  //   footer: 'Ковши',
  // },
  // {
  //   header: 'Ср. t, °C',
  //   accessorKey: 't',
  //   footer: 'Ср. t, °C',
  // },
  // {
  //   header: 'Длин, м',
  //   accessorKey: 'length',
  //   footer: 'Длин, м',
  // },
  // {
  //   header: 'Дано глины, л',
  //   accessorKey: 'glina',
  //   footer: 'Дано глины, л',
  // },
  // {
  //   header: '0, мм',
  //   accessorKey: 'mm',
  //   footer: '0, мм',
  // },
]

const table = useReactTable({ 
      data, 
      columns, 
      getCoreRowModel: getCoreRowModel(),
    })
    
  return (
    <div>
      <table>
        <thead>
        {table.getHeaderGroups().map(headerGroup =>(
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => 
            <th key={header.id}>
              {header.isPlaceholder 
              ? null 
              : flexRender(
                header.column.columnDef.header, 
                header.getContext()
              )}
            </th>)}
          </tr>
        ))}

        </thead>
        {/* <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead> */}
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr className='tr' key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td className='td' key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.
                    getContext())}
                </td>
              ))}
            </tr>
          ))}
          {/* <tr>
            <td>
              1
            </td>
          </tr> */}
        </tbody>
        {/* <tfoot>
          <tr>
            <td>
              ID
            </td>
          </tr>
        </tfoot> */}
      </table>   
    </div>
  )
}

export default BasicTable
