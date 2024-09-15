function IntroCard() {
  return (
    <div className="intro__card">
      <p className="intro__card-count">1</p>
      <div className="intro__img-wrap">
        <img src="./about_speech_1.png" alt="About Speech" />
      </div>
      <h3>Transcription feature</h3>
      <p className="intro__card-desc">
        Not only can it read recorded and audio files , but it can also link
        with <br /> online conference systems and automatically transcribe audio
        from real meetings.
      </p>
    </div>
  );
}

export default IntroCard;
