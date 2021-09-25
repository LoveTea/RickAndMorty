import React from 'react'
import ReactDOM from 'react-dom'
import style from './modal.module.scss'

interface Props {
    children: React.ReactNode
    show: boolean
    setShow: (value: boolean) => void
}

const Modal = ({ children, setShow, show }: Props) => {
    if (!show) return null

    return ReactDOM.createPortal(
        <>
            <div className={style.modal__overlay} onClick={() => setShow(false)}>
                <div className={style.modal__inner} onClick={(e) => e.stopPropagation()}>
                    <span className={style.modal__closeButton} onClick={() => setShow(false)}>
                        X
                    </span>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Modal
