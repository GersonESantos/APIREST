import express from 'express'

const app = express()

app.use(express.json()) 

//moc
const selecoes = [
  {
    id: 1,
    nome: 'Brasil',
    tecnico: 'Tite',
    qtdCopas: 5
  },
  {
    id: 2,
    nome: 'Alemanha',
    tecnico: 'Joachim Low',
    qtdCopas: 4
  },
  {
    id: 3,
    nome: 'Itália',
    tecnico: 'Roberto Mancini',
    qtdCopas: 4
  },
  {
    id: 4,
    nome: 'Argentina',
    tecnico: 'Lionel Scaloni',
    qtdCopas: 2
  },
  {
    id: 5,
    nome: 'França',
    tecnico: 'Didier Deschamps',
    qtdCopas: 2
  }
]
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/selecoes', (req, res) => {
  res.send(selecoes)
});

app.post('/selecoes', (req, res) => {
  
  selecoes.pushreq.body
  res.status(201).send("Seleção adicionada com sucesso")
});

export default app
