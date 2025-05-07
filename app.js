function uploadScript() {
    const name = document.getElementById('name').value.trim();
    const code = document.getElementById('code').value.trim();
    if (!name || !code) return alert('Completa todos los campos');
  
    db.collection("scripts").add({
      name,
      code,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      alert('✅ Script subido');
      loadScripts();
    });
  }
  
  function loadScripts() {
    db.collection("scripts").orderBy("created", "desc").get().then(snapshot => {
      const container = document.getElementById('scripts');
      container.innerHTML = "";
      snapshot.forEach(doc => {
        const data = doc.data();
        const el = document.createElement("div");
        el.className = "script-card";
        el.innerHTML = `
          <h3>${data.name}</h3>
          <pre>${data.code}</pre>
          <button onclick="copyScript(\`${data.code.replace(/`/g, '\\`')}\`)">📋 Copiar</button>
        `;
        container.appendChild(el);
      });
    });
  }
  
  function copyScript(code) {
    navigator.clipboard.writeText(code);
    alert("📋 Script copiado al portapapeles");
  }
  
  function searchScripts() {
    const query = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.script-card');
    cards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = name.includes(query) ? 'block' : 'none';
    });
  }
  
  window.onload = loadScripts;
  