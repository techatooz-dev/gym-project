"use client";
import React, { useState } from 'react'

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    dob: '',
    country: '',
    appointmentType: 'initial',
    message: ''
  })

  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    if (name === 'phone') {
      let digits = value.replace(/\D/g, '')
      // Convert +92 / 92 prefixes to local 03… format
      if (digits.startsWith('92')) {
        digits = '0' + digits.slice(2)
      }
      digits = digits.slice(0, 11)
      setFormData(prev => ({ ...prev, phone: digits }))
      return
    }
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { name, email, phone, message } = formData
    if (!name || !email || !phone || !message) {
      setStatus({ type: 'error', message: 'Please fill in required fields.' })
      return
    }
    if (!/^0\d{10}$/.test(phone)) {
      setStatus({ type: 'error', message: 'Phone number must be exactly 11 digits.' })
      return
    }
    setSubmitting(true)
    setStatus({ type: '', message: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.message || 'Failed to submit')
      setStatus({ type: 'success', message: data?.message || 'Email sent successfully!' })
      setFormData({ name: '', organization: '', email: '', phone: '', dob: '', country: '', appointmentType: 'initial', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Failed to send email.' })
    } finally {
      setSubmitting(false)
    }
  }

  const baseInput = 'w-full bg-[#f3f3f3] focus:bg-white transition-colors placeholder:text-neutral-500 text-sm md:text-[15px] rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#9BCB49]/60 border border-transparent focus:border-[#9BCB49]'
  const labelCls = 'block text-[13px] font-semibold text-neutral-800 mb-2 tracking-wide'

  return (
    <section className="relative w-full bg-white px-4 sm:px-6 lg:px-8   pb-18 overflow-hidden">
      {/* Decorative circle bottom-left (behind form) */}
      
       <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-10">Get In Touch</h2>
      <div
        className="pointer-events-none absolute -left-40 md:-left-52 bottom-[-160px] md:bottom-[-180px] w-[520px] h-[520px] rounded-full bg-[#9BCB49] z-0"
        aria-hidden="true"
      />


      <div className="relative z-10 mx-auto max-w-5xl">
       
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={baseInput}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={baseInput}
                />
              </div>
              <div>
                <label className={labelCls}>Date Of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  // Native date inputs ignore placeholder in many browsers
                  className={baseInput}
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className={baseInput}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization Name"
                  className={baseInput}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className={baseInput}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={11}
                />
              </div>
              <div>
                <label className={labelCls}>Appointment Type</label>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer bg-[#f3f3f3] rounded-md px-4 py-3 text-sm md:text-[15px]">
                    <span className="relative inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-[#9BCB49]">
                      <span className={`w-2 h-2 rounded-full ${formData.appointmentType === 'initial' ? 'bg-[#9BCB49]' : 'bg-transparent'}`} />
                    </span>
                    <input
                      type="radio"
                      name="appointmentType"
                      value="initial"
                      checked={formData.appointmentType === 'initial'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span>Initial consultation visit</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer bg-[#f3f3f3] rounded-md px-4 py-3 text-sm md:text-[15px]">
                    <span className="relative inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-[#9BCB49]">
                      <span className={`w-2 h-2 rounded-full ${formData.appointmentType === 'followup' ? 'bg-[#9BCB49]' : 'bg-transparent'}`} />
                    </span>
                    <input
                      type="radio"
                      name="appointmentType"
                      value="followup"
                      checked={formData.appointmentType === 'followup'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span>Follow-up visit</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={8}
              className={`${baseInput} resize-none`}
            />
          </div>

          {status.message ? (
            <p className={`text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{status.message}</p>
          ) : null}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={submitting}
              className={`bg-[#6EA820] hover:bg-[#5e9319] text-[13px] tracking-wide font-semibold text-neutral-900/90 px-8 py-2.5 rounded-sm transition-colors ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {submitting ? 'SENDING…' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default GetInTouch
