import { Router } from "express";

const router = Router()

router.post('/', (req, res) => {
   const novoProduto = req.body;
   res.status(201).json(novoProduto)
})

router.put('/:id', (req, res) => {
   const { id } = req.params
   res.json({ id, ...req.body })
})

router.delete("/:id", (req, res) => {
   res.status(204).send()
})

export default router