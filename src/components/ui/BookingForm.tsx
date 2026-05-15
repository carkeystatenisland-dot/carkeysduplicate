'use client'
import { useState } from 'react'
import { CAR_MAKES, SERVICE_TYPES, BOROUGHS, SITE } from '@/lib/constants'
import { Loader2 } from 'lucide-react'

export default function BookingForm() {
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
        body: JSON.stringify(formData)
      })
      
      if (res.ok) {
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-4">Booking Requested!</h3>
        <p className="text-green-700 mb-6">
          We have received your request and will contact you shortly to confirm your dispatch.
        </p>
        <p className="text-sm text-green-600 mb-4">Need immediate assistance?</p>
        <a 
          href={`tel:${SITE.phone}`} 
          className="inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-brand-primary/90 transition-colors"
        >
          Call {SITE.phoneDisplay} Now
        </a>
      </div>
    )
  }

  // Generate years 1990-2025
  const years = Array.from(new Array(36), (val, index) => 2025 - index)

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
      {/* Progress Indicator */}
      <div className="mb-8 relative">
        <div className="flex justify-between relative z-10">
          {[1, 2, 3].map((num) => (
            <div 
              key={num} 
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                step >= num ? 'bg-brand-accent text-brand-primary' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 -z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-brand-accent -translate-y-1/2 -z-0 transition-all duration-300"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        ></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Contact Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input 
                type="text" required name="name" value={formData.name} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input 
                type="tel" required name="phone" value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                placeholder="(718) 555-0123"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Optional)</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Vehicle Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
                <select 
                  required name="year" value={formData.year} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Make *</label>
                <select 
                  required name="make" value={formData.make} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select</option>
                  {CAR_MAKES.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                  <option value="Other">Other Make</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Model *</label>
              <input 
                type="text" required name="model" value={formData.model} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                placeholder="e.g. Camry, Accord, F-150"
              />
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Service Details</h3>
            
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm">
                There was an error sending your request. Please try again or call us directly.
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
              <select 
                required name="service" value={formData.service} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-white"
              >
                <option value="">Select Service</option>
                {SERVICE_TYPES.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
                <option value="Not Sure">I'm Not Sure</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Borough *</label>
                <select 
                  required name="borough" value={formData.borough} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select</option>
                  {BOROUGHS.map(b => <option key={b.slug} value={b.name}>{b.name}</option>)}
                  <option value="Outside NYC">Outside NYC</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <select 
                  name="preferredTime" value={formData.preferredTime} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-white"
                >
                  <option value="ASAP">ASAP (Emergency)</option>
                  <option value="Today">Sometime Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
              <textarea 
                name="notes" value={formData.notes} onChange={handleChange} rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none resize-none"
                placeholder="Any special instructions or details about the key..."
              />
            </div>
          </div>
        )}

        {/* Form Controls */}
        <div className="pt-4 flex justify-between gap-4">
          {step > 1 ? (
            <button 
              type="button" onClick={handleBack}
              className="px-6 py-3 font-bold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              Back
            </button>
          ) : <div></div>}
          
          {step < 3 ? (
            <button 
              type="button" onClick={handleNext}
              className="px-8 py-3 font-bold text-brand-primary bg-brand-accent rounded-lg hover:bg-yellow-400 transition-colors w-full sm:w-auto disabled:opacity-50"
              disabled={(step === 1 && !validateStep1()) || (step === 2 && !validateStep2())}
            >
              Next Step
            </button>
          ) : (
            <button 
              type="submit" disabled={isSubmitting || !validateStep3()}
              className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-8 py-3 font-bold text-white bg-brand-primary rounded-lg hover:bg-brand-primary/90 transition-colors disabled:opacity-70 shadow-md"
            >
              {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
              {isSubmitting ? 'Sending...' : 'Book Mobile Service'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
