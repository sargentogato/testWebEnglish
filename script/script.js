const profile = document.getElementById("main")

profile.addEventListener("click", (element) => {
  const elementTrigger = element.target.id

  switch (elementTrigger) {
    case "profile":
      setStyle(elementTrigger)
      break
    case "english":
      setStyle(elementTrigger)
      break
    case "gramma":
      setStyle(elementTrigger)
      break
    case "grammaAdvanced":
      setStyle(elementTrigger)
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
  console.log("AQUIIIIIIIIIII")
  document.getElementById("profile").style.setProperty("--width-profile", "0")
  document.getElementById("english").style.setProperty("--width-english", "0")
  document.getElementById("gramma").style.setProperty("--width-gramma", "0")
  document.getElementById("grammaAdvanced").style.setProperty("--width-grammaAdvanced", "0")
}
