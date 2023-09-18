export default function SubTitulo({ cor, tamanhoDaFonte, pesoDaFonte, maiuscula, respiro, alturaDaLinha, children }) {
  return (
    <h2
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
    </h2>
  )
}