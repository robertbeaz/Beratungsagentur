'use client';

/* ============================================================
   GuideForm – E-Mail-Capture für den Leadmagnet-Guide.
   Aktuell reine UI mit Client-seitigem Erfolgsstatus.
   TODO: An ein E-Mail-/Automations-Tool anbinden (z. B.
   ActiveCampaign, Superchat oder Zapier-Webhook) – der Guide
   soll nach Eintrag automatisch per E-Mail zugestellt werden.
   ============================================================ */
import { useState } from 'react';
import { Button, Icon } from './primitives';

export function GuideForm({ form }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // TODO: echten Versand/Double-Opt-in anbinden (siehe Kommentar oben).
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-md bg-sand-0 p-6 text-center shadow-hairline md:p-8">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-pill bg-forest-100 text-forest-700">
          <Icon name="check" size={24} />
        </span>
        <p className="mt-4 font-display text-h4 text-sand-900">{form.successTitle}</p>
        <p className="mt-2 text-body-sm text-sand-600">{form.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-md bg-sand-0 p-6 shadow-md md:p-8">
      <p className="m-0 font-display text-h4 text-sand-900">{form.heading}</p>
      <div className="mt-5 space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vorname (optional)"
          className="h-12 w-full rounded-sm bg-sand-50 px-4 text-body text-sand-900 shadow-hairline placeholder:text-sand-400 focus:outline-none focus:shadow-[inset_0_0_0_2px_#4B7345]"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ihre E-Mail-Adresse"
          className="h-12 w-full rounded-sm bg-sand-50 px-4 text-body text-sand-900 shadow-hairline placeholder:text-sand-400 focus:outline-none focus:shadow-[inset_0_0_0_2px_#4B7345]"
        />
      </div>
      <Button type="submit" variant="accent" size="lg" icon="arrow-right" className="mt-4 w-full">
        {form.buttonLabel}
      </Button>
      <p className="mt-3 text-body-sm text-sand-500">{form.note}</p>
    </form>
  );
}
