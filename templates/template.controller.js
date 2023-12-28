const templateController = `
import TemplateModel from "../model/template.model.js";

class TemplateController {

    async Create(req, res) {

        try {
            const destructure = req.body
            const temlate = await TemplateModel.Create({
                destructure
            })

            return res.status(200).json({ message: "Dados registrados!", data: temlate })
        } catch (error) {
            if (error.code == 'P2002') {
                return res.status(204).json({ message: 'Esse registro já existe' })
            }
            return res.status(204).json({ message: error.code })
        }
    }

    async Update(req, res) {
        try {
            const { destructure } = req.body
            const temlate = await TemplateModel.Update({
                destructure,
            })

            return res.status(204).json({ message: "Dados atualizado!", data: temlate })
        } catch (error) {
            return res.status(204).json({ message: error.code })
        }
    }

    async Read(req, res) {
        try {
            const { destructure } = req.body
            const dados = await TemplateModel.Read({
                destructure,
            })

            return res.status(200).json(dados)
        } catch (error) {
            return res.status(204).json({ message: error.code })
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id * 1
            await TemplateModel.Delete(id)
            return res.status(200).json({ message: 'Registro excluido!' })
        } catch (error) {
            if (error.code == 'P2025') {
                return res.status(204).json({ message: \`Registro com id \${req.params.id} não localizado!\` })
            }
            return res.status(204).json({ message: error.message, code: error.code })

        }
    }
}
export default new TemplateController()
`

export default templateController