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
    transport_label: "Public Transportation",
    transport_value:
      "Subway: Line 3 Dongdae Station Exit 5<br />* Shuttles are provided from the hotel at Exit 5",
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
    travel_title: "오시는 길 및 숙박",
    travel_lead:
      "금요일 저녁까지 서울에 도착하시면 여유롭게 예식을 준비하실 수 있습니다.",
    address_label: "주소",
    transport_label: "대중교통",
    transport_value:
      "지하철: 3호선 동대입구역 5번 출구<br />* 5번 출구에서 호텔 셔틀버스가 운행됩니다.",
    parking_label: "주차 안내",
    parking_value:
      "호텔 내 주차 공간이 협소하오니 가급적 대중교통 이용을 권장합니다.<br /><br />주차 시 발렛 파킹 서비스를 이용하실 수 있습니다 (유료).",
    dress_code_label: "드레스 코드",
    dress_code_value: "칵테일 / 세미 포멀",
    rsvp_title: "참석 여부 (RSVP)",
    rsvp_lead: "참석 여부를 알려주세요.",
    form_note: "본 양식은 구글 설문지를 통해 제출됩니다.",
    calendar_title: "캘린더에 추가",
    calendar_lead: "일정을 잊지 않도록 캘린더에 등록해두세요.",
    google_cal: "구글 캘린더",
    ics_download: ".ics 다운로드",
    manual_date: "2026년 12월 12일 낮 12:00",
    manual_location: "대한민국 서울",
    footer_love: "사랑을 담아,",
    back_to_top: "맨 위로",
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

// Calendar links logic

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
  setupCalendarLinks();
});



