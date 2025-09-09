export function applyCors(req, res) {
  const origin = req.headers.origin;
  if (
    origin === "http://localhost:5173" ||
    origin === "https://mente-ativa-zopy.vercel.app" ||
    origin?.startsWith("https://mente-ativa-testanto-")
  ) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return true; // já respondeu
  }
  return false; // continua execução
}
