export default function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <header>
        <h2 id="menu-heading">Nuestros platos estrella</h2>
        <p>Ingredientes locales seleccionados</p>
      </header>
      <div>
        <article>
          <h3>Pulpo a la brasa</h3>
          <p>Con patatas confitadas y pimentón de la Vera</p>
          <span>€18.90</span>
        </article>
      </div>
      <a href="/menu-completo.pdf" download="Menu-Antenor">
        Ver menú completo (PDF)
      </a>
    </section>
  );
}
