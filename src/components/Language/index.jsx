import React from 'react'
import {Dropdown, Space} from 'antd'
import {useDispatch} from "react-redux"
import {useTranslation} from "react-i18next"
import langIco from "../../assets/ico/lang.png"
import langIcoColor from "../../assets/ico/langColor.png"

const Languages = () => {

    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    const {language} = i18n

    const languages = [
        {
            value: "ru",
            name: 'Рус',
        },
        {
            value: "uz",
            name: 'Узб',
        }
    ]

    const menu = (
        <div className='w-20 h-20 right-0 bg-primary_light text-primary_black mt-3 overflow-hidden'>
            {
                languages?.filter(item => item.value !== i18n.language).map((item, index) => (
                    <button key={index} onClick={() => i18n.changeLanguage(item.value)} className="px-4 py-2 flex justify-center hover:text-primary_yellow
                     gap-2 duration-300 cursor-pointer">
                        <img src={langIcoColor} alt="lang_item" className={"w-6"}/>
                        <span className={"mx-2"}>{item.name}</span>
                    </button>
                ))
            }
        </div>
    )

    const lang = languages?.find(item => item.value === language)

    return (
        <Dropdown overlay={menu} placement="bottom" trigger={['click']}>
            <Space className="cursor-pointer flex items-center">
                <img src={langIco} alt="lang_item" className={"w-6"}/>
                <p>Рус</p>
            </Space>
        </Dropdown>
    )
}

export default React.memo(Languages)