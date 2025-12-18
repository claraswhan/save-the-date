// Translation dictionary
const translations = {
  en: {
    lang_btn: "한국어",
    hero_kicker: "Save the Date",
    hero_subtitle: "are tying the knot",
    hero_date: "December 12, 2026",
    hero_location: "Shilla Hotel, Seoul",
    rsvp_btn: "RSVP",
    our_day_title: "Our Day",
    our_day_lead:
      "We would be honored to have you with us as we celebrate our wedding surrounded by family and friends.",
    ceremony_title: "Ceremony",
    ceremony_details: "12:00 PM · Yeong Bin Gwan",
    reception_title: "Reception",
    reception_details: "5:30 PM · Grand Ballroom",
    our_day_note:
      "Formal invitation with full details to follow. Please save the date and let us know if you can join.",
    travel_title: "Travel & Stay",
    travel_lead:
      "We recommend arriving in Seoul by Friday evening to enjoy the city and avoid any last-minute travel stress.",
    address_label: "Address",
    address_value: "249, Dongho-ro, Jung-gu, Seoul, Korea 04605",
    transport_label: "Public Transportation",
    transport_value:
      "Dongguk University Station (Line 3), Exit 5<br />* Shuttles are provided from the hotel at Exit 5",
    parking_label: "Parking",
    parking_value:
      "There is limited parking available at the hotel. We recommend using public transportation.<br /><br />If you need to park, please use Valet Parking Service (additional fee).",
    dress_code_label: "Dress Code",
    dress_code_value: "Cocktail / Semi-formal",
    rsvp_title: "RSVP",
    rsvp_lead: "Please let us know if you will be able to celebrate with us.",
    label_name: "Name",
    placeholder_name: "Your full name",
    label_email: "Email",
    placeholder_email: "you@example.com",
    label_attending: "Will you be attending?",
    opt_select: "Select an option",
    opt_yes: "Yes, joyfully accepting",
    opt_no: "Regretfully declining",
    label_guests: "Number of guests",
    guests_hint: "Include yourself and anyone in your household.",
    label_diet: "Dietary notes",
    placeholder_diet: "Allergies or preferences",
    label_message: "Message for the couple",
    placeholder_message: "We'd love to hear from you!",
    submit_rsvp: "Submit RSVP",
    form_note:
      'This form runs entirely in your browser. To receive RSVPs by email or a spreadsheet, connect it to a service such as Formspree, Google Forms, or your own backend. See <span class="inline-code">README.md</span> for details.',
    calendar_title: "Add to Your Calendar",
    calendar_lead:
      "Mark your calendar so you don't miss the celebration. Times are approximate and will be confirmed with the formal invitation.",
    google_cal: "Google Calendar",
    ics_download: "Download .ics",
    manual_date: "December 12, 2026 at 12:00 PM",
    manual_location: "Seoul, South Korea",
    footer_love: "With love,",
    back_to_top: "Back to top",
    status_success: "Thank you! Your RSVP has been recorded in this browser.",
    status_error: "Please fix the highlighted fields and try submitting again.",
    error_name: "Please enter your name.",
    error_email_empty: "Please enter your email.",
    error_email_invalid: "Please enter a valid email.",
    error_attending: "Please select an option.",
  },
  ko: {
    lang_btn: "English",
    hero_kicker: "세이브 더 데이트",
    hero_subtitle: "저희 결혼합니다",
    hero_date: "2026년 12월 12일",
    hero_location: "서울 신라호텔",
    rsvp_btn: "참석 여부 알리기",
    our_day_title: "예식 안내",
    our_day_lead: "저희의 결혼식에 소중한 분들을 초대합니다.",
    ceremony_title: "예식",
    ceremony_details: "낮 12:00 · 영빈관",
    reception_title: "피로연",
    reception_details: "오후 5:30 · 그랜드 볼룸",
    our_day_note:
      "정식 청첩장은 추후에 전달드릴 예정입니다. 일정을 확인해주시고 참석 여부를 알려주시면 감사하겠습니다.",
    travel_title: "오시는 길",
    travel_lead:
      "금요일 저녁까지 서울에 도착하시면 여유롭게 예식을 준비하실 수 있습니다.",
    address_label: "주소",
    address_value: "서울특별시 중구 동호로 249 (장충동2가)",
    transport_label: "대중교통",
    transport_value:
      "지하철: 3호선 동대입구역 5번 출구<br />* 5번 출구에서 호텔 셔틀버스가 운행됩니다.",
    parking_label: "주차 안내",
    parking_value:
      "호텔 내 주차 공간이 협소하오니 가급적 대중교통 이용을 권장합니다.<br /><br />주차 시 발렛 파킹 서비스를 이용하실 수 있습니다 (유료).",
    dress_code_label: "드레스 코드",
    dress_code_value: "칵테일 / 세미 포멀",
    rsvp_title: "RSVP",
    rsvp_lead: "참석 여부를 알려주세요.",
    label_name: "성함",
    placeholder_name: "성함을 입력해주세요",
    label_email: "이메일",
    placeholder_email: "you@example.com",
    label_attending: "참석 여부",
    opt_select: "선택해주세요",
    opt_yes: "참석합니다",
    opt_no: "참석이 어렵습니다",
    label_guests: "동반 인원",
    guests_hint: "본인을 포함한 총 인원을 입력해주세요.",
    label_diet: "식사 관련 참고사항",
    placeholder_diet: "알레르기 또는 기타 요청사항",
    label_message: "축하 메시지",
    placeholder_message: "신랑 신부에게 전하고 싶은 말을 남겨주세요.",
    submit_rsvp: "RSVP 전송",
    form_note:
      '본 양식은 브라우저에서만 작동합니다. 실제로 RSVP를 받으려면 Formspree, Google Forms 등의 서비스를 연결해야 합니다. 자세한 내용은 <span class="inline-code">README.md</span>를 참조하세요.',
    calendar_title: "캘린더에 추가",
    calendar_lead: "일정을 잊지 않도록 캘린더에 등록해두세요.",
    google_cal: "구글 캘린더",
    ics_download: ".ics 다운로드",
    manual_date: "2026년 12월 12일 낮 12:00",
    manual_location: "대한민국 서울",
    footer_love: "사랑을 담아,",
    back_to_top: "맨 위로",
    status_success: "감사합니다! RSVP가 정상적으로 기록되었습니다.",
    status_error: "입력 내용을 확인하고 다시 시도해주세요.",
    error_name: "성함을 입력해주세요.",
    error_email_empty: "이메일을 입력해주세요.",
    error_email_invalid: "올바른 이메일 형식을 입력해주세요.",
    error_attending: "참석 여부를 선택해주세요.",
  },
};

let currentLang = "en";

function updateLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update text content for elements with data-t
  document.querySelectorAll("[data-t]").forEach((el) => {
    const key = el.getAttribute("data-t");
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-t-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-t-placeholder");
    if (t[key]) {
      el.setAttribute("placeholder", t[key]);
    }
  });

  // Update toggle button text
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = t.lang_btn;
  }

  // Update page title
  document.title =
    lang === "en"
      ? "Save the Date – Clara & Tyler"
      : "세이브 더 데이트 – 클라라 & 타일러";
}

function setupLanguageToggle() {
  const langToggle = document.getElementById("lang-toggle");
  if (!langToggle) return;

  langToggle.addEventListener("click", () => {
    const nextLang = currentLang === "en" ? "ko" : "en";
    updateLanguage(nextLang);
  });
}

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
      const t = translations[currentLang];
      if (!value.trim()) return t.error_name;
      return "";
    },
    email: (value) => {
      const t = translations[currentLang];
      if (!value.trim()) return t.error_email_empty;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) return t.error_email_invalid;
      return "";
    },
    attending: (value) => {
      const t = translations[currentLang];
      if (!value) return t.error_attending;
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
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLTextAreaElement
    ) {
      if (validators[target.name]) {
        validateField(target);
      }
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    showStatus("", "");

    const t = translations[currentLang];

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
      showStatus(t.status_error, "error");
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("RSVP submission (no backend configured):", data);

    showStatus(t.status_success, "success");

    form.reset();
  });
}

function setupCalendarLinks() {
  const googleLink = document.getElementById("google-calendar-link");
  const icsLink = document.getElementById("ics-download-link");

  // Event details - customize here if your date/location change
  const title = "Clara & Tyler\u2019s Wedding";
  const description = "Wedding celebration for Clara & Tyler.";
  const location = "Seoul, South Korea";

  // Times must be in YYYYMMDDTHHmmssZ format for Google
  // Example here: 2026-09-20 15:30 to 21:00 local; adjust if needed.
  const start = "20261212T153000Z";
  const end = "20261212T210000Z";

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
  setupLanguageToggle();
  setupRSVPForm();
  setupCalendarLinks();
});
