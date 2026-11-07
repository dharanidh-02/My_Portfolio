// Synthesizes the iconic Netflix "Ta-dum" double orchestral strike using Web Audio API
export const playTudum = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return

    const ctx = new AudioContext()
    if (ctx.state === 'suspended') {
      ctx.resume()
    }

    const now = ctx.currentTime

    // First deep strike (low frequencies + sub bass)
    const playStrike = (time, baseFreq, duration, gainLevel) => {
      // Sub oscillator
      const osc1 = ctx.createOscillator()
      const gain1 = ctx.createGain()
      osc1.type = 'sawtooth'
      osc1.frequency.setValueAtTime(baseFreq, time)
      osc1.frequency.exponentialRampToValueAtTime(baseFreq * 0.7, time + duration)

      gain1.gain.setValueAtTime(gainLevel, time)
      gain1.gain.exponentialRampToValueAtTime(0.001, time + duration)

      // Low pass filter for warmth
      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(600, time)
      filter.frequency.linearRampToValueAtTime(200, time + duration)

      osc1.connect(filter)
      filter.connect(gain1)
      gain1.connect(ctx.destination)

      osc1.start(time)
      osc1.stop(time + duration)

      // Harmonics oscillator
      const osc2 = ctx.createOscillator()
      const gain2 = ctx.createGain()
      osc2.type = 'triangle'
      osc2.frequency.setValueAtTime(baseFreq * 1.5, time)

      gain2.gain.setValueAtTime(gainLevel * 0.4, time)
      gain2.gain.exponentialRampToValueAtTime(0.001, time + duration * 0.8)

      osc2.connect(gain2)
      gain2.connect(ctx.destination)

      osc2.start(time)
      osc2.stop(time + duration)
    }

    // Strike 1 (Ta-)
    playStrike(now, 58, 0.45, 0.35)

    // Strike 2 (-Dum, deeper and prolonged)
    playStrike(now + 0.18, 48, 1.3, 0.45)
  } catch {
    // Audio context was blocked or not supported; fail silently
  }
}
