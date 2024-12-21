import express, { Request, Response } from 'express'

const app = express()
const port = 3002

app.get('/', (req: Request, res: Response) => {
  res.send('This is product server')
})

app.get('/:name', (req: Request, res: Response) => {
  res.send(`product name, ${req.params.name}!`)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
