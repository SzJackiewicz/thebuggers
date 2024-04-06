'use client'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/hooks/useStore'
import useCookie from '@/hooks/useCookie'

export default function ChatBot({ open, setOpen, candidate }: any) {
  const router = useRouter()
  const {  dispatch } = useStore()
  const { set } = useCookie()
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const handleSwitch = (checked: boolean) => {
    dispatch({ type: 'toggle_login_switch' })
    set('lang', checked ? 'en' : 'pl_PL')
    router.refresh()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleChangeAfterDelay = () => {
    setTimeout(() => {
      setDisplayText('ok');
      handleSwitch(true)
    }, 2000);
  };
  return (
    <div>
      <input
        style={{ maxWidth: '200px', height: '200px', whiteSpace: 'nowrap' }}
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Wprowadź tekst"
        onBlur={handleChangeAfterDelay} // Uruchamia funkcję po opuszczeniu pola input
      />
      <p>{displayText}</p>
    </div>
  )
}
