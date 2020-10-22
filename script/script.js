const main = document.getElementById("main")

const profile = document.getElementById("profile")
const english = document.getElementById("english")
const gramma = document.getElementById("gramma")
const grammaAdvanced = document.getElementById("grammaAdvanced")

let sectionsWeb = [profile, english, gramma, grammaAdvanced]

main.addEventListener("click", (element) => {
  const elementTrigger = element.target.id
  const elementToChange = element.target
  switch (elementTrigger) {
    case "profile":
      setStyle(elementTrigger)
      hideVerticalTitle(elementToChange)
      showsCourse(elementToChange)
      break
    case "english":
      setStyle(elementTrigger)
      hideVerticalTitle(elementToChange)
      showsCourse(elementToChange)
      break
    case "gramma":
      setStyle(elementTrigger)
      hideVerticalTitle(elementToChange)
      showsCourse(elementToChange)
      break
    case "grammaAdvanced":
      setStyle(elementTrigger)
      hideVerticalTitle(elementToChange)
      showsCourse(elementToChange)
      break

    default:
      break
  }
})

function setStyle(element) {
  resetStyle()

  const cssVariable = `--width-${element}`
  const elementToChange = document.getElementById(`${element}`)
  elementToChange.style.setProperty(`${cssVariable}`, "100%")
}

function resetStyle() {
  profile.style.setProperty("--width-profile", "0")
  english.style.setProperty("--width-english", "0")
  gramma.style.setProperty("--width-gramma", "0")
  grammaAdvanced.style.setProperty("--width-grammaAdvanced", "0")
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
  profile.lastElementChild.classList.remove("course")
  english.lastElementChild.classList.remove("course")
  gramma.lastElementChild.classList.remove("course")
  grammaAdvanced.lastElementChild.classList.remove("course")
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
  console.log("ESTE:", elementToChange)
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
// function addVerticalTextClass() {
//   for (const iterator of sectionsWeb) {
//     console.log()
//     if (iterator.id !== "profile") {
//       if (!iterator.classList.contains("vertical-text")) {
//         iterator.classList.add("vertical-text")
//       }
//     }
//   }
// }
