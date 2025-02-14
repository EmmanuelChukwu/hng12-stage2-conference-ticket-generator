import React, { useState } from 'react';
import TicketSelection from './ticket_selection_page/TicketSelection';
import AttendeeDetails from './attendee_details_page/AttendeeDetails';
import TicketReady from './ticket_ready_page/TicketReady';

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1); // Move to the next step
  };

  const handleBack = () => {
    setStep(step - 1); // Move to the previous step
  };

  const handleReset = () => {
    setStep(1); // Move to the first step
    setFormData({}); // Clear form data
  }

  return (
    <div>
      {step === 1 && <TicketSelection onNext={handleNext} />}
      {step === 2 && <AttendeeDetails onBack={handleBack} onNext={handleNext} />}
      {step === 3 && <TicketReady {...formData} onClear={handleReset} />}
    </div>
  );
}
