'use client'
import { useState } from 'react'
import { CAR_MAKES, SERVICE_TYPES, BOROUGHS, SITE } from '@/lib/constants'
import { type Locale, SERVICE_NAMES_ES, boroughName } from '@/lib/i18n'
import { Loader2 } from 'lucide-react'

const T = {
  en: {
    successH: 'Quote Request Sent!',
    success: 'Thank you for reaching out. One of our technicians is reviewing your request and will provide an exact quote shortly.',
    needNow: 'Need an answer right away?', callNow: 'Call Us Now',
    h2: 'Request a Free Quote', intro: "Fill out the details below and we'll get back to you with an exact price.",
    error: 'There was an error sending your request. Please try again or call us directly.',
    name: 'Full Name *', namePh: 'Your Name', phone: 'Phone Number *', email: 'Email Address', emailPh: 'For written quote (optional)',
    year: 'Year *', make: 'Make *', model: 'Model *', modelPh: 'Model', select: 'Select', otherMake: 'Other Make',
    keyType: 'Key Type Needed *', selectKey: 'Select Key Type', notSure: "I'm Not Sure",
    status: 'Original Key Status *', selectStatus: 'Select Status',
    statusYes: 'Yes, I have a working key', statusBroken: "I have it, but it's broken", statusLost: 'Lost all keys (Need from scratch)',
    borough: 'Borough *', outside: 'Outside NYC', zip: 'ZIP Code (Optional)', zipPh: 'e.g. 10001',
    info: 'Additional Information', infoPh: "Tell us any specifics like 'key fob buttons don't work' or 'blade is bent'...",
    sending: 'Sending Request...', submit: 'Get My Free Quote',
  },
  es: {
    successH: '¡Solicitud de cotización enviada!',
    success: 'Gracias por contactarnos. Uno de nuestros técnicos está revisando su solicitud y le dará una cotización exacta en breve.',
    needNow: '¿Necesita una respuesta ahora mismo?', callNow: 'Llámenos ahora',
    h2: 'Pida una cotización gratis', intro: 'Complete los datos a continuación y le responderemos con un precio exacto.',
    error: 'Hubo un error al enviar su solicitud. Intente de nuevo o llámenos directamente.',
    name: 'Nombre completo *', namePh: 'Su nombre', phone: 'Número de teléfono *', email: 'Correo electrónico', emailPh: 'Para cotización por escrito (opcional)',
    year: 'Año *', make: 'Marca *', model: 'Modelo *', modelPh: 'Modelo', select: 'Seleccionar', otherMake: 'Otra marca',
    keyType: 'Tipo de llave que necesita *', selectKey: 'Seleccione el tipo de llave', notSure: 'No estoy seguro',
    status: 'Estado de la llave original *', selectStatus: 'Seleccione el estado',
    statusYes: 'Sí, tengo una llave que funciona', statusBroken: 'La tengo, pero está rota', statusLost: 'Perdí todas las llaves (hacer desde cero)',
    borough: 'Condado *', outside: 'Fuera de NYC', zip: 'Código postal (opcional)', zipPh: 'ej. 10001',
    info: 'Información adicional', infoPh: 'Cuéntenos detalles como "los botones del control no funcionan" o "la hoja está doblada"...',
    sending: 'Enviando solicitud...', submit: 'Obtener mi cotización gratis',
  },
}

const INPUT = 'w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors'

export default function QuoteForm({ locale = 'en' }: { locale?: Locale }) {
  const t = T[locale]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    year: '',
    make: '',
    model: '',
    keyType: '',
    borough: '',
    zipCode: '',
    hasOriginal: '',
    additionalInfo: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language: locale })
      })
      setSubmitStatus(res.ok ? 'success' : 'error')
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-brand-light border-2 border-brand-accent/30 rounded-xl p-8 text-center shadow-lg">
        <h3 className="text-2xl font-bold text-brand-primary mb-4">{t.successH}</h3>
        <p className="text-gray-700 mb-6 text-lg">{t.success}</p>
        <p className="text-sm text-gray-500 mb-4">{t.needNow}</p>
        <a href={`tel:${SITE.phone}`} className="inline-block bg-brand-primary text-brand-accent font-bold py-3 px-8 rounded-lg shadow-md hover:bg-brand-primary/90 transition-colors">
          {t.callNow}
        </a>
      </div>
    )
  }

  const currentYear = new Date().getFullYear() + 1
  const years = Array.from(new Array(37), (_, index) => currentYear - index)

  return (
    <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 sm:p-10">
      <h2 className="text-2xl font-heading font-bold text-brand-primary mb-2">{t.h2}</h2>
      <p className="text-gray-500 mb-8">{t.intro}</p>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm font-medium" role="alert">{t.error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="q-name" className="block text-sm font-medium text-gray-700 mb-1">{t.name}</label>
            <input id="q-name" type="text" required name="name" value={formData.name} onChange={handleChange} className={INPUT} placeholder={t.namePh} />
          </div>
          <div>
            <label htmlFor="q-phone" className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
            <input id="q-phone" type="tel" required name="phone" value={formData.phone} onChange={handleChange} className={INPUT} placeholder="(718) 555-0123" />
          </div>
        </div>

        <div>
          <label htmlFor="q-email" className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
          <input id="q-email" type="email" name="email" value={formData.email} onChange={handleChange} className={INPUT} placeholder={t.emailPh} />
        </div>

        <div className="border-t border-gray-100 my-6 pt-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="q-year" className="block text-sm font-medium text-gray-700 mb-1">{t.year}</label>
            <select id="q-year" required name="year" value={formData.year} onChange={handleChange} className={INPUT}>
              <option value="">{t.select}</option>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="q-make" className="block text-sm font-medium text-gray-700 mb-1">{t.make}</label>
            <select id="q-make" required name="make" value={formData.make} onChange={handleChange} className={INPUT}>
              <option value="">{t.select}</option>
              {CAR_MAKES.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
              <option value="Other">{t.otherMake}</option>
            </select>
          </div>
          <div>
            <label htmlFor="q-model" className="block text-sm font-medium text-gray-700 mb-1">{t.model}</label>
            <input id="q-model" type="text" required name="model" value={formData.model} onChange={handleChange} className={INPUT} placeholder={t.modelPh} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="q-keytype" className="block text-sm font-medium text-gray-700 mb-1">{t.keyType}</label>
            <select id="q-keytype" required name="keyType" value={formData.keyType} onChange={handleChange} className={INPUT}>
              <option value="">{t.selectKey}</option>
              {SERVICE_TYPES.map(s => (
                <option key={s.slug} value={s.name}>{locale === 'es' ? SERVICE_NAMES_ES[`/${s.slug}`] : s.name}</option>
              ))}
              <option value="Not Sure">{t.notSure}</option>
            </select>
          </div>
          <div>
            <label htmlFor="q-status" className="block text-sm font-medium text-gray-700 mb-1">{t.status}</label>
            <select id="q-status" required name="hasOriginal" value={formData.hasOriginal} onChange={handleChange} className={INPUT}>
              <option value="">{t.selectStatus}</option>
              <option value="Yes, I have it">{t.statusYes}</option>
              <option value="I have it but it's broken">{t.statusBroken}</option>
              <option value="Lost all keys">{t.statusLost}</option>
            </select>
          </div>
        </div>

        <div className="border-t border-gray-100 my-6 pt-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="q-borough" className="block text-sm font-medium text-gray-700 mb-1">{t.borough}</label>
            <select id="q-borough" required name="borough" value={formData.borough} onChange={handleChange} className={INPUT}>
              <option value="">{t.select}</option>
              {BOROUGHS.map(b => <option key={b.slug} value={b.name}>{boroughName(b.slug, locale)}</option>)}
              <option value="Outside NYC">{t.outside}</option>
            </select>
          </div>
          <div>
            <label htmlFor="q-zip" className="block text-sm font-medium text-gray-700 mb-1">{t.zip}</label>
            <input id="q-zip" type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} maxLength={5} className={INPUT} placeholder={t.zipPh} />
          </div>
        </div>

        <div>
          <label htmlFor="q-info" className="block text-sm font-medium text-gray-700 mb-1">{t.info}</label>
          <textarea id="q-info" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={4} className={`${INPUT} resize-none`} placeholder={t.infoPh} />
        </div>

        <button 
          type="submit" disabled={isSubmitting}
          className="w-full flex justify-center items-center gap-2 py-4 font-bold text-lg text-brand-primary bg-brand-accent rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-70 shadow-md"
        >
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />}
          {isSubmitting ? t.sending : t.submit}
        </button>
      </form>
    </div>
  )
}
