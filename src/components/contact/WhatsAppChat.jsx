import React, { useState } from 'react'
import './whatsapp-chat.css'

const WHATSAPP_URL = 'https://wa.me/2349046964772'

const suggestions = [
  "I'd like to discuss a project",
  'I need a website',
  'I have a question',
]

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const openWhatsApp = (text) => {
    const chatUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
    window.open(chatUrl, '_blank', 'noopener,noreferrer')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedMessage = message.trim()

    if (trimmedMessage) {
      openWhatsApp(trimmedMessage)
    }
  }

  return (
    <div className="whatsapp-chat">
      {isOpen && (
        <section
          className="whatsapp-chat__panel"
          aria-label="Chat with Emeka on WhatsApp"
        >
          <div className="whatsapp-chat__header">
            <div className="whatsapp-chat__avatar" aria-hidden="true">
              EK
            </div>
            <div className="whatsapp-chat__identity">
              <h2>Emeka Kalu</h2>
              <span><i></i> Usually replies on WhatsApp</span>
            </div>
            <button
              className="whatsapp-chat__close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <i className="uil uil-times"></i>
            </button>
          </div>

          <div className="whatsapp-chat__body">
            <span className="whatsapp-chat__time">START A CONVERSATION</span>
            <p className="whatsapp-chat__bubble">
              Hi there! 👋 I&apos;m Emeka. What can I help you with today?
            </p>
            <div className="whatsapp-chat__suggestions">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form className="whatsapp-chat__form" onSubmit={handleSubmit}>
              <label className="whatsapp-chat__sr-only" htmlFor="whatsapp-message">
                Write a message
              </label>
              <textarea
                id="whatsapp-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message..."
                rows="2"
              />
              <button className="whatsapp-chat__send" type="submit">
                Continue in WhatsApp
                <i className="bx bxl-whatsapp" aria-hidden="true"></i>
              </button>
            </form>
            <span className="whatsapp-chat__secure">
              Opens a private WhatsApp conversation
            </span>
          </div>
        </section>
      )}

      <button
        className={`whatsapp-chat__launcher${isOpen ? ' is-open' : ''}`}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Chat with me on WhatsApp'}
        aria-expanded={isOpen}
      >
        <i className={`bx ${isOpen ? 'bx-x' : 'bxl-whatsapp'}`} aria-hidden="true"></i>
        {!isOpen && <span>Let&apos;s chat</span>}
      </button>
    </div>
  )
}

export default WhatsAppChat
