let audioContext: AudioContext | null = null;

function getAudioContext() {
    if (!audioContext) {
        audioContext = new AudioContext();
    }

    return audioContext;
}

export function playCelebration() {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // C Major Celebration Chord
    const notes = [
        523.25, // C5
        659.25, // E5
        783.99, // G5
        1046.5, // C6
    ];

    notes.forEach((frequency, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";

        osc.frequency.setValueAtTime(
            frequency,
            now
        );

        // Slight upward shimmer
        osc.frequency.linearRampToValueAtTime(
            frequency * 1.01,
            now + 0.6
        );

        const start = now + index * 0.06;

        gain.gain.setValueAtTime(
            0.0001,
            start
        );

        gain.gain.exponentialRampToValueAtTime(
            0.08,
            start + 0.03
        );

        gain.gain.exponentialRampToValueAtTime(
            0.03,
            start + 0.25
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            start + 0.9
        );

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + 0.9);
    });

    // Sparkle
    const sparkle = ctx.createOscillator();
    const sparkleGain = ctx.createGain();

    sparkle.type = "sine";
    sparkle.frequency.value = 1760;

    sparkleGain.gain.setValueAtTime(
        0.0001,
        now + 0.22
    );

    sparkleGain.gain.exponentialRampToValueAtTime(
        0.03,
        now + 0.24
    );

    sparkleGain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + 0.55
    );

    sparkle.connect(sparkleGain);
    sparkleGain.connect(ctx.destination);

    sparkle.start(now + 0.22);
    sparkle.stop(now + 0.55);
}