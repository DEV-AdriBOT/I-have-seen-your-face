// Mock de usuarios
const mockUsers = [
  { id: 1, name: "Ana_23", distance: "250m", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 2, name: "Carlos_91", distance: "1.2km", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 3, name: "Marta_SS", distance: "500m", avatar: "https://i.pravatar.cc/150?img=8" }
];

// Toggle de visibilidad
document.getElementById('visibilityToggle').addEventListener('change', function() {
  const statusText = document.getElementById('statusText');
  statusText.textContent = this.checked ? "Visible 👁️" : "Oculto 🕶️";
});

// Renderizar usuarios
const usersList = document.getElementById('usersList');
mockUsers.forEach(user => {
  const userCard = document.createElement('div');
  userCard.className = 'user-card';
  userCard.innerHTML = `
    <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
    <div>
      <p class="user-name">${user.name}</p>
      <p class="user-distance">${user.distance}</p>
    </div>
    <button class="signal-btn" onclick="sendSignal(${user.id})">Enviar señal</button>
  `;
  usersList.appendChild(userCard);
});

function sendSignal(userId) {
  alert(`Señal enviada al usuario ${userId} (simulación)`);
}