import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './modal.scss'

interface Props {
    children: React.ReactNode
    show: boolean
    setShow: (value: boolean) => void
}

const Modal = ({ children, setShow, show }: Props) => {
    const ref = useRef(null)

    return ReactDOM.createPortal(
        <CSSTransition classNames="modal" in={show} timeout={300} unmountOnExit nodeRef={ref}>
            <div className="modal__overlay" onClick={() => setShow(false)} ref={ref}>
                <div className="modal__inner" onClick={(e) => e.stopPropagation()}>
                    <span className="modal__closeButton" onClick={() => setShow(false)}>
                        X
                    </span>
                    {children}
                </div>
            </div>
        </CSSTransition>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Modal
