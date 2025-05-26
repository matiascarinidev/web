interface FeriadoAPI {
  fecha: string; // Formato "YYYY-MM-DD"
  motivo: string;
  tipo: string;
}

export async function obtenerFeriados(): Promise<string[]> {
  const añoActual = new Date().getFullYear();
  const CACHE_KEY = `feriados-${añoActual}`;
  const CACHE_EXPIRATION_DAYS = 7; // Dias de validez del cache

  // 1. Intentar obtener del cache
  const cachedData = getCache(CACHE_KEY, CACHE_EXPIRATION_DAYS);
  if (cachedData) return cachedData;

  // 2. Fetch desde API si no hay cache válido
  try {
    const url = `https://api.argentinadatos.com/v1/feriados/${añoActual}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data: FeriadoAPI[] = await response.json();

    // Formatear a DD/MM
    const feriados = data.map((f) =>
      f.fecha.split("-").slice(1).reverse().join("/")
    );

    // Guardar en cache
    setCache(CACHE_KEY, feriados);
    return feriados;
  } catch (error) {
    console.error("Error al obtener feriados:", error);
    return getCache(CACHE_KEY) || []; // Retorna cache antiguo si existe, o array vacío
  }
}

// --- Funciones de Cache ---
function setCache(key: string, data: string[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  }
}

function getCache(key: string, maxAgeDays?: number): string[] | null {
  if (typeof window === "undefined") return null;

  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);

  // Verificar expiración
  if (maxAgeDays) {
    const ageInMs = Date.now() - timestamp;
    const maxAgeInMs = maxAgeDays * 24 * 60 * 60 * 1000;
    if (ageInMs > maxAgeInMs) return null;
  }

  return data;
}
