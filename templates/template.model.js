const templateModel = `
import { PrismaClient, Prisma } from "@prisma/client";
const prismaClient = new PrismaClient()

class TemplateModel {

    async Create(dados) {
        const { _fields_ } = dados;
        try {
            const template = await prismaClient.template.create({
                data: {
                    _fields_
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
                    _fields_: true,

                    profile: {
                        select: {
                            _fields_: true,
                        },
                    }
                }
            })
            return template
        } catch (e) {
            throw e
        }
    }

    async Update(dados) {
        const { _fields_ } = dados

        try {
            const template = await prismaClient.template.update({
                where: {
                    id: id,
                },
                data: {
                    _fields_
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