// ======================================
// MULTIPLE AWAITS
// ======================================

function fetchHTML() {
  return Promise.resolve("HTML");
}

function fetchCSS() {
  return Promise.resolve("CSS");
}

function fetchJS() {
  return Promise.resolve("JavaScript");
}

async function loadSkills() {
  const html = await fetchHTML();

  const css = await fetchCSS();

  const js = await fetchJS();

  console.log(html, css, js);
}

loadSkills();
