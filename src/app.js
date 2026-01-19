async function checkBackend() {
  const statusEl = document.getElementById('status');
  const tasksEl = document.getElementById('tasks');

  try {
    const healthRes = await fetch('/api/health');
    const health = await healthRes.json();
    statusEl.textContent = `Backend: ${health.status} (${health.service})`;

    const tasksRes = await fetch('/api/tasks');
    const tasks = await tasksRes.json();

    tasksEl.innerHTML = '';
    tasks.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t.title;
      tasksEl.appendChild(li);
    });
  } catch (err) {
    statusEl.textContent = 'Error contactando con el backend';
    console.error(err);
  }
}

checkBackend();
