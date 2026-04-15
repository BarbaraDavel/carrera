const materiasBase = [
  { id: 1, nombre: "Lengua Inglesa I", anio: "1° año", parcial1: "7.5", parcial2: "7.5", recuperatorio: "", final: "9", observaciones: "", trabajosPracticos: [], correlativas: [], requisitoEspecial: "" },
  { id: 2, nombre: "Gramática Inglesa I", anio: "1° año", parcial1: "9.5", parcial2: "9.5", recuperatorio: "", final: "7.5", observaciones: "", trabajosPracticos: [], correlativas: [], requisitoEspecial: "" },
  { id: 3, nombre: "Lengua Española I", anio: "1° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [], requisitoEspecial: "" },
  { id: 4, nombre: "Traducción General", anio: "1° año", parcial1: "7.5", parcial2: "7.3", recuperatorio: "", final: "6", observaciones: "", trabajosPracticos: [], correlativas: [], requisitoEspecial: "" },
  { id: 5, nombre: "Textos Latinoamericanos", anio: "1° año", parcial1: "6", parcial2: "5", recuperatorio: "", final: "8", observaciones: "", trabajosPracticos: [], correlativas: [], requisitoEspecial: "" },
  { id: 6, nombre: "Fundamentos de la Práctica de la Traducción", anio: "1° año", parcial1: "9.7", parcial2: "8.2", recuperatorio: "", final: "5", observaciones: "", trabajosPracticos: [], correlativas: [], requisitoEspecial: "" },
  { id: 7, nombre: "Herramientas Tecnológicas", anio: "1° año", parcial1: "10", parcial2: "10", recuperatorio: "", final: "10", observaciones: "", trabajosPracticos: [], correlativas: [], requisitoEspecial: "" },

  { id: 8, nombre: "Lengua Inglesa II", anio: "2° año", parcial1: "7", parcial2: "", recuperatorio: "", final: "9", observaciones: "", trabajosPracticos: [], correlativas: [1], requisitoEspecial: "" },
  { id: 9, nombre: "Gramática Inglesa II", anio: "2° año", parcial1: "7", parcial2: "", recuperatorio: "", final: "8.5", observaciones: "", trabajosPracticos: [], correlativas: [2], requisitoEspecial: "" },
  { id: 10, nombre: "Lengua Española II", anio: "2° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [3], requisitoEspecial: "" },
  { id: 11, nombre: "Traducción Técnica Científica I", anio: "2° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [4, 3], requisitoEspecial: "" },
  { id: 12, nombre: "Traducción Literaria I", anio: "2° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [4], requisitoEspecial: "" },
  { id: 13, nombre: "Vida e Instituciones de la Cultura Inglesa", anio: "2° año", parcial1: "10", parcial2: "", recuperatorio: "", final: "9", observaciones: "", trabajosPracticos: [], correlativas: [3], requisitoEspecial: "" },
  { id: 14, nombre: "Literatura Contemporánea Inglesa I", anio: "2° año", parcial1: "6.5", parcial2: "", recuperatorio: "", final: "10", observaciones: "", trabajosPracticos: [], correlativas: [], requisitoEspecial: "" },

  { id: 15, nombre: "Lengua Inglesa III", anio: "3° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [8], requisitoEspecial: "" },
  { id: 16, nombre: "Estudios Comparados del Inglés y el Español", anio: "3° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [9, 10], requisitoEspecial: "" },
  { id: 17, nombre: "Lingüística Aplicada", anio: "3° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [10], requisitoEspecial: "" },
  { id: 18, nombre: "Traducción Técnica Científica II", anio: "3° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [11], requisitoEspecial: "" },
  { id: 19, nombre: "Traducción Literaria II", anio: "3° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [12], requisitoEspecial: "" },
  { id: 20, nombre: "Vida e Instituciones de la Cultura Norteamericana", anio: "3° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [13], requisitoEspecial: "" },
  { id: 21, nombre: "Literatura Contemporánea Inglesa II", anio: "3° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [14], requisitoEspecial: "" },
  { id: 22, nombre: "Ética y Gestión Profesional", anio: "3° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [11, 12], requisitoEspecial: "" },

  { id: 23, nombre: "Tutoría de Trabajo Final", anio: "4° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [18, 19], requisitoEspecial: "" },
  { id: 24, nombre: "Residencia en Traducción", anio: "4° año", parcial1: "", parcial2: "", recuperatorio: "", final: "", observaciones: "", trabajosPracticos: [], correlativas: [], requisitoEspecial: "Entrega TP Final" }
];

let materias = cargarMaterias();
let materiaSeleccionadaId = null;
let vistaRapidaActual = "todas";

const listaMaterias = document.getElementById("listaMaterias");
const filtroAnio = document.getElementById("filtroAnio");
const filtroEstado = document.getElementById("filtroEstado");
const soloPendientes = document.getElementById("soloPendientes");

const totalMaterias = document.getElementById("totalMaterias");
const totalAprobadas = document.getElementById("totalAprobadas");
const totalPendientes = document.getElementById("totalPendientes");
const totalDebeFinal = document.getElementById("totalDebeFinal");

const detalleMateria = document.getElementById("detalleMateria");
const detalleNombre = document.getElementById("detalleNombre");
const detalleAnio = document.getElementById("detalleAnio");
const detalleParcial1 = document.getElementById("detalleParcial1");
const detalleParcial2 = document.getElementById("detalleParcial2");
const detalleRecuperatorio = document.getElementById("detalleRecuperatorio");
const detalleFinal = document.getElementById("detalleFinal");
const detalleEstadoManual = document.getElementById("detalleEstadoManual");
const detalleHabilitacion = document.getElementById("detalleHabilitacion");
const detalleCorrelativas = document.getElementById("detalleCorrelativas");
const detalleObservaciones = document.getElementById("detalleObservaciones");
const guardarCambios = document.getElementById("guardarCambios");
const cerrarDetalle = document.getElementById("cerrarDetalle");

const verTodas = document.getElementById("verTodas");
const verFinalesPendientes = document.getElementById("verFinalesPendientes");
const verNoRendidas = document.getElementById("verNoRendidas");
const verAprobadas = document.getElementById("verAprobadas");
const verHabilitadas = document.getElementById("verHabilitadas");
const verBloqueadas = document.getElementById("verBloqueadas");

const abrirVistaGeneral = document.getElementById("abrirVistaGeneral");
const cerrarVistaGeneral = document.getElementById("cerrarVistaGeneral");
const modalVistaGeneral = document.getElementById("modalVistaGeneral");
const tablaGeneralBody = document.getElementById("tablaGeneralBody");

const tpTitulo = document.getElementById("tpTitulo");
const tpSemana = document.getElementById("tpSemana");
const tpNota = document.getElementById("tpNota");
const tpEntregado = document.getElementById("tpEntregado");
const tpObservaciones = document.getElementById("tpObservaciones");
const agregarTp = document.getElementById("agregarTp");
const listaTps = document.getElementById("listaTps");

const toggleTema = document.getElementById("toggleTema");

function aplicarTemaGuardado() {
  const temaGuardado = localStorage.getItem("temaCarrera");

  if (temaGuardado === "claro") {
    document.body.classList.remove("tema-oscuro");
  } else {
    document.body.classList.add("tema-oscuro");
  }

  actualizarTextoBotonTema();
}

function actualizarTextoBotonTema() {
  if (!toggleTema) return;

  toggleTema.textContent = document.body.classList.contains("tema-oscuro")
    ? "☀️ Modo claro"
    : "🌙 Modo oscuro";
}

function alternarTema() {
  document.body.classList.toggle("tema-oscuro");
  const esOscuro = document.body.classList.contains("tema-oscuro");
  localStorage.setItem("temaCarrera", esOscuro ? "oscuro" : "claro");
  actualizarTextoBotonTema();
}

function cargarMaterias() {
  const guardadas = localStorage.getItem("materiasCarrera");
  if (guardadas) return JSON.parse(guardadas);

  return materiasBase.map((m) => ({
    ...m,
    estado: calcularEstado(m),
    trabajosPracticos: Array.isArray(m.trabajosPracticos) ? m.trabajosPracticos : [],
    correlativas: Array.isArray(m.correlativas) ? m.correlativas : []
  }));
}

function guardarMaterias() {
  localStorage.setItem("materiasCarrera", JSON.stringify(materias));
}

function normalizarNumero(valor) {
  if (valor === "" || valor === null || valor === undefined) return "";
  return Number(valor);
}

function tieneNota(valor) {
  return valor !== "" && valor !== null && valor !== undefined && !Number.isNaN(Number(valor));
}

function asegurarEstructuraMaterias() {
  materias = materias.map((m) => ({
    ...m,
    trabajosPracticos: Array.isArray(m.trabajosPracticos) ? m.trabajosPracticos : [],
    correlativas: Array.isArray(m.correlativas) ? m.correlativas : [],
    requisitoEspecial: m.requisitoEspecial || ""
  }));
}

function calcularEstado(materia) {
  const final = normalizarNumero(materia.final);
  const parcial1 = normalizarNumero(materia.parcial1);
  const parcial2 = normalizarNumero(materia.parcial2);
  const recuperatorio = normalizarNumero(materia.recuperatorio);

  if (tieneNota(final) && final >= 5) return "Aprobada";
  if (tieneNota(final) && final < 5) return "Final desaprobado";
  if (tieneNota(parcial1) || tieneNota(parcial2) || tieneNota(recuperatorio)) return "Debe final";
  return "Pendiente";
}

function recalcularEstados() {
  materias = materias.map((m) => ({
    ...m,
    estado: calcularEstado(m)
  }));
}

function tieneCorrelativasAprobadas(materia) {
  if (materia.requisitoEspecial) return false;

  if (!materia.correlativas || materia.correlativas.length === 0) return true;

  return materia.correlativas.every((idCorr) => {
    const corr = materias.find((m) => m.id === idCorr);
    return corr && corr.estado === "Aprobada";
  });
}

function obtenerNombresCorrelativas(materia) {
  const nombres = [];

  if (materia.correlativas && materia.correlativas.length > 0) {
    nombres.push(
      ...materia.correlativas
        .map((idCorr) => materias.find((m) => m.id === idCorr)?.nombre)
        .filter(Boolean)
    );
  }

  if (materia.requisitoEspecial) {
    nombres.push(materia.requisitoEspecial);
  }

  return nombres.length > 0 ? nombres.join(", ") : "No tiene";
}

function llenarFiltroAnios() {
  const anios = [...new Set(materias.map((m) => m.anio))];
  filtroAnio.innerHTML = `<option value="todos">Todos</option>`;

  anios.forEach((anio) => {
    const option = document.createElement("option");
    option.value = anio;
    option.textContent = anio;
    filtroAnio.appendChild(option);
  });
}

function obtenerClaseEstado(estado) {
  switch (estado) {
    case "Aprobada":
      return "badge-aprobada";
    case "Debe final":
      return "badge-debe-final";
    case "Final desaprobado":
      return "badge-final-desaprobado";
    default:
      return "badge-pendiente";
  }
}

function obtenerClaseEstadoTabla(estado) {
  switch (estado) {
    case "Aprobada":
      return "estado-aprobada";
    case "Debe final":
      return "estado-debe-final";
    case "Final desaprobado":
      return "estado-final-desaprobado";
    default:
      return "estado-pendiente";
  }
}

function renderResumen() {
  recalcularEstados();

  totalMaterias.textContent = materias.length;
  totalAprobadas.textContent = materias.filter((m) => m.estado === "Aprobada").length;
  totalPendientes.textContent = materias.filter(
    (m) => m.estado === "Pendiente" || m.estado === "Final desaprobado"
  ).length;
  totalDebeFinal.textContent = materias.filter((m) => m.estado === "Debe final").length;
}

function aplicarVistaRapida(materiasFiltradas) {
  switch (vistaRapidaActual) {
    case "finales":
      return materiasFiltradas.filter(
        (m) =>
          m.estado === "Debe final" ||
          m.estado === "Final desaprobado" ||
          (m.estado === "Pendiente" && tieneCorrelativasAprobadas(m))
      );

    case "no-rendidas":
      return materiasFiltradas.filter(
        (m) => m.estado === "Pendiente" && !tieneCorrelativasAprobadas(m)
      );

    case "aprobadas":
      return materiasFiltradas.filter((m) => m.estado === "Aprobada");

    case "habilitadas":
      return materiasFiltradas.filter(
        (m) => tieneCorrelativasAprobadas(m) && m.estado !== "Aprobada"
      );

    case "bloqueadas":
      return materiasFiltradas.filter(
        (m) => !tieneCorrelativasAprobadas(m) && m.estado !== "Aprobada"
      );

    default:
      return materiasFiltradas;
  }
}

function obtenerMateriasFiltradas() {
  recalcularEstados();

  const anioSeleccionado = filtroAnio.value;
  const estadoSeleccionado = filtroEstado.value;
  const soloPend = soloPendientes.checked;

  let filtradas = [...materias];

  if (anioSeleccionado !== "todos") {
    filtradas = filtradas.filter((m) => m.anio === anioSeleccionado);
  }

  if (soloPend) {
    filtradas = filtradas.filter((m) => m.estado !== "Aprobada");
  }

  if (estadoSeleccionado !== "todos") {
    filtradas = filtradas.filter((m) => m.estado === estadoSeleccionado);
  }

  filtradas = aplicarVistaRapida(filtradas);

  return filtradas;
}

function renderMaterias() {
  const filtradas = obtenerMateriasFiltradas();
  listaMaterias.innerHTML = "";

  if (filtradas.length === 0) {
    listaMaterias.innerHTML = `<div class="mensaje-vacio">No hay materias para mostrar.</div>`;
    return;
  }

  filtradas.forEach((materia) => {
    const card = document.createElement("div");
    const habilitada = tieneCorrelativasAprobadas(materia);
    const textoHabilitacion = habilitada ? "Habilitada" : "Bloqueada 🔒";

    card.className = "materia-card";
    card.innerHTML = `
      <div class="materia-top">
        <div>
          <h3>${materia.nombre}</h3>
          <div class="materia-anio">${materia.anio}</div>
        </div>
        <span class="badge ${obtenerClaseEstado(materia.estado)}">${materia.estado}</span>
      </div>

      <div class="materia-info">
        <div class="mini-dato">
          <span>Final</span>
          <strong>${materia.final || "-"}</strong>
        </div>
        <div class="mini-dato">
          <span>Correlativas</span>
          <strong>${obtenerNombresCorrelativas(materia)}</strong>
        </div>
        <div class="mini-dato">
          <span>Habilitación</span>
          <strong>${textoHabilitacion}</strong>
        </div>
      </div>
    `;

    card.addEventListener("click", () => abrirDetalle(materia.id));
    listaMaterias.appendChild(card);
  });
}

function renderVistaGeneral() {
  recalcularEstados();
  tablaGeneralBody.innerHTML = "";

  const materiasOrdenadas = [...materias].sort((a, b) => {
    const anioA = parseInt(a.anio);
    const anioB = parseInt(b.anio);
    if (anioA !== anioB) return anioA - anioB;
    return a.nombre.localeCompare(b.nombre);
  });

  materiasOrdenadas.forEach((materia) => {
    const fila = document.createElement("tr");
    const habilitada = tieneCorrelativasAprobadas(materia);

    fila.innerHTML = `
      <td>${materia.anio}</td>
      <td>${materia.nombre}</td>
      <td>${materia.parcial1 || "-"}</td>
      <td>${materia.parcial2 || "-"}</td>
      <td>${materia.recuperatorio || "-"}</td>
      <td>${materia.final || "-"}</td>
      <td>${obtenerNombresCorrelativas(materia)}</td>
      <td>${habilitada ? "Sí" : "No"}</td>
      <td>
        <span class="estado-tabla ${obtenerClaseEstadoTabla(materia.estado)}">
          ${materia.estado}
        </span>
      </td>
    `;

    tablaGeneralBody.appendChild(fila);
  });
}

function abrirModalVistaGeneral() {
  renderVistaGeneral();
  modalVistaGeneral.classList.remove("oculto");
}

function cerrarModalVistaGeneral() {
  modalVistaGeneral.classList.add("oculto");
}

function limpiarFormularioTp() {
  tpTitulo.value = "";
  tpSemana.value = "";
  tpNota.value = "";
  tpEntregado.checked = false;
  tpObservaciones.value = "";
}

function renderTrabajosPracticos() {
  if (materiaSeleccionadaId === null) {
    listaTps.innerHTML = "";
    return;
  }

  const materia = materias.find((m) => m.id === materiaSeleccionadaId);
  if (!materia) return;

  const tps = Array.isArray(materia.trabajosPracticos) ? materia.trabajosPracticos : [];
  listaTps.innerHTML = "";

  if (tps.length === 0) {
    listaTps.innerHTML = `<div class="mensaje-vacio">Todavía no cargaste trabajos prácticos en esta materia.</div>`;
    return;
  }

  tps.forEach((tp) => {
    const card = document.createElement("div");
    card.className = "tp-card";

    card.innerHTML = `
      <div class="tp-card-top">
        <div>
          <h4>${tp.titulo}</h4>
          <div class="tp-meta">${tp.semana || "-"}</div>
        </div>
        <button class="btn-eliminar-tp" data-id="${tp.id}" type="button">Eliminar</button>
      </div>

      <div class="tp-datos">
        <span class="tp-chip">Entregado: ${tp.entregado ? "Sí" : "No"}</span>
        <span class="tp-chip">Nota: ${tp.nota || "-"}</span>
        <span class="tp-chip">Obs: ${tp.observaciones || "-"}</span>
      </div>
    `;

    card.querySelector(".btn-eliminar-tp").addEventListener("click", () => eliminarTp(tp.id));
    listaTps.appendChild(card);
  });
}

function agregarTrabajoPractico() {
  if (materiaSeleccionadaId === null) {
    alert("Primero abrí una materia.");
    return;
  }

  const titulo = tpTitulo.value.trim();
  if (!titulo) {
    alert("Poné un título para el trabajo práctico.");
    return;
  }

  const materia = materias.find((m) => m.id === materiaSeleccionadaId);
  if (!materia) return;

  if (!Array.isArray(materia.trabajosPracticos)) {
    materia.trabajosPracticos = [];
  }

  materia.trabajosPracticos.push({
    id: Date.now(),
    titulo,
    semana: tpSemana.value.trim(),
    entregado: tpEntregado.checked,
    nota: tpNota.value,
    observaciones: tpObservaciones.value.trim()
  });

  guardarMaterias();
  renderTrabajosPracticos();
  limpiarFormularioTp();
}

function eliminarTp(tpId) {
  const materia = materias.find((m) => m.id === materiaSeleccionadaId);
  if (!materia || !Array.isArray(materia.trabajosPracticos)) return;

  materia.trabajosPracticos = materia.trabajosPracticos.filter((tp) => tp.id !== tpId);
  guardarMaterias();
  renderTrabajosPracticos();
}

function renderDetalleCorrelativas(materia) {
  detalleCorrelativas.innerHTML = "";

  if (!materia.correlativas || materia.correlativas.length === 0) {
    detalleCorrelativas.innerHTML = `<div class="mensaje-vacio">Esta materia no tiene correlativas.</div>`;
    return;
  }

  materia.correlativas.forEach((idCorr) => {
    const corr = materias.find((m) => m.id === idCorr);
    if (!corr) return;

    const item = document.createElement("div");
    item.className = "tp-card";
    item.innerHTML = `
      <div class="tp-card-top">
        <div>
          <h4>${corr.nombre}</h4>
          <div class="tp-meta">${corr.anio}</div>
        </div>
        <span class="badge ${obtenerClaseEstado(corr.estado)}">${corr.estado}</span>
      </div>
    `;

    detalleCorrelativas.appendChild(item);
  });
}

function abrirDetalle(id) {
  const materia = materias.find((m) => m.id === id);
  if (!materia) return;

  materiaSeleccionadaId = id;

  detalleNombre.textContent = materia.nombre;
  detalleAnio.textContent = materia.anio;
  detalleParcial1.value = materia.parcial1;
  detalleParcial2.value = materia.parcial2;
  detalleRecuperatorio.value = materia.recuperatorio;
  detalleFinal.value = materia.final;
  detalleObservaciones.value = materia.observaciones || "";
  detalleEstadoManual.value = calcularEstado(materia);
  detalleHabilitacion.value = tieneCorrelativasAprobadas(materia) ? "Habilitada" : "Bloqueada por correlativas";

  detalleMateria.classList.remove("oculto");
  detalleMateria.scrollIntoView({ behavior: "smooth" });

  renderDetalleCorrelativas(materia);
  renderTrabajosPracticos();
  limpiarFormularioTp();
}

function cerrarPanelDetalle() {
  detalleMateria.classList.add("oculto");
  materiaSeleccionadaId = null;
  listaTps.innerHTML = "";
  detalleCorrelativas.innerHTML = "";
  limpiarFormularioTp();
}

function actualizarMateriaSeleccionada() {
  if (materiaSeleccionadaId === null) return;

  const index = materias.findIndex((m) => m.id === materiaSeleccionadaId);
  if (index === -1) return;

  materias[index] = {
    ...materias[index],
    parcial1: detalleParcial1.value,
    parcial2: detalleParcial2.value,
    recuperatorio: detalleRecuperatorio.value,
    final: detalleFinal.value,
    observaciones: detalleObservaciones.value.trim(),
    trabajosPracticos: Array.isArray(materias[index].trabajosPracticos) ? materias[index].trabajosPracticos : [],
    correlativas: Array.isArray(materias[index].correlativas) ? materias[index].correlativas : []
  };

  materias[index].estado = calcularEstado(materias[index]);

  guardarMaterias();
  renderResumen();
  renderMaterias();
  renderVistaGeneral();
  renderTrabajosPracticos();

  detalleEstadoManual.value = materias[index].estado;
  detalleHabilitacion.value = tieneCorrelativasAprobadas(materias[index]) ? "Habilitada" : "Bloqueada por correlativas";
  renderDetalleCorrelativas(materias[index]);

  alert("Cambios guardados.");
}

function actualizarBotonesVistaRapida() {
  const botones = [
    verTodas,
    verFinalesPendientes,
    verNoRendidas,
    verAprobadas,
    verHabilitadas,
    verBloqueadas
  ];

  botones.forEach((btn) => btn.classList.remove("activo"));

  if (vistaRapidaActual === "todas") verTodas.classList.add("activo");
  if (vistaRapidaActual === "finales") verFinalesPendientes.classList.add("activo");
  if (vistaRapidaActual === "no-rendidas") verNoRendidas.classList.add("activo");
  if (vistaRapidaActual === "aprobadas") verAprobadas.classList.add("activo");
  if (vistaRapidaActual === "habilitadas") verHabilitadas.classList.add("activo");
  if (vistaRapidaActual === "bloqueadas") verBloqueadas.classList.add("activo");
}

function cambiarVistaRapida(vista) {
  vistaRapidaActual = vista;
  actualizarBotonesVistaRapida();
  renderMaterias();
}

filtroAnio.addEventListener("change", renderMaterias);
filtroEstado.addEventListener("change", renderMaterias);
soloPendientes.addEventListener("change", renderMaterias);
guardarCambios.addEventListener("click", actualizarMateriaSeleccionada);
cerrarDetalle.addEventListener("click", cerrarPanelDetalle);

verTodas.addEventListener("click", () => cambiarVistaRapida("todas"));
verFinalesPendientes.addEventListener("click", () => cambiarVistaRapida("finales"));
verNoRendidas.addEventListener("click", () => cambiarVistaRapida("no-rendidas"));
verAprobadas.addEventListener("click", () => cambiarVistaRapida("aprobadas"));
verHabilitadas.addEventListener("click", () => cambiarVistaRapida("habilitadas"));
verBloqueadas.addEventListener("click", () => cambiarVistaRapida("bloqueadas"));

abrirVistaGeneral.addEventListener("click", abrirModalVistaGeneral);
cerrarVistaGeneral.addEventListener("click", cerrarModalVistaGeneral);

modalVistaGeneral.addEventListener("click", (e) => {
  if (e.target === modalVistaGeneral) {
    cerrarModalVistaGeneral();
  }
});

toggleTema.addEventListener("click", alternarTema);
agregarTp.addEventListener("click", agregarTrabajoPractico);

aplicarTemaGuardado();
asegurarEstructuraMaterias();
llenarFiltroAnios();
actualizarBotonesVistaRapida();
renderResumen();
renderMaterias();
renderVistaGeneral();