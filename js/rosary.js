const rosaryByDay = {
  0: "Glorious Mysteries",   // Sunday
  1: "Joyful Mysteries",     // Monday
  2: "Sorrowful Mysteries",  // Tuesday
  3: "Glorious Mysteries",   // Wednesday
  4: "Luminous Mysteries",   // Thursday
  5: "Sorrowful Mysteries",  // Friday
  6: "Joyful Mysteries"      // Saturday
}

const today = new Date()
const day = today.getDay()
const dayName = today.toLocaleDateString("en-US", { weekday: "long" })

const el = document.getElementById("rosary-today")

if (el) {
  el.innerHTML = `Today is <strong>${dayName}</strong> — <strong>${rosaryByDay[day]}</strong>`;
}
