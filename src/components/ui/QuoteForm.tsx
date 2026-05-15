'use client'
import { useState } from 'react'
import { CAR_MAKES, SERVICE_TYPES, BOROUGHS, SITE } from '@/lib/constants'
import { Loader2 } from 'lucide-react'

export default function QuoteForm() {
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
      <div className="bg-brand-light border-2 border-brand-accent/30 rounded-xl p-8 text-center shadow-lg">
        <h3 className="text-2xl font-bold text-brand-primary mb-4">Quote Request Sent!</h3>
        <p className="text-gray-700 mb-6 text-lg">
          Thank you for reaching out. One of our technicians is reviewing your request and will provide an exact quote shortly.
        </p>
        <p className="text-sm text-gray-500 mb-4">Need an answer right away?</p>
        <a 
          href={`tel:${SITE.phone}`} 
          className="inline-block bg-brand-primary text-brand-accent font-bold py-3 px-8 rounded-lg shadow-md hover:bg-brand-primary/90 transition-colors"
        >
          Call Us Now
        </a>
      </div>
    )
  }

  const years = Array.from(new Array(36), (val, index) => 2025 - index)

  return (
    <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 sm:p-10">
      <h2 className="text-2xl font-heading font-bold text-brand-primary mb-2">Request a Free Quote</h2>
      <p className="text-gray-500 mb-8">Fill out the details below and we'll get back to you with an exact price.</p>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm font-medium">
          There was an error sending your request. Please try again or call us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input 
              type="text" required name="name" value={formData.name} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input 
              type="tel" required name="phone" value={formData.phone} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
              placeholder="(718) 555-0123"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" name="email" value={formData.email} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
            placeholder="For written quote (optional)"
          />
        </div>

        <div className="border-t border-gray-100 my-6 pt-6"></div>

        {/* Vehicle Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
            <select 
              required name="year" value={formData.year} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
            >
              <option value="">Select</option>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Make *</label>
            <select 
              required name="make" value={formData.make} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
            >
              <option value="">Select</option>
              {CAR_MAKES.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
              <option value="Other">Other Make</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Model *</label>
            <input 
              type="text" required name="model" value={formData.model} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
              placeholder="Model"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Key Type Needed *</label>
            <select 
              required name="keyType" value={formData.keyType} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
            >
              <option value="">Select Key Type</option>
              {SERVICE_TYPES.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
              <option value="Not Sure">I'm Not Sure</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Original Key Status *</label>
            <select 
              required name="hasOriginal" value={formData.hasOriginal} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
            >
              <option value="">Select Status</option>
              <option value="Yes, I have it">Yes, I have a working key</option>
              <option value="I have it but it's broken">I have it, but it's broken</option>
              <option value="Lost all keys">Lost all keys (Need from scratch)</option>
            </select>
          </div>
        </div>

        <div className="border-t border-gray-100 my-6 pt-6"></div>

        {/* Location & Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Borough *</label>
            <select 
              required name="borough" value={formData.borough} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
            >
              <option value="">Select</option>
              {BOROUGHS.map(b => <option key={b.slug} value={b.name}>{b.name}</option>)}
              <option value="Outside NYC">Outside NYC</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code (Optional)</label>
            <input 
              type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} maxLength={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
              placeholder="e.g. 10001"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
          <textarea 
            name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors resize-none"
            placeholder="Tell us any specifics like 'key fob buttons don't work' or 'blade is bent'..."
          />
        </div>

        <button 
          type="submit" disabled={isSubmitting}
          className="w-full flex justify-center items-center gap-2 py-4 font-bold text-lg text-brand-primary bg-brand-accent rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-70 shadow-md"
        >
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
          {isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}
        </button>

      </form>
    </div>
  )
}
