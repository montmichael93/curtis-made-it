export const MessageComponent = () => {
  const handleIframeLoad = () => {
    window.parent.scrollTo(0, 0);
  };
  return (
    <>
      <iframe
        id="JotFormIFrame-233424549821155"
        title="Responsive Envelope Contact Form"
        onLoad={handleIframeLoad}
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/233424549821155"
        className="message-form"
      />
    </>
  );
};
