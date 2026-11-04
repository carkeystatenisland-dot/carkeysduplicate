'use client'
import { useState } from 'react'
import { CAR_MAKES, SERVICE_TYPES, BOROUGHS, SITE } from '@/lib/constants'
import { type Locale, SERVICE_NAMES_ES, boroughName } from '@/lib/i18n'
import { Loader2 } from 'lucide-react'

const T = {
  en: {
    successH: 'Booking Requested!', success: 'We have received your request and will contact you shortly to confirm your dispatch.',
    needNow: 'Need immediate assistance?', callNow: (p: string) => `Call ${p} Now`,
    step1: 'Contact Information', name: 'Full Name *', namePh: 'John Doe', phone: 'Phone Number *', email: 'Email Address (Optional)', emailPh: 'john@example.com',
    step2: 'Vehicle Details', year: 'Year *', make: 'Make *', model: 'Model *', modelPh: 'e.g. Camry, Accord, F-150', select: 'Select', otherMake: 'Other Make',
    step3: 'Service Details', error: 'There was an error sending your request. Please try again or call us directly.',
    service: 'Service Needed *', selectService: 'Select Service', notSure: "I'm Not Sure", borough: 'Borough *', outside: 'Outside NYC',
    time: 'Preferred Time', asap: 'ASAP (Emergency)', today: 'Sometime Today', tomorrow: 'Tomorrow', flexible: 'Flexible',
    notes: 'Additional Notes', notesPh: 'Any special instructions or details about the key...',
    back: 'Back', next: 'Next Step', sending: 'Sending...', submit: 'Book Mobile Service',
  },
  es: {
    successH: '¡Reserva solicitada!', success: 'Recibimos su solicitud y lo contactaremos en breve para confirmar el despacho.',
    needNow: '¿Necesita ayuda inmediata?', callNow: (p: string) => `Llame ahora al ${p}`,
    step1: 'Información de contacto', name: 'Nombre completo *', namePh: 'Juan Pérez', phone: 'Número de teléfono *', email: 'Correo electrónico (opcional)', emailPh: 'juan@ejemplo.com',
    step2: 'Datos del vehículo', year: 'Año *', make: 'Marca *', model: 'Modelo *', modelPh: 'ej. Camry, Accord, F-150', select: 'Seleccionar', otherMake: 'Otra marca',
    step3: 'Detalles del servicio', error: 'Hubo un error al enviar su solicitud. Intente de nuevo o llámenos directamente.',
    service: 'Servicio que necesita *', selectService: 'Seleccione el servicio', notSure: 'No estoy seguro', borough: 'Condado *', outside: 'Fuera de NYC',
    time: 'Hora preferida', asap: 'Lo antes posible (emergencia)', today: 'Hoy en algún momento', tomorrow: 'Mañana', flexible: 'Flexible',
    notes: 'Notas adicionales', notesPh: 'Instrucciones especiales o detalles sobre la llave...',
    back: 'Atrás', next: 'Siguiente paso', sending: 'Enviando...', submit: 'Reservar servicio móvil',
  },
}

const INPUT = 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all bg-white'

export default function BookingForm({ locale = 'en' }: { locale?: Locale }) {
  const t = T[locale]
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    year: '',
    make: '',
    model: '',
    service: '',
    borough: '',
    preferredTime: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateStep1 = () => !!(formData.name && formData.phone)
  const validateStep2 = () => !!(formData.year && formData.make && formData.model)
  const validateStep3 = () => !!(formData.service && formData.borough)

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2)
    else if (step === 2 && validateStep2()) setStep(3)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep3()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const res = await fetch('/api/book', {
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
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-4">{t.successH}</h3>
        <p className="text-green-700 mb-6">{t.success}</p>
        <p className="text-sm text-green-600 mb-4">{t.needNow}</p>
        <a href={`tel:${SITE.phone}`} className="inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-brand-primary/90 transition-colors">
          {t.callNow(SITE.phoneDisplay)}
        </a>
      </div>
    )
  }

  const currentYear = new Date().getFullYear() + 1
  const years = Array.from(new Array(37), (_, index) => currentYear - index)

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
      {/* Progress Indicator */}
      <div className="mb-8 relative" aria-hidden="true">
        <div className="flex justify-between relative z-10">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= num ? 'bg-brand-accent text-brand-primary' : 'bg-gray-200 text-gray-500'}`}>
              {num}
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 -z-0"></div>
        <div className="absolute top-1/2 left-0 h-1 bg-brand-accent -translate-y-1/2 -z-0 transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-brand-primary mb-4">{t.step1}</h3>
            <div>
              <label htmlFor="b-name" className="block text-sm font-medium text-gray-700 mb-1">{t.name}</label>
              <input id="b-name" type="text" required name="name" value={formData.name} onChange={handleChange} className={INPUT} placeholder={t.namePh} />
            </div>
            <div>
              <label htmlFor="b-phone" className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
              <input id="b-phone" type="tel" required name="phone" value={formData.phone} onChange={handleChange} className={INPUT} placeholder="(718) 555-0123" />
            </div>
            <div>
              <label htmlFor="b-email" className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
              <input id="b-email" type="email" name="email" value={formData.email} onChange={handleChange} className={INPUT} placeholder={t.emailPh} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-brand-primary mb-4">{t.step2}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="b-year" className="block text-sm font-medium text-gray-700 mb-1">{t.year}</label>
                <select id="b-year" required name="year" value={formData.year} onChange={handleChange} className={INPUT}>
                  <option value="">{t.select}</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="b-make" className="block text-sm font-medium text-gray-700 mb-1">{t.make}</label>
                <select id="b-make" required name="make" value={formData.make} onChange={handleChange} className={INPUT}>
                  <option value="">{t.select}</option>
                  {CAR_MAKES.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                  <option value="Other">{t.otherMake}</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="b-model" className="block text-sm font-medium text-gray-700 mb-1">{t.model}</label>
              <input id="b-model" type="text" required name="model" value={formData.model} onChange={handleChange} className={INPUT} placeholder={t.modelPh} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-brand-primary mb-4">{t.step3}</h3>
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm" role="alert">{t.error}</div>
            )}
            <div>
              <label htmlFor="b-service" className="block text-sm font-medium text-gray-700 mb-1">{t.service}</label>
              <select id="b-service" required name="service" value={formData.service} onChange={handleChange} className={INPUT}>
                <option value="">{t.selectService}</option>
                {SERVICE_TYPES.map(s => (
                  <option key={s.slug} value={s.name}>{locale === 'es' ? SERVICE_NAMES_ES[`/${s.slug}`] : s.name}</option>
                ))}
                <option value="Not Sure">{t.notSure}</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="b-borough" className="block text-sm font-medium text-gray-700 mb-1">{t.borough}</label>
                <select id="b-borough" required name="borough" value={formData.borough} onChange={handleChange} className={INPUT}>
                  <option value="">{t.select}</option>
                  {BOROUGHS.map(b => <option key={b.slug} value={b.name}>{boroughName(b.slug, locale)}</option>)}
                  <option value="Outside NYC">{t.outside}</option>
                </select>
              </div>
              <div>
                <label htmlFor="b-time" className="block text-sm font-medium text-gray-700 mb-1">{t.time}</label>
                <select id="b-time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className={INPUT}>
                  <option value="ASAP">{t.asap}</option>
                  <option value="Today">{t.today}</option>
                  <option value="Tomorrow">{t.tomorrow}</option>
                  <option value="Flexible">{t.flexible}</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="b-notes" className="block text-sm font-medium text-gray-700 mb-1">{t.notes}</label>
              <textarea id="b-notes" name="notes" value={formData.notes} onChange={handleChange} rows={3} className={`${INPUT} resize-none`} placeholder={t.notesPh} />
            </div>
          </div>
        )}

        <div className="pt-4 flex justify-between gap-4">
          {step > 1 ? (
            <button type="button" onClick={handleBack} className="px-6 py-3 font-bold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto">{t.back}</button>
          ) : <div></div>}
          
          {step < 3 ? (
            <button 
              type="button" onClick={handleNext}
              className="px-8 py-3 font-bold text-brand-primary bg-brand-accent rounded-lg hover:bg-yellow-400 transition-colors w-full sm:w-auto disabled:opacity-50"
              disabled={(step === 1 && !validateStep1()) || (step === 2 && !validateStep2())}
            >
              {t.next}
            </button>
          ) : (
            <button 
              type="submit" disabled={isSubmitting || !validateStep3()}
              className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-8 py-3 font-bold text-white bg-brand-primary rounded-lg hover:bg-brand-primary/90 transition-colors disabled:opacity-70 shadow-md"
            >
              {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />}
              {isSubmitting ? t.sending : t.submit}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
