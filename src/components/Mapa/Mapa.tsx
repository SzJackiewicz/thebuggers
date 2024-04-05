'use client'

import { mapPoints } from '@/constants/map-points'
import { classNames } from '@/utils/styleUtils'
import React, { useEffect, useState } from 'react'
import { SearchBar } from '..'

const Mapa = () => {
  const [svgContent, setSvgContent] = useState('')
  const [searchPhrase, setSearchPhrase] = useState('')
  const [selected, setSelected] = useState<number | undefined>(undefined)

  useEffect(() => {
    const fetchSvgContent = async () => {
      try {
        const response = await fetch('/mapka.svg')
        const svgString = await response.text()
        setSvgContent(svgString)
      } catch (error) {
        console.error('Error fetching SVG content:', error)
      }
    }

    fetchSvgContent()
  }, [])

  useEffect(() => {
    const circle = document.getElementById(`punkt-${selected}`)
    const text = document.getElementById(`punkt-${selected}-text`)
    if (circle) {
      circle.style.fill = '#22c55e'
      circle.scrollIntoView({ behavior: 'smooth' })
    }
    if (text) {
      text.style.fill = '#fff'
    }
  }, [selected])

  return (
    <section>
      <div className='max-w-96 mb-5 mx-auto'>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
      </div>
      <div className='flex gap-2 justify-center flex-wrap mb-5'>
        {mapPoints
          .filter((point) => point.name.toLowerCase().includes(searchPhrase.toLowerCase()))
          .map((point) => (
            <button
              key={point.id}
              onClick={() => setSelected(point.id)}
              type='button'
              className={classNames(
                'rounded-full px-2.5 py-1 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300',
                selected === point.id ? 'bg-green-500 text-white' : 'text-gray-900'
              )}
            >
              {point.name}
            </button>
          ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    </section>
  )
}

export default Mapa
