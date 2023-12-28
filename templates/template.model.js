const templateModel = `
import { PrismaClient, Prisma } from "@prisma/client";
const prismaClient = new PrismaClient()
// const prismaClient = new PrismaClient({
//     log: ['query', 'error']
// })

class TemplateModel {

    async Create(dados) {
        const { destructure } = dados;
        try {
            const template = await prismaClient.template.create({
                data: {
                    destructure
                }
            })
            return template
        } catch (e) {
            throw e
        }
    }

    async Read() {
        try {
            const template = await prismaClient.template.findMany({
                select: {
                    // Insert fields to select 
                    // destructure
                    // field_name:true,
                    // If exist data child set how to below exemple
                    // child_model: {
                    //     select: {
                    //         //Insert child fields 
                    //         //fields: true,
                    //     },
                    // }
                }
            })
            return template
        } catch (e) {
            throw e
        }
    }

    async Update(dados) {
        const { destructure } = dados

        try {
            const template = await prismaClient.template.update({
                where: {
                    id: id,
                },
                data: {
                    destructure
                }
            })
            return template
        } catch (e) {
            throw e
        }
    }

    async Delete(id) {
        try {
            const template = await prismaClient.template.delete({
                where: {
                    id: id
                }
            })
            return template
        } catch (e) {
            throw e
        }
    }
}

export default new TemplateModel()`

export default templateModel