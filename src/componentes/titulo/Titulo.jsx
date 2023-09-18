export default function Titulo({ cor, tamanhoDaFonte, pesoDaFonte, maiuscula, respiro, alturaDaLinha, children }) {
  return (
    <h1
      style={{
        color: `${cor}`,
        fontSize: `${tamanhoDaFonte}`,
        fontWeight: `${pesoDaFonte}`,
        textTransform: `${maiuscula}`,
        padding: `${respiro} 0`,
        lineHeight: `${alturaDaLinha}`
      }}
    >
      {children}
    </h1>
  )
}