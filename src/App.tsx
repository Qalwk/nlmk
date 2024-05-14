import { Header, Sidebar, DatePicker, Badge, Select } from '@nlmk/ds-2.0';
import styles from "./App.module.css"
import Card from './components/Cards/Card';
import Cardinfo from './components/CardInfo/Cardinfo';
import LineChartComponent from './components/LineChartComponent';
import LineChartComponent2 from './components/LineChartComponent2';
import BiAxualComponent from './components/BiAxualComponent';

const App = () => {
  return (
    <>
      <div className='wrapper'>
        <div>
            <Sidebar  orientation="vertical" key="vertical" allowFavorites>
              <Sidebar.MenuItem
              path="cars"
              label="Задание на добавление"
              position="top"
              icon="IconKovsh32"
              // onClick={() => setCurrentPath('cars')}
            />
            <Sidebar.MenuItem
              path="bands"
              label="bands"
              position="top"
              icon="IconBunkerOutlined32"
              // onClick={() => setCurrentPath('bands')}
            >
            </Sidebar.MenuItem>
            <Sidebar.MenuItem
              path="menu item"
              label="menu item"
              position="top"
              icon="IconLightningStroke32"
              // onClick={() => setCurrentPath('menu item')}
            />
            </Sidebar>
        </div>
        <div className='right'>
            {/* <Typography variant="Heading2"> */}
              <Header className={styles.header} title="Аналитика фурмы №18/ДП 5" date back={() => {}} 
              notification={() => {}} notificationAmount={0}/>
            {/* </Typography> */}
            <div className='right-wrapper'>
            <div className='right-left'>
              <div className='right-left-top'>
                <DatePicker type="period" enabledFrom={new Date()}/>
              </div>
              <div className='Picture'></div>
              <div className='right-left-bottom'>
                <div className='one'>
                  <p className='one-title'>Срок работы фурмы (длит)</p>
                  <Badge color="grey">100 дней</Badge>
                </div>
                <div className='one'>
                  <p className='one-title'>Время нормальной работы фурмы</p>
                  <Badge color="grey">X%</Badge>
                </div>
                <div className='one'>
                  <p className='one-title'>Процент доступности камер</p>
                  <Badge color="grey">X%</Badge>
                </div>
              </div>
            </div>
            <div className='right-right'>
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
                    <Cardinfo color="#61CB6D" name="Положение копья" percent="30" />
                    <Cardinfo color="#FFBB1E" name="Геометрия копья" percent="30" />
                    <Cardinfo color="#AA98EF" name="Состояние фурмы" percent="30" />
                    <Cardinfo color="#B78D81" name="Струя ПУТ" percent="30" />
                    <Cardinfo color="#EB90CB" name="Появление гарнисажа" percent="30" />
                    <Cardinfo color="#70BBFF" name="Открытие фурмы" percent="30" hideCircle={false}/>
                  </div>
                  <div className='right-right-charts'>
                  <LineChartComponent />
                  </div>
                </div>
              </div>

              <div className='right-right-one'>
                <div className='right-right-title'>
                  <p className='one-title'>Состояние фурминного прибора</p>
                </div>
                <div className='right-right-info'>
                  <div className='right-right-about'>
                    <Cardinfo color="#61CB6D" name="Срок фурменного прибора(дней)" percent="321" hideCircle={true}/>
                    <Cardinfo color="#FFBB1E" name="Температура камеры" percent="36°C" hideCircle={true}/>
                    <Cardinfo color="#70BBFF" name="Настройка камеры" percent="" hideCircle={true}/>
                  </div>
                  <div className='right-right-charts'>
                  <LineChartComponent2 />
                  </div>
                </div>
              </div>

              <div className='right-right-one'>
                <div className='right-right-title'>
                  <p className='one-title'>Подача ПУТ</p>
                </div>
                <div className='right-right-info'>
                  <div className='right-right-about'>
                    <Cardinfo color="#2E9AEE" name="Установка dP дутья" percent="" hideCircle={false}/>
                    <Cardinfo color="#AA98EF" name="Наличие друтья (dP)" percent="" hideCircle={false}/>
                    <Cardinfo color="#61CB6D" name="Наличие вдувания ПУТ" percent="" hideCircle={false}/>
                  </div>
                  <div className='right-right-charts'>
                  <BiAxualComponent />
                  </div>
                </div>
              </div>

              <div className='right-right-one'>
                <div className='right-right-title'>
                  <p className='one-title'>Перепад температуры охлаждающей воды</p>
                </div>
                <div className='right-right-info'>
                  <div className='right-right-charts4'>
                  <LineChartComponent2 />
                  </div>
                </div>
              </div>
            {/* <Card/>
            <Card/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
