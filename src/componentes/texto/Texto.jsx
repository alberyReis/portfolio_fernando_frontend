export default function Texto({ cor, tamanhoDaFonte, pesoDaFonte, maiuscula,respiro, alturaDaLinha, children }) {
  return (
    <p
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
    </p>
  )
}