<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const count = computed(() => store.state.count)
const doubled = computed(() => store.getters.doubled)

function increment(value) {
  store.commit('increment', value)
}

function reset() {
  store.commit('reset')
}
</script>

<template>
  <section class="about-section">
    <div class="card">
      <div class="card-header">
        <h2>ℹ️ Sobre o Projeto</h2>
        <p class="subtitle">Demonstração do <span class="highlight">Vue Router</span> e <span class="highlight">Vuex</span></p>
      </div>

      <div class="features">
        <div class="feature">
          <div class="feature-icon">🚀</div>
          <h3>Vue 3</h3>
          <p>Framework progressivo JavaScript</p>
        </div>
        <div class="feature">
          <div class="feature-icon">⚡</div>
          <h3>Vite</h3>
          <p>Build tool ultra-rápido</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🧭</div>
          <h3>Router</h3>
          <p>Navegação entre páginas</p>
        </div>
        <div class="feature">
          <div class="feature-icon">📦</div>
          <h3>Vuex</h3>
          <p>Gerenciamento de estado</p>
        </div>
      </div>

      <div class="counter-section">
        <h3>🔢 Contador Global (Vuex Store)</h3>
        <div class="counter-display">
          <div class="counter-card">
            <div class="counter-label">Valor Atual</div>
            <div class="counter-value">{{ count }}</div>
          </div>
          <div class="counter-arrow">→</div>
          <div class="counter-card">
            <div class="counter-label">Dobrado</div>
            <div class="counter-value doubled">{{ doubled }}</div>
          </div>
        </div>

        <div class="button-group">
          <button @click="increment(1)" class="btn btn-increment">
            <span class="btn-icon">+</span>
            <span>Incrementar</span>
          </button>
          <button @click="increment(5)" class="btn btn-increment-five">
            <span class="btn-icon">+5</span>
            <span>Adicionar 5</span>
          </button>
          <button @click="reset" class="btn btn-reset">
            <span class="btn-icon">↻</span>
            <span>Resetar</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  justify-content: center;
}

.card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  animation: slideUp 0.5s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-header {
  margin-bottom: 2rem;
  text-align: center;
}

.card-header h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1rem;
}

.highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.feature {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  animation: bounce 2s ease-in-out infinite;
}

.feature:nth-child(1) .feature-icon { animation-delay: 0s; }
.feature:nth-child(2) .feature-icon { animation-delay: 0.2s; }
.feature:nth-child(3) .feature-icon { animation-delay: 0.4s; }
.feature:nth-child(4) .feature-icon { animation-delay: 0.6s; }

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.feature h3 {
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.feature p {
  color: #666;
  font-size: 0.85rem;
}

.counter-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 12px;
  color: white;
}

.counter-section h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.counter-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.counter-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  min-width: 150px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.counter-label {
  color: #666;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.counter-value {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.counter-value.doubled {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.counter-arrow {
  font-size: 2rem;
  color: white;
  opacity: 0.8;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.9rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-icon {
  font-size: 1.2rem;
}

.btn-increment {
  background: #4caf50;
  color: white;
}

.btn-increment:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.btn-increment-five {
  background: #2196f3;
  color: white;
}

.btn-increment-five:hover {
  background: #0b7dda;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.btn-reset {
  background: #f44336;
  color: white;
}

.btn-reset:hover {
  background: #da190b;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }
  
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .counter-display {
    flex-direction: column;
  }
  
  .counter-arrow {
    transform: rotate(90deg);
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
