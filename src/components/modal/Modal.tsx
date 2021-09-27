import React from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

interface Props {
    children: React.ReactNode
    show: boolean
    setShow: (value: boolean) => void
}

const Modal = ({ children, setShow, show }: Props) => {
    return ReactDOM.createPortal(
        <div className="modal__overlay" onClick={() => setShow(false)}>
            <div className="modal__inner" onClick={(e) => e.stopPropagation()}>
                <span className="modal__closeButton" onClick={() => setShow(false)}>
                    X
                </span>
                {children}
            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Modal
