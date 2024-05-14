import "./Card.css"
import LineChartComponent from '../LineChartComponent';
import { Header, Typography, Sidebar, Period, DatePicker, Badge, Select } from '@nlmk/ds-2.0';
import Cardinfo from "../CardInfo/Cardinfo";

const Card = () => {
  return (
    <>
                <div className='right-right-one'>
                  <div className='right-right-title'>
                    <p className='one-title'>Время нормальной работы фурмы</p>
                    <Badge color="grey">X%</Badge>
                  </div>
                  <div className='right-right-select'>
                    <Select/ >
                  </div>
                  <div className='right-right-info'>
                    <div className='right-right-about'>
                        <Cardinfo color="#61CB6D" name="Положение копья" percent="30"/>
                        <Cardinfo color="#FFBB1E" name="Геометрия копья" percent="30"/>
                        <Cardinfo color="#AA98EF" name="Состояние фурмы" percent="30"/>
                        <Cardinfo color="#B78D81" name="Струя ПУТ" percent="30"/>
                        <Cardinfo color="#EB90CB" name="Появление гарнисажа" percent="30"/>
                        <Cardinfo color="#70BBFF" name="Открытие фурмы" percent="30" hideCircle={true}/>
                    </div>
                    <div className='right-right-charts'>
                      <LineChartComponent />
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Card
