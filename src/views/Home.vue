<script setup>
// Página inicial limpa — removidas referências ao sistema de gerenciamento de tarefas
</script>

<template>
  <section class="home-section">
    <div class="card">
      <div class="card-header">
        <h2>Bem-vindo</h2>
        <p class="subtitle">Esta é a página inicial. Conteúdo relacionado ao sistema de gerenciamento de tarefas foi removido.</p>
      </div>

      <div class="content">
        <p>Use a navegação para explorar o site.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}
.card {
  background: white;
  border-radius: 12px;
  padding: 1.8rem;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.card-header h2 {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
}
.subtitle {
  color: #666;
  margin-bottom: 1rem;
}
.content {
  color: #333;
}
@media (max-width: 768px) {
  .card {
    padding: 1rem;
  }
}
</style>
