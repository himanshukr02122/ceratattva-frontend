import { createPortal } from 'react-dom'
import React, { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const effect = {
  hidden: {
    y: '-100px',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
  exit: {
    y: '100px',
    opacity: 0,
  },
}

const Backdrop = ({ children, handleClose }: BackdropProps) => (
  <motion.div
    className="
      z-50 fixed inset-0
      flex items-center justify-center
      bg-backdrop backdrop-filter backdrop-blur-sm
    "
    onClick={handleClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
)

const ModalContent = ({ className, children, handleClose, ariaLabel }: ModalContentProps) => (
  <motion.div
    tabIndex={-1}
    role="dialog"
    aria-modal={true}
    aria-label={ariaLabel}
    className={`relative h-80 sm:h-4/5 lg:h-5/6 xl:h-[40rem] xl:w-[48rem] w-full md:w-4/5 rounded-xl ${className || 'sm:m-5 bg-white shadow-lg'}`}
    variants={effect}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={(event) => event.stopPropagation()}
  >
    {children}
    {handleClose && (
      <button
        className="absolute top-0 right-0 p-3 rounded-full bg-white shadow-xl border hover:scale-125 duration-300"
        onClick={handleClose}
        aria-label={`Close ${ariaLabel || 'dialog'}`}
      >
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="#000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
        </svg>
      </button>
    )}
  </motion.div>
)

export const VideoModal = ({
  children,
  className,
  isOpen,
  handleClose,
  hideCloseButton,
  backdropDismiss = true,
  onExitComplete,
  ariaLabel,
}: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const [trigger, setTrigger] = onExitComplete ?? [undefined, undefined]

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isOpen || event.key !== 'Escape') return
    handleClose()
  }

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight="15px";
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight="0";
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) return <></>

  return createPortal(
    <AnimatePresence
      initial={false}
      onExitComplete={() => setTrigger && trigger === 'fired' && setTrigger('completed')}
    >
      {isOpen && (
        <Backdrop handleClose={backdropDismiss ? handleClose : undefined}>
            <ModalContent
              className={className}
              handleClose={hideCloseButton ? undefined : handleClose}
              ariaLabel={ariaLabel}
            >
              {children}
            </ModalContent>
        </Backdrop>
      )}
    </AnimatePresence>,
    document.getElementById('modal-root')!
  )
}

type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean
  handleClose: () => void
  hideCloseButton?: boolean
  backdropDismiss?: boolean
  onExitComplete?: ['fired' | 'completed' | undefined, Dispatch<SetStateAction<'fired' | 'completed' | undefined>>]
  ariaLabel?: string
}

type ModalContentProps = HTMLAttributes<HTMLDivElement> & {
  handleClose?: () => void
  ariaLabel?: string
}

type BackdropProps = HTMLAttributes<HTMLDivElement> & {
  handleClose?: () => void
}
