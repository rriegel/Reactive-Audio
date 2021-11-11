import * as Tone from 'tone';

const limiter = new Tone.Limiter(-20).toDestination();

const gainNode = new Tone.Gain(0.6).connect(limiter);

const casio = new Tone.Sampler({
  urls: {
    A1: 'A1.mp3',
    A2: 'A2.mp3',
  },
  baseUrl: 'https://tonejs.github.io/audio/casio/',
  onload: () => {
    this.setState({
      isLoaded: true,
    });
  },
}).connect(gainNode);

const salamander = new Tone.Sampler({
  urls: {
    A1: 'A1.mp3',
    A2: 'A2.mp3',
  },
  baseUrl: 'https://tonejs.github.io/audio/salamander/',
  onload: () => {
    this.setState({
      isLoaded: true,
    });
  },
}).connect(gainNode);

export { casio, salamander };
