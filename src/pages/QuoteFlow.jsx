import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Heart, DollarSign, Home, TrendingUp, Shield, HelpCircle,
  Building, Landmark, ChevronRight, Check, MapPin, Calendar,
  Briefcase, PiggyBank, Clock, Loader2, X, Gift
} from 'lucide-react';

// ─── Step Definitions ────────────────────────────────────────────────────────

const STEPS = [
  {
    id: 'goals',
    question: "What's your #1 financial goal right now?",
    subtitle: "Pick all that apply — this helps us build the right vault for you.",
    multi: true,
    options: [
      { icon: Shield, label: "Build tax-free wealth" },
      { icon: Home, label: "Invest in real estate" },
      { icon: Heart, label: "Protect my family's future" },
      { icon: Landmark, label: "Leave a lasting legacy" },
      { icon: TrendingUp, label: "Create passive income" },
      { icon: PiggyBank, label: "Replace my bank account" },
    ],
  },
  {
    id: 'monthly',
    question: "How much can you set aside each month?",
    subtitle: "This determines the size and power of your Vault. There's no wrong answer.",
    multi: false,
    options: [
      { icon: DollarSign, label: "$500 – $1,000 / month" },
      { icon: DollarSign, label: "$1,000 – $2,500 / month" },
      { icon: DollarSign, label: "$2,500 – $5,000 / month" },
      { icon: DollarSign, label: "$5,000+ / month" },
    ],
  },
  {
    id: 'personal',
    type: 'personal',
    question: "Let's personalize your strategy.",
    subtitle: "A few quick details so we can match you with the right broker and products for your state.",
  },
  {
    id: 'strategy',
    question: "Where are you today with your money?",
    subtitle: "Be honest — our brokers have seen it all and are here to help, not judge.",
    multi: true,
    options: [
      { icon: DollarSign, label: "Money sitting in a savings account earning nothing" },
      { icon: Home, label: "I own real estate and want to scale" },
      { icon: Building, label: "Ready to invest but not sure how to start" },
      { icon: TrendingUp, label: "Already investing and want better leverage" },
    ],
  },
  {
    id: 'timeline',
    question: "When do you want to start seeing results?",
    subtitle: "Knowing your timeline lets us structure your Vault for maximum early impact.",
    multi: false,
    options: [
      { icon: TrendingUp, label: "As soon as possible" },
      { icon: Clock, label: "Within 1–2 years" },
      { icon: Shield, label: "3–5 year horizon" },
      { icon: HelpCircle, label: "I'm still planning" },
    ],
  },
  {
    id: 'contact',
    type: 'contact',
    question: "Last step before booking — how do we reach you?",
    subtitle: "We'll send your personalized blueprint here and call you at your scheduled time. We never spam.",
  },
  {
    id: 'booking',
    type: 'booking',
    question: "Claim your free strategy session.",
    subtitle: "Pick a time — your senior broker will walk you through your custom blueprint.",
  },
];

const TOTAL_STEPS = STEPS.length;
const PROGRESS_PERCENTS = [10, 24, 38, 52, 66, 82, 100];

// ─── Sub-components ──────────────────────────────────────────────────────────

function OptionCard({ icon: Icon, label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center gap-3 p-5 rounded-md border text-center transition-all duration-200 cursor-pointer
        ${selected
          ? 'border-emerald-500 bg-emerald-500/10 text-white'
          : 'border-white/10 bg-white/5 text-stone-300 hover:border-emerald-500/50 hover:bg-white/10'
        }`}
    >
      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
          <Check className="w-3 h-3 text-white" />
        </div>
      )}
      <Icon className={`w-7 h-7 ${selected ? 'text-emerald-400' : 'text-stone-400'}`} />
      <span className="text-sm font-medium leading-snug">{label}</span>
    </button>
  );
}

const inputCls = "w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm";
const labelCls = "block text-stone-400 text-xs font-semibold uppercase tracking-wider mb-1.5";

const STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
];

function PersonalStep({ data, onChange }) {
  const set = (k, v) => onChange({ ...data, [k]: v });
  const [rawDob, setRawDob] = React.useState(data.rawDob || '');

  const handleDobChange = (e) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 8);
    if (val.length >= 5) val = val.slice(0, 2) + '/' + val.slice(2, 4) + '/' + val.slice(4);
    else if (val.length >= 3) val = val.slice(0, 2) + '/' + val.slice(2);
    setRawDob(val);
    if (val.length === 10) {
      const [mm, dd, yyyy] = val.split('/');
      set('dob', `${yyyy}-${mm}-${dd}`);
    } else {
      set('dob', '');
    }
    set('rawDob', val);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>First Name <span className="text-red-400">*</span></label>
          <input
            className={`${inputCls} ${data.firstName && data.firstName.trim().length < 2 ? 'border-red-500/60' : ''}`}
            placeholder="John"
            value={data.firstName || ''}
            onChange={e => set('firstName', e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>Last Name <span className="text-red-400">*</span></label>
          <input
            className={`${inputCls} ${data.lastName && data.lastName.trim().length < 2 ? 'border-red-500/60' : ''}`}
            placeholder="Doe"
            value={data.lastName || ''}
            onChange={e => set('lastName', e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>State of Residence</label>
          <select
            className={`${inputCls} cursor-pointer bg-stone-900`}
            value={data.state || ''}
            onChange={e => set('state', e.target.value)}
          >
            <option value="">Select state...</option>
            {STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Date of Birth</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              className={`${inputCls} pl-10`}
              placeholder="MM/DD/YYYY"
              value={rawDob}
              onChange={handleDobChange}
              inputMode="numeric"
              maxLength={10}
            />
          </div>
        </div>
      </div>
      <div>
        <label className={labelCls}>Occupation</label>
        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
          <input
            className={`${inputCls} pl-10`}
            placeholder="e.g. Business Owner, Engineer, Doctor"
            value={data.occupation || ''}
            onChange={e => set('occupation', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

function ContactStep({ data, onChange }) {
  const set = (k, v) => onChange({ ...data, [k]: v });

  const formatPhone = (raw) => {
    const digits = raw.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email || '');
  const phoneDigits = (data.phone || '').replace(/\D/g, '');

  return (
    <div className="space-y-4">
      <div>
        <label className={labelCls}>Email Address <span className="text-red-400">*</span></label>
        <input
          type="email"
          className={`${inputCls} ${data.email && !emailValid ? 'border-red-500/60' : ''}`}
          placeholder="jane@example.com"
          value={data.email || ''}
          onChange={e => set('email', e.target.value)}
        />
        {data.email && !emailValid && <p className="text-red-400 text-xs mt-1">Please enter a valid email address.</p>}
      </div>
      <div>
        <label className={labelCls}>Phone Number <span className="text-red-400">*</span></label>
        <input
          type="tel"
          className={`${inputCls} ${data.phone && phoneDigits.length < 10 ? 'border-red-500/60' : ''}`}
          placeholder="(786) 000-0000"
          value={data.phone || ''}
          onChange={e => set('phone', formatPhone(e.target.value))}
          inputMode="numeric"
        />
        {data.phone && phoneDigits.length < 10 && <p className="text-red-400 text-xs mt-1">Please enter a 10-digit phone number.</p>}
      </div>

      <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
        <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-emerald-400 text-xs font-semibold mb-0.5">Your Information is Secure</p>
          <p className="text-stone-400 text-xs leading-relaxed">Bank-level encryption. Your data is never sold. HIPAA compliant.</p>
        </div>
      </div>
    </div>
  );
}

const TIMEZONES = [
  { label: 'Eastern Time (ET)', tz: 'America/New_York' },
  { label: 'Central Time (CT)', tz: 'America/Chicago' },
  { label: 'Mountain Time (MT)', tz: 'America/Denver' },
  { label: 'Mountain Time – Arizona', tz: 'America/Phoenix' },
  { label: 'Pacific Time (PT)', tz: 'America/Los_Angeles' },
  { label: 'Alaska Time (AKT)', tz: 'America/Anchorage' },
  { label: 'Hawaii Time (HST)', tz: 'Pacific/Honolulu' },
];

function BookingStep({ selectedDateTime, onChange }) {
  const [bookedSlots, setBookedSlots] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [timezone, setTimezone] = useState(TIMEZONES[0]);

  useEffect(() => {
    Promise.resolve({ slots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"] })
      .then(r => setBookedSlots(new Set(r.data.bookedSlots || [])))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const getUpcomingWeekdays = () => {
    const days = [];
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 1);
    while (days.length < 5) {
      if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
      d.setDate(d.getDate() + 1);
    }
    return days;
  };

  const weekdays = getUpcomingWeekdays();
  const etSlots = [];
  for (let h = 9; h <= 16; h++) { etSlots.push({ hour: h, minute: 0 }); etSlots.push({ hour: h, minute: 30 }); }
  etSlots.push({ hour: 17, minute: 0 });

  const isSlotBooked = (date, slot) => {
    if (!date) return false;
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return bookedSlots.has(`${y}-${m}-${d}-${slot.hour}`);
  };

  const formatSlotInTimezone = (date, slot) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(slot.hour).padStart(2, '0');
    const minute = String(slot.minute).padStart(2, '0');
    const localStr = `${year}-${month}-${day}T${hour}:${minute}:00`;
    const etRef = new Date(new Date(localStr).toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const utcRef = new Date(localStr);
    const offsetMs = utcRef - etRef;
    const utcDate = new Date(new Date(localStr).getTime() + offsetMs);
    return utcDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: timezone.tz });
  };

  const handleSlotSelect = (slot) => {
    if (!selectedDate) return;
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const hour = String(slot.hour).padStart(2, '0');
    const minute = String(slot.minute).padStart(2, '0');
    const localStr = `${year}-${month}-${day}T${hour}:${minute}:00`;
    const etDate = new Date(new Date(localStr).toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const utcDate = new Date(localStr);
    const finalDate = new Date(new Date(localStr).getTime() + (utcDate - etDate));
    setSelectedSlot(slot);
    onChange(finalDate.toISOString());
  };

  const selectedDateLabel = selectedDate
    ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    : '';

  const selectedTimeLabel = selectedDate && selectedSlot
    ? `${selectedDateLabel} at ${formatSlotInTimezone(selectedDate, selectedSlot)} (${timezone.label})`
    : null;

  if (loading) return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="relative flex items-center gap-2 bg-white/5 border border-white/15 rounded-lg px-3 py-2.5">
        <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
        <select
          className="flex-1 bg-transparent text-stone-200 text-sm focus:outline-none cursor-pointer appearance-none"
          value={timezone.tz}
          onChange={e => { setTimezone(TIMEZONES.find(t => t.tz === e.target.value)); setSelectedSlot(null); onChange(null); }}
        >
          {TIMEZONES.map(t => <option key={t.tz} value={t.tz} className="bg-stone-900 text-white">{t.label}</option>)}
        </select>
        <ChevronRight className="w-4 h-4 text-stone-500 rotate-90 shrink-0" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {weekdays.map((date, i) => {
          const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
          return (
            <button
              key={i}
              onClick={() => { setSelectedDate(date); setSelectedSlot(null); onChange(null); }}
              className={`flex flex-col items-center py-3 px-2 rounded-xl border-2 transition-all ${isSelected ? 'border-emerald-500 bg-emerald-500/15 text-white' : 'border-white/10 bg-white/5 text-stone-300 hover:border-white/20 hover:bg-white/10'}`}
            >
              <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-stone-200'}`}>{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
              <span className={`text-xs mt-0.5 ${isSelected ? 'text-emerald-300' : 'text-stone-500'}`}>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-stone-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>{selectedDateLabel} · {timezone.label}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {etSlots.map((slot, i) => {
              const booked = isSlotBooked(selectedDate, slot);
              const isSel = selectedSlot && selectedSlot.hour === slot.hour && selectedSlot.minute === slot.minute;
              return (
                <button
                  key={i}
                  onClick={() => !booked && handleSlotSelect(slot)}
                  disabled={booked}
                  className={`py-3 text-sm rounded-xl border-2 font-medium transition-all ${booked ? 'border-white/5 bg-white/5 text-stone-600 cursor-not-allowed line-through' : isSel ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300' : 'border-white/10 bg-white/5 text-stone-300 hover:border-white/20 hover:bg-white/10'}`}
                >
                  {formatSlotInTimezone(selectedDate, slot)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {selectedTimeLabel && (
        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3">
          <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-0.5">Your Session</p>
            <p className="text-stone-200 text-sm">{selectedTimeLabel}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Exit Intent Modal ────────────────────────────────────────────────────────

const EXIT_MESSAGES = [
  {
    headline: "Wait — Your Free Strategy Is Almost Ready!",
    body: "You're just a few steps away from a personalized Bank Vault Strategy worth hundreds in advisory fees — completely free.",
    cta: "Finish & Claim My Free Strategy",
    badge: "🎁 FREE Consultation Included",
  },
  {
    headline: "Don't Leave Empty-Handed.",
    body: "Your personalized wealth blueprint is being built in real time. Leaving now means starting over — or never starting at all.",
    cta: "Keep Going — I'm Almost Done",
    badge: "⚡ 2 Minutes Left",
  },
  {
    headline: "One Last Thing Before You Go…",
    body: "Our senior brokers only take a limited number of free consultations each week. Your spot may not be available when you come back.",
    cta: "Save My Spot Now",
    badge: "🔒 Limited Spots Available",
  },
];

function ExitIntentModal({ onContinue, onDismiss, step }) {
  const msg = EXIT_MESSAGES[Math.min(Math.floor(step / 2), EXIT_MESSAGES.length - 1)];
  const progressPct = Math.round((step / TOTAL_STEPS) * 100);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative max-w-md w-full rounded-xl border border-emerald-500/30 p-8 text-center"
        style={{ background: 'linear-gradient(145deg, #0d2a1a, #0a1f14)' }}
      >
        <button onClick={onDismiss} className="absolute top-4 right-4 text-stone-500 hover:text-stone-300 transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">{msg.badge}</div>
        <div className="w-14 h-14 bg-emerald-500/15 rounded-full flex items-center justify-center mx-auto mb-5">
          <Gift className="w-7 h-7 text-emerald-400" />
        </div>
        <h3 className="font-serif text-2xl text-white mb-3 leading-snug">{msg.headline}</h3>
        <p className="text-stone-400 text-sm leading-relaxed mb-7">{msg.body}</p>
        <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 mb-6 text-left">
          <p className="text-stone-400 text-xs mb-2">Your progress so far</p>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${progressPct}%`, background: 'linear-gradient(90deg, #059669, #34d399)' }} />
          </div>
          <p className="text-emerald-400 text-xs mt-1.5 font-medium">{progressPct}% complete — don't waste your progress</p>
        </div>
        <button onClick={onContinue} className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors text-sm mb-3">{msg.cta}</button>
        <button onClick={onDismiss} className="text-stone-600 hover:text-stone-400 text-xs transition-colors">No thanks, I'll figure it out on my own</button>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function QuoteFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [personal, setPersonal] = useState({});
  const [contact, setContact] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showExitModal, setShowExitModal] = useState(false);
  const exitShownCount = useRef(0);
  const hasShownForCurrentSession = useRef(false);

  // Disable browser back button navigation away from the form
  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Save progress to localStorage whenever key data changes
  useEffect(() => {
    const hasPersonalInfo = personal.firstName || personal.email || contact.email || contact.phone;
    if (!hasPersonalInfo) return;
    const snapshot = { personal, contact, answers, step };
    localStorage.setItem('fwQuoteProgress', JSON.stringify(snapshot));
  }, [personal, contact, answers, step]);

  // Abandoned lead: send email after 1 min if they leave without booking
  useEffect(() => {
    if (submitted) {
      localStorage.removeItem('fwQuoteProgress');
      return;
    }

    let abandonTimer = null;

    const scheduleAbandonEmail = () => {
      const hasPersonalInfo = personal.firstName || contact.firstName || contact.email || contact.phone;
      if (!hasPersonalInfo || selectedDateTime) return; // don't fire if they booked

      abandonTimer = setTimeout(() => {
        const payload = { personal, contact, answers };
        Promise.resolve();
        localStorage.removeItem('fwQuoteProgress');
      }, 60000); // 1 minute
    };

    const clearAbandonTimer = () => {
      if (abandonTimer) clearTimeout(abandonTimer);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') scheduleAbandonEmail();
      else clearAbandonTimer();
    };

    const handleBeforeUnload = () => scheduleAbandonEmail();

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearAbandonTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [personal, contact, answers, selectedDateTime, submitted]);

  useEffect(() => {
    if (submitted) return;
    const handleMouseLeave = (e) => {
      if (e.clientY <= 5 && !hasShownForCurrentSession.current && exitShownCount.current < 3) {
        setShowExitModal(true);
        hasShownForCurrentSession.current = true;
        exitShownCount.current += 1;
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [submitted]);

  const current = STEPS[step];
  const progress = PROGRESS_PERCENTS[step] ?? 100;

  const toggleOption = (label) => {
    const key = current.id;
    if (current.multi) {
      const prev = answers[key] || [];
      setAnswers({ ...answers, [key]: prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label] });
    } else {
      setAnswers({ ...answers, [key]: label });
    }
  };

  const isSelected = (label) => {
    const val = answers[current.id];
    return Array.isArray(val) ? val.includes(label) : val === label;
  };

  const canNext = (() => {
    if (current.type === 'personal') {
      return (
        (personal.firstName || '').trim().length >= 2 &&
        (personal.lastName || '').trim().length >= 2 &&
        (personal.state || '').length > 0
      );
    }
    if (current.type === 'contact') {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact.email || '');
      const phoneDigits = (contact.phone || '').replace(/\D/g, '');
      return emailValid && phoneDigits.length === 10;
    }
    if (current.type === 'booking') return !!selectedDateTime;
    const val = answers[current.id];
    return Array.isArray(val) ? val.length > 0 : !!val;
  })();

  const goNext = async () => {
    if (step < STEPS.length - 1) {
      setDirection(1);
      setStep(s => s + 1);
    } else {
      setSubmitting(true);
      try {
        await Promise.resolve({ success: true });
        setSubmitted(true);
      } catch (error) {
        alert('Error submitting form: ' + error.message);
      }
      setSubmitting(false);
    }
  };

  const goBack = () => {
    if (step > 0) { setDirection(-1); setStep(s => s - 1); }
  };

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  const renderStepContent = () => {
    if (current.type === 'personal') return <PersonalStep data={personal} onChange={setPersonal} />;
    if (current.type === 'contact') return <ContactStep data={contact} onChange={setContact} />;
    if (current.type === 'booking') return <BookingStep selectedDateTime={selectedDateTime} onChange={setSelectedDateTime} />;
    return (
      <div className="grid grid-cols-2 gap-3">
        {current.options.map(opt => (
          <OptionCard key={opt.label} icon={opt.icon} label={opt.label} selected={isSelected(opt.label)} onClick={() => toggleOption(opt.label)} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #0a1f14 0%, #0d2a1a 50%, #0a1a10 100%)' }}>
      <AnimatePresence>
        {showExitModal && (
          <ExitIntentModal
            step={step}
            onContinue={() => { setShowExitModal(false); hasShownForCurrentSession.current = false; }}
            onDismiss={() => setShowExitModal(false)}
          />
        )}
      </AnimatePresence>

      {/* Navbar — logo is NOT a link back home */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/10">
        <span className="font-sans text-xl font-semibold text-white tracking-tight">
          The <span className="text-emerald-400 font-bold">Finance</span> Wizards
        </span>
        <a href="tel:+17867403445" className="flex items-center gap-2 text-stone-300 hover:text-white text-sm transition-colors">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">NEED HELP? (786) 740-3445</span>
          <span className="sm:hidden">(786) 740-3445</span>
        </a>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg w-full bg-white/5 border border-emerald-500/30 rounded-md p-10 text-center"
          >
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="font-serif text-3xl text-white mb-4">You're all set!</h2>
            <p className="text-stone-300 leading-relaxed mb-6">
              A senior broker will call you at your scheduled time. Your personalized Bank Vault Strategy blueprint will be ready for your call.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 mb-6 text-left space-y-2">
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">While you wait...</p>
              <p className="text-stone-300 text-sm">📞 Have questions right now? Call us directly:</p>
              <a href="tel:+17867403445" className="block text-emerald-400 font-bold text-lg hover:text-emerald-300 transition-colors">(786) 740-3445</a>
            </div>
            <a href="/" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-sm transition-colors">
              Back to Home
            </a>
          </motion.div>
        ) : (
          <div className="max-w-2xl w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="bg-white/5 border border-white/10 rounded-md p-8 md:p-10"
              >
                {step === 0 && (
                  <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                    ⏱ Takes about 2 minutes · 100% Free
                  </div>
                )}

                <h2 className="font-serif text-2xl md:text-3xl text-white mb-2 leading-snug">{current.question}</h2>
                <p className="text-stone-400 text-sm mb-8">{current.subtitle}</p>

                {renderStepContent()}

                <div className="flex items-center gap-3 mt-8">
                  {step > 0 && (
                    <button
                      onClick={goBack}
                      className="px-6 py-3 border border-white/15 text-stone-300 hover:text-white hover:border-white/30 rounded-sm transition-colors text-sm font-medium"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={goNext}
                    disabled={!canNext || submitting}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-sm font-semibold text-base transition-colors
                      ${canNext && !submitting
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer'
                        : 'bg-white/10 text-stone-500 cursor-not-allowed'
                      }`}
                  >
                    {submitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Scheduling...</>
                    ) : (
                      <>{step === STEPS.length - 1 ? 'Claim My Free Strategy' : 'Continue'}<ChevronRight className="w-4 h-4" /></>
                    )}
                  </button>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #059669, #34d399)' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-stone-600">
                      {progress < 100
                        ? <><span className="text-emerald-600">Free consultation</span> just ahead</>
                        : <>🎉 Almost there!</>}
                    </span>
                    <span className="text-xs text-stone-600 font-medium">Step {step + 1} of {TOTAL_STEPS}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}