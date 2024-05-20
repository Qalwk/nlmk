import React from 'react'
import MainApp from './MainApp'
import './Create.css'
import { Button, DatePicker, Header, Icon, IconAddPlusFilled16, IconAddPlusFilled24, IconArticleFilled24, IconDeleteBinOutlined16, IconDeleteBinOutlined24, Input } from '@nlmk/ds-2.0'
import Table2 from "../Table2"
import BasicTable from '../BasicTable'
import Lightning from '../../assets/Lightning.png'
import Table from '../Table'

const Create = () => {
  return (
    <>
        <div className='wrapper2'>
            <div className='header'>
                {/* <Typography variant="Heading2"> */}
                <Header title="Регистрация выпусков чугуна" date
                notification={() => {}} notificationAmount={0}/>
            </div>
            <div className='wrapper-info'>
                <div className='menu'>
                    <div className='menu-left'>
                        <div className='menu-left-date'>
                            <DatePicker enabledFrom={new Date()}/>
                        </div>
                        <div className='menu-left-input'>
                        <Input label="Печь" />
                        </div>
                        <div className='menu-left-input'>
                        <Input label="Смена" />
                        </div>
                        <div className='menu-left-input'>
                        <Input label="Бригада" />
                        </div>
                    </div>
                    <div className='menu-wrapper'>
                    <div className='menu-center'>
                        <div className='menu-center-left'>
                            <p>Выпуск начат: <br/>13:25</p>
                        </div>
                        <div className='menu-center-left'>
                            <p>Выпуск законч <br/>13:46</p>
                        </div>
                        <div className='menu-center-left-3'>
                            <p>Лётка: <br/>1</p>
                        </div>
                        <div className='menu-center-wrapper'>
                            <Icon
                                name={"IconAttentionWarningAlertFilled32"}
                                color='warning'
                                containerSize={24}
                            />
                            <p className='menu-center-text'>
                                Переданы ЧВК:<br/>
                                <span className='text-primary'>1ЧП</span> - 40,94,106,122,123; 
                                <span className='text-primary'> 2ЧП</span> - 106,47,225,30,230
                            </p>
                        </div>
                    </div>
                    <div className='menu-right'>
                        <Icon
                        className='menu-right-icon'
                        name={"IconInfoOutlined24"}
                        color='disabled'
                        containerSize={24}
                        />
                    <Button size='s' color='#fff'><Icon
                        name={"IconAutoRenewReloadFilled32"}
                        color='primary'
                        containerSize={24}
                        /></Button>
                    <Button size='s'>Сохранить изменения</Button>
                    </div>
                </div>
                   {/* СУКА ПОЧЕМУ ВСЕ В МЕНЮ ПАДАЕТ ЕБАНЫЙ РОТ НАХУЙ  */}
                </div>
                <div className='charts'>
                        <div className='charts-left'>
                            <div className=''>
                                <div className='charts-left-info'>
                                    <p>Выпуски</p>
                                    <div className='charts-left-info-btn'>
                                        <Button variant="secondary" size="s">Перевод выпусков</Button>
                                        <Button variant="primary" fill="clear" startIcon={<IconAddPlusFilled24 />}>Удалить</Button>
                                        <Button variant="primary" fill="clear" startIcon={<IconDeleteBinOutlined24 />}>Добавить</Button>
                                    </div>
                                </div>
                                <div>
                                    {/* <BasicTable/> */}
                                    <Table></Table>
                                </div>
                            </div>
                            <div className="">
                                <p>Статистика / прогнозы</p>
                                <Table2/>
                            </div>
                        </div>
                        <div className='charts-right'>
                            {/* <Table2></Table2> */}
                        </div>
                    </div>
                {/* <div>
                    <BasicTable/>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Create
