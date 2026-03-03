import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
   const { categoria, pagina } = req.query
   res.json({ categoria, pagina })
});

router.get('/:id', (req, res) => {
   res.json({ id: req.params.id })
});

router.post('/', (req, res) => {
   res.status(201).json(req.body)
})

export default router