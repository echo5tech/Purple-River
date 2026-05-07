import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  hint?: string
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
  hint?: string
}

const baseInputClasses =
  'w-full rounded-lg border bg-pr-indigo-900 px-4 py-3 text-slate-100 placeholder-pr-ink-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pr-cyan-400 focus:border-transparent'

const borderClasses = {
  default: 'border-pr-indigo-800 hover:border-pr-lavender-300',
  error: 'border-red-500',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, id, className = '', ...props },
  ref
) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-slate-300">
        {label}
        {props.required && <span className="ml-1 text-pr-cyan-400">*</span>}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={[
          baseInputClasses,
          error ? borderClasses.error : borderClasses.default,
          className,
        ].join(' ')}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        aria-invalid={error ? true : undefined}
        {...props}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-xs text-pr-ink-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
})

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, hint, id, className = '', ...props },
  ref
) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-slate-300">
        {label}
        {props.required && <span className="ml-1 text-pr-cyan-400">*</span>}
      </label>
      <textarea
        ref={ref}
        id={inputId}
        rows={4}
        className={[
          baseInputClasses,
          error ? borderClasses.error : borderClasses.default,
          'resize-y',
          className,
        ].join(' ')}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        aria-invalid={error ? true : undefined}
        {...props}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-xs text-pr-ink-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
})

export const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; error?: string }
>(function Select({ label, error, id, children, className = '', ...props }, ref) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-slate-300">
        {label}
        {props.required && <span className="ml-1 text-pr-cyan-400">*</span>}
      </label>
      <select
        ref={ref}
        id={inputId}
        className={[
          baseInputClasses,
          error ? borderClasses.error : borderClasses.default,
          'appearance-none',
          className,
        ].join(' ')}
        aria-invalid={error ? true : undefined}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
})
