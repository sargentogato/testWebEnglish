const main = document.getElementById("main")

const profile = document.getElementById("profile")
const english = document.getElementById("english")
const gramma = document.getElementById("gramma")
const grammaAdvanced = document.getElementById("grammaAdvanced")

let sectionsWeb = [profile, english, gramma, grammaAdvanced]

const profileColor = "#FFFEF6"
const englishColor = "#EFE9E7"
const grammaColor = "#F5F1F8"
const grammaAdvancedColor = "#111111"
const colorTextWhite = "#ffffff"
const colorTextBlack = "#000000"

/************ Screen adapter************************************/
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", `${vh}px`)

window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
})

/************ Get Device to adapta de website ******************/

const getDeviceType = () => {
  const device = navigator.userAgent
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(device)) {
    return "tablet"
  }
  if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(device)) {
    return "mobile"
  }
  return "desktop"
}

main.addEventListener("click", (element) => {
  const elementTrigger = element.target.id
  const elementToChange = element.target
  switch (elementTrigger) {
    case "profile":
      setStyle(elementTrigger)
      changeBackground(profileColor, colorTextBlack)
      hideVerticalTitle(elementToChange)
      showsCourse(elementToChange)
      break
    case "english":
      setStyle(elementTrigger)
      changeBackground(englishColor, colorTextBlack)
      hideVerticalTitle(elementToChange)
      showsCourse(elementToChange)
      break
    case "gramma":
      setStyle(elementTrigger)
      changeBackground(grammaColor, colorTextBlack)
      hideVerticalTitle(elementToChange)
      showsCourse(elementToChange)
      break
    case "grammaAdvanced":
      setStyle(elementTrigger)
      changeBackground(grammaAdvancedColor, colorTextWhite)
      hideVerticalTitle(elementToChange)
      showsCourse(elementToChange)
      break

    default:
      break
  }
})

function setStyle(element) {
  resetStyle()

  const cssVariable = `--size-${element}`
  const elementToChange = document.getElementById(`${element}`)
  elementToChange.style.setProperty(`${cssVariable}`, "100%")
}

function resetStyle() {
  profile.style.setProperty("--size-profile", "0")
  english.style.setProperty("--size-english", "0")
  gramma.style.setProperty("--size-gramma", "0")
  grammaAdvanced.style.setProperty("--size-grammaAdvanced", "0")
}

function changeBackground(color, colorText) {
  main.style.setProperty("--background-general-color", `${color}`)
  changeColorText(colorText)
}

function changeColorText(colorText) {
  main.style.setProperty("--text-general-color", `${colorText}`)
}

function hideVerticalTitle(element) {
  for (const iterator of sectionsWeb) {
    iterator.firstElementChild.classList.remove("hideVerticalTitle")
  }

  const elementToHide = element.firstElementChild
  elementToHide.className = "hideVerticalTitle"
}

function showsCourse(element) {
  const elementToChange = element.lastElementChild
  hideCourseInfo()
  addCourseHidded(elementToChange)

  setTimeout(() => {
    removeInfoCourse(elementToChange)
    removeVerticalTextClass(element)
    elementToChange.classList.add("course")
  }, 1000)
}

function hideCourseInfo() {
  for (const iterator of sectionsWeb) {
    iterator.lastElementChild.classList.remove("course")
  }
}

function removeInfoCourse(element) {
  element.classList.toggle("course__hidded")
}

function addCourseHidded() {
  for (const iterator of sectionsWeb) {
    if (!iterator.lastElementChild.classList.contains("course__hidded")) {
      iterator.lastElementChild.classList.add("course__hidded")
    }
  }
}

function removeVerticalTextClass(elementToChange) {
  addVerticalTextClass()
  elementToChange.classList.remove("vertical-text")
}

function addVerticalTextClass() {
  for (const iterator of sectionsWeb) {
    if (!iterator.classList.contains("vertical-text")) {
      iterator.classList.add("vertical-text")
    }
  }
}

addEventListener("load", () => {
  getDeviceType()
  if (getDeviceType() !== "desktop") {
    for (const iterator of sectionsWeb) {
      if (iterator.id !== "profile") {
        iterator.lastElementChild.classList.add("mobile")
      }
    }
  }
})
