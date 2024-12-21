function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/avatar-light.png",
      "alt",
      "Fotode Maikbrito a o Dia"
    )
  } else {
    img.setAttribute(
      "src",
      "./assets/avatar.png",
      "alt",
      "Foto de Maikbrito a Noite"
    )
  }
}
