// Basic client-side RSVP handling & calendar links

function setupRSVPForm() {
  const form = document.getElementById("rsvp-form");
  const statusEl = document.getElementById("form-status");

  if (!form || !statusEl) return;

  const showStatus = (message, type) => {
    statusEl.textContent = message;
    statusEl.classList.remove("form-status--success", "form-status--error");
    if (type === "success") {
      statusEl.classList.add("form-status--success");
    } else if (type === "error") {
      statusEl.classList.add("form-status--error");
    }
  };

  const validators = {
    name: (value) => {
      if (!value.trim()) return "Please enter your name.";
      return "";
    },
    email: (value) => {
      if (!value.trim()) return "Please enter your email.";
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) return "Please enter a valid email.";
      return "";
    },
    attending: (value) => {
      if (!value) return "Please select an option.";
      return "";
    },
  };

  const validateField = (input) => {
    const name = input.name;
    if (!validators[name]) return "";

    const errorMessage = validators[name](input.value);
    const errorEl = form.querySelector(`.field-error[data-for="${name}"]`);
    if (errorEl) {
      errorEl.textContent = errorMessage;
      errorEl.classList.toggle("hidden", !errorMessage);
    }
    if (errorMessage) {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
    return errorMessage;
  };

  form.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) {
      return;
    }
    if (validators[target.name]) {
      validateField(target);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    showStatus("", "");

    const requiredInputs = ["name", "email", "attending"].map((name) =>
      form.elements.namedItem(name)
    );

    let hasError = false;
    requiredInputs.forEach((el) => {
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLSelectElement ||
        el instanceof HTMLTextAreaElement
      ) {
        const error = validateField(el);
        if (error) hasError = true;
      }
    });

    if (hasError) {
      showStatus(
        "Please fix the highlighted fields and try submitting again.",
        "error"
      );
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("RSVP submission (no backend configured):", data);

    showStatus(
      "Thank you! Your RSVP has been recorded in this browser.",
      "success"
    );

    form.reset();
  });
}

function setupCalendarLinks() {
  const googleLink = document.getElementById("google-calendar-link");
  const icsLink = document.getElementById("ics-download-link");

  // Event details - customize here if your date/location change
  const title = "Clara & Tyler\u2019s Wedding";
  const description = "Wedding celebration for Clara & Tyler.";
  const location = "San Francisco, California";

  // Times must be in YYYYMMDDTHHmmssZ format for Google
  // Example here: 2026-09-20 15:30 to 21:00 local; adjust if needed.
  const start = "20260920T153000Z";
  const end = "20260920T210000Z";

  if (googleLink) {
    const googleBase = "https://www.google.com/calendar/render?action=TEMPLATE";
    const params = new URLSearchParams({
      text: title,
      details: description,
      location,
      dates: `${start}/${end}`,
    });
    googleLink.href = `${googleBase}&${params.toString()}`;
  }

  if (icsLink) {
    const dtStamp = "20250101T000000Z";
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//SaveTheDate//Wedding//EN",
      "BEGIN:VEVENT",
      `DTSTAMP:${dtStamp}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    icsLink.href = url;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupRSVPForm();
  setupCalendarLinks();
});


